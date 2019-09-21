const Joi = require("joi");

const schema = Joi.object().keys({
  url: Joi.string().uri()
});

module.exports = schema;