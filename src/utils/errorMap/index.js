const errorHash = {
  FIELDS_MISSING: 400,
  INVALID_FIELDS: 400,
};

const mapError = (type) => errorHash[type] || 500;

module.exports = {
  errorHash,
  mapError,
};