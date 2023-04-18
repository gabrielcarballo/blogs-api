const errorHash = {
  FIELDS_MISSING: 400,
  INVALID_FIELDS: 400,
  DISPLAY_NAME: 400,
  EMAIL: 400,
  PASSWORD: 400,
  CATEGORYID_MISSING: 400,
};

const mapError = (type) => errorHash[type] || 500;

module.exports = {
  errorHash,
  mapError,
};