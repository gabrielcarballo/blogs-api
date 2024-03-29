const { categoryService } = require('../services');

const addCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });
  const data = await categoryService.addCategory(name);
  return res.status(201).json(data);
};

const getAllCategories = async (_req, res) => {
  const data = await categoryService.getAllCategories();
  return res.status(200).json(data);
};

module.exports = {
  addCategory,
  getAllCategories,
};