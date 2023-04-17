const { getUserByEmail } = require('./login.services');
const userServices = require('./user.services');
const categoryService = require('./categories.services');

module.exports = {
  getUserByEmail,
  userServices,
  categoryService,
};