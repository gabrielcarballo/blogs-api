const Joi = require('joi');

const blogPostSchema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': 'FIELDS_MISSING',
  }),
  content: Joi.string().required().messages({
    'any.required': 'FIELDS_MISSING',
  }),
  categoryIds: Joi.array().required().messages({
    'any.required': 'FIELDS_MISSING',
  }),
});

module.exports = {
  blogPostSchema,
};