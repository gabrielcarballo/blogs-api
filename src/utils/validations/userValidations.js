const { userSchema } = require('./userSchema');

const userValidations = (DisplayName, Email, Password) => {
  const { value } = userSchema.validate({ DisplayName, Email, Password });
  if (!value.DisplayName) {
    return {
      type: 'DISPLAY_NAME',
      message: '"displayName" length must be at least 8 characters long',
    };
  } if (!value.Email) {
    return { type: 'EMAIL', message: '"email" must be a valid email' };
  } if (!value.Password) {
    return { type: 'PASSWORD', message: '"password" length must be at least 6 characters long' };
  }
  return { type: null, message: '' };
};

module.exports = {
  userValidations,
};