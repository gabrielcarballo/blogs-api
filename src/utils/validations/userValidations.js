const { userSchema } = require('./userSchema');

const userValidations = (displayName, email, password) => {
  const { error } = userSchema.validate({ displayName, email, password });
  if (!error) return { type: null, message: '' };
  const validation = error.details[0].message;
  switch (validation) {
    case 'DISPLAY_NAME':
      return {
        type: 'DISPLAY_NAME',
        message: '"displayName" length must be at least 8 characters long',
      };
    case 'EMAIL': return { type: 'EMAIL', message: '"email" must be a valid email' };
    case 'PASSWORD':
      return {
        type: 'PASSWORD',
        message: '"password" length must be at least 6 characters long',
      };
    default:
      return { type: null, message: '' };
  }
};

module.exports = {
  userValidations,
};