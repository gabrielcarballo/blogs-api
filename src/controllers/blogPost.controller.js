const { blogPostValidations } = require('../utils/validations');
const { mapError } = require('../utils/errorMap');
const { blogPostService } = require('../services');

const addPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const { message, type } = blogPostValidations(title, content, categoryIds);
  if (type) {
    return res.status(mapError(type)).json({ message });
  }
  res.status(201).json();
};

const getPosts = async (_req, res) => {
  const data = await blogPostService.getPosts();
  return res.status(200).json(data);
};

module.exports = {
  addPost,
  getPosts,
};