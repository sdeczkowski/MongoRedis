const mongoose = require("mongoose");
const Joi = require("joi");

let TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

let ToDo = mongoose.model("Todo", TodoSchema);

const validate = (item) => {
  const schema = Joi.object({
    Text: Joi.string().required().label("Text"),
  });
  return schema.validate(item);
};

module.exports = { ToDo, validate };
