const loginService = require('../services');

module.exports = async (_req, res) => {
  const usersData = await loginService.getAllUsers();
  return res.status(200).json(usersData);
};