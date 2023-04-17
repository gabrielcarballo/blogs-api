const express = require('express');
const { userGetController, userController } = require('../controllers');
const authorization = require('../utils/auth/middlewares');

const userRouter = express.Router();

userRouter.post('/user', userController);
userRouter.get('/user', authorization, userGetController);

module.exports = {
  userRouter,
};