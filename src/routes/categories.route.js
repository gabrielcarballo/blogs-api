const express = require('express');

const categoriesRoute = express.Router();

const { categoryService } = require('../controllers');
const authorization = require('../utils/auth/middlewares');

categoriesRoute.use('/categories', authorization, categoryService.addCategory);

module.exports = {
  categoriesRoute,
};