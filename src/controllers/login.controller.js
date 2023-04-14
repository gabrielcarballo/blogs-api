const { mapError } = require('../utils/errorMap');
const { loginValidations } = require('../utils/validations');
const { generateToken } = require('../utils/auth');
const loginService = require('../services');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const { message, type } = loginValidations(email, password);

  if (type) {
    return res.status(mapError(type)).json({ message });
  }

  const isLoginValid = await loginService.getUserByEmail(email, password);
  if (!isLoginValid) {
    return res.status(400).json({ message: 'Invalid fields' });
  } 
    const token = generateToken(email);
    return res.status(200).json({ token });
};