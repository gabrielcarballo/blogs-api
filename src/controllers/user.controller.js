const { userValidations } = require('../utils/validations');
const { mapError } = require('../utils/errorMap');
const { userServices } = require('../services');
const { generateToken } = require('../utils/auth');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { message, type } = userValidations(displayName, email, password);
  if (type) {
    return res.status(mapError(type)).json({ message });
  }

  try {
    await userServices.signInUser(displayName, email, password, image);
    req.authorization = generateToken(email);
    return res.status(201).json({ token: req.authorization });
  } catch (error) {
    const { errors: [{ type: isUserRegistered }] } = error;
    if (isUserRegistered === 'unique violation') {
      return res.status(409).json({ message: 'User already registered' });
    }
  }
};

const getAllUsers = async (_req, res) => {
  const usersData = await userServices.getAllUsers();
  return res.status(200).json(usersData);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const userData = await userServices.getUserById(id);
  if (!userData) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(userData);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};