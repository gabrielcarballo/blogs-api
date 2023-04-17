const { userValidations } = require('../utils/validations');
const { mapError } = require('../utils/errorMap');
const userService = require('../services');
const { generateToken } = require('../utils/auth');

module.exports = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { message, type } = userValidations(displayName, email, password);
  if (type) {
    return res.status(mapError(type)).json({ message });
  }

  try {
    await userService.signInUser(displayName, email, password, image);
    req.authorization = generateToken(email);
    return res.status(201).json({ token: req.authorization });
  } catch (error) {
    const { errors: [{ type: isUserRegistered }] } = error;
    if (isUserRegistered === 'unique violation') {
      return res.status(409).json({ message: 'User already registered' });
    }
  }
};