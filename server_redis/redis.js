const express = require("express");
const router = express.Router();
const redis = require("redis");
const Joi = require("joi");
const { v4: uuidv4 } = require("uuid");

const client = redis.createClient({
  password: "DybdKlnHnaGy2Rt2REHhKk3wnQ3tsPxR",
  socket: {
    host: "redis-15350.c135.eu-central-1-1.ec2.cloud.redislabs.com",
    port: 15350,
  },
});

const validate = (item) => {
  const schema = Joi.object({
    text: Joi.string().required(),
  });
  return schema.validate(item);
};

router.post("/redis", async (req, res) => {
  try {
    const { error } = validate(req.body);
    const id = uuidv4();
    client.connect();
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    await client.set(id, JSON.stringify(req.body));
    console.log(`Nowy element zosatł dodany pomyślnie.`);
    client.disconnect();
    res.status(201).send({ message: "Todo utworzone pomyślnie" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Wewnętrzny błąd serwera" });
  }
});

router.get("/list", async (req, res) => {
  try {
    client.connect();
    const keys = await client.keys("*");
    const data = await Promise.all(keys.map(async (key) => ({ id: key, data: JSON.parse(await client.get(key)) })));
    client.disconnect();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Wewnętrzny błąd serwera" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    client.connect();
    const { error } = validate(req.body);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    await client.set(req.params.id, JSON.stringify(req.body));
    console.log(`Element o id ${req.params.id} został zaktualizowany.`);
    client.disconnect();
    res.status(200).send({ message: "Todo zaktualizowane pomyślnie" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Wewnętrzny błąd serwera" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    client.connect();
    await client.del(req.params.id);
    console.log(`Element o id ${req.params.id} został usunięty.`);
    client.disconnect();
    res.status(200).send({ message: "Todo usunięte pomyślnie" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Wewnętrzny błąd serwera" });
  }
});

module.exports = router;
