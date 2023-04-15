const { userValidations } = require('../utils/validations');

module.exports = (req, res) => {
  const { displayName, email, password } = req.body;
  userValidations(displayName, email, password);
  return res.json({});
};