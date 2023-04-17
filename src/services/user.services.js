const { User } = require('../models');

const signInUser = (displayName, email, password, image) => User.create({
  displayName,
  email,
  password,
  image,
});

const getAllUsers = async () => {
  const data = await User.findAll({
    attributes: ['id', ['display_name', 'displayName'], 'email', 'image'],
  });
  return data;
};

const getUserById = async (id) => {
  const data = await User.findOne({
    attributes: ['id', ['display_name', 'displayName'], 'email', 'image'],
    where: { id },
  });
  return data;
};

module.exports = {
  signInUser,
  getAllUsers,
  getUserById,
};