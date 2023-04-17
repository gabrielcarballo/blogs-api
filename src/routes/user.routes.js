const express = require('express');
const { userController } = require('../controllers');
const authorization = require('../utils/auth/middlewares');

const userRouter = express.Router();

userRouter.post('/user', userController.createUser);
userRouter.get('/user/:id', authorization, userController.getUserById);
userRouter.get('/user', authorization, userController.getAllUsers);

module.exports = {
  userRouter,
};