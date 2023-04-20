const express = require('express');
const { blogPostController } = require('../controllers');
const authorization = require('../utils/auth/middlewares');

const blogPostRouter = express.Router();

blogPostRouter.post('/post', authorization, blogPostController.addPost);
blogPostRouter.get('/post', authorization, blogPostController.getPosts);

module.exports = {
  blogPostRouter,
};