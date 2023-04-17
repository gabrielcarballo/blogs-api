const { getUserByEmail } = require('./login.services');
const { signInUser } = require('./user.services');
const { getAllUsers } = require('./user.get.service');

module.exports = {
  getUserByEmail,
  signInUser,
  getAllUsers,
};