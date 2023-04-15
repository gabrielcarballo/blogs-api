const { getUserByEmail } = require('./login.services');
const { signInUser } = require('./user.services');

module.exports = {
  getUserByEmail,
  signInUser,
};