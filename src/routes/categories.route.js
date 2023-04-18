const express = require('express');

const categoriesRoute = express.Router();

const { categoryController } = require('../controllers');
const authorization = require('../utils/auth/middlewares');

categoriesRoute.post('/categories', authorization, categoryController.addCategory);
categoriesRoute.get('/categories', authorization, categoryController.getAllCategories);

module.exports = {
  categoriesRoute,
};