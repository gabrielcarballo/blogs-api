const { loginSchema } = require('./loginSchema');

const loginValidations = (email, password) => {
  if (!email || !password) {
    return {
      type: 'FIELDS_MISSING',
      message: 'Some required fields are missing',
    };
  }

  const { error } = loginSchema.validate({ email, password });
  if (error) return { type: 'INVALID_FIELDS', message: 'Invalid fields' };
  return { type: null, message: '' };
};

module.exports = {
  loginValidations,
};