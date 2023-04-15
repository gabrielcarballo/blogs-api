const { User } = require('../models');

const signInUser = (displayName, email, password, image) => User.create({
    displayName,
    email,
    password,
    image,
  });

module.exports = {
  signInUser,
};