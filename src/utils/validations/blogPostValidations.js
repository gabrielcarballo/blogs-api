const { blogPostSchema } = require('./blogPostSchema');

const blogPostValidations = (title, content, categoryIds) => {
  const { error } = blogPostSchema.validate({ title, content, categoryIds });

  if (!error) return { type: null, message: '' };
  const validation = error.details[0].message;

  switch (validation) {
    case 'FIELDS_MISSING':
      return {
        type: 'FIELDS_MISSING',
        message: 'Some required fields are missing',
      };

    case 'CATEGORYID_MISSING':
      return {
        type: 'CATEGORYID_MISSING',
        message: 'one or more "categoryIds" not found',
      };

    default:
      return { type: null, message: '' };
  }
};

module.exports = {
  blogPostValidations,
};