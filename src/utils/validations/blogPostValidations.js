const { blogPostSchema } = require('./blogPostSchema');

const blogPostValidations = ({ title, content, categoryIds }) => {
  if (!title || !content) {
    return {
      type: 'FIELDS_MISSING',
      message: 'Some required fields are missing',
    };
  };

  if (!categoryIds) {
    return {
      type: 'CATEGORYID_MISSING',
      message: 'one or more \"categoryIds\" not found',
    };
  };
  return { type: null, message: '' };
};

module.exports = {
  blogPostValidations,
}