const { User } = require('../models');

const getUserByEmail = (email, password) => User.findOne({ where: { email, password } });

module.exports = {
  getUserByEmail,
};