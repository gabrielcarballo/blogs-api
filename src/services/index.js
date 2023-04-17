const { getUserByEmail } = require('./login.services');
const userServices = require('./user.services');

module.exports = {
  getUserByEmail,
  userServices,
};