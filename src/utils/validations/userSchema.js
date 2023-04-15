const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required()
    .messages({
      'string.min': 'DISPLAY_NAME', 
    }),
  email: Joi.string().email().required()
    .messages({
      'string.email': 'EMAIL',
    }),
  password: Joi.string().min(6).required()
    .messages({
      'string.min': 'PASSWORD',
    }),
});

module.exports = {
  userSchema,
};