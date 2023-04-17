const { User } = require('../models');

const getAllUsers = async () => {
  const data = await User.findAll({
    attributes: ['id', ['display_name', 'displayName'], 'email', 'image'],
  });
  return data;
};

module.exports = {
  getAllUsers,
};