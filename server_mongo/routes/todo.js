const express = require("express");
const router = express.Router();
const { ToDo, validate } = require("../models/ToDoSchema.js");

router.get("/", async (req, res) => {
  const todo = await ToDo.find();
  res.send(todo);
});

router.post("/save", (req, res) => {
  const { text } = req.body;

  ToDo.create({ text })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
});

router.post("/update", (req, res) => {
  const { _id, text } = req.body;

  ToDo.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send("Updated Successfully"))
    .catch((err) => console.log(err));
});

router.post("/delete", (req, res) => {
  const { _id } = req.body;

  ToDo.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully"))
    .catch((err) => console.log(err));
});

module.exports = router;
