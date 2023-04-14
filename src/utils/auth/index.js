const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const options = {
  algorithm: 'HS256',
  expiresIn: '10d',
};

const generateToken = (email) => jwt.sign({ email }, secretKey, options);

const verifyToken = (token) => jwt.verify(token, secretKey);

module.exports = {
  generateToken,
  verifyToken,
};