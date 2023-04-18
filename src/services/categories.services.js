const { Category } = require('../models');

const addCategory = async (name) => {
  const category = await Category.create({
    name,
  });
  return category;
};

const getAllCategories = () => Category.findAll();

module.exports = {
  addCategory,
  getAllCategories,
};