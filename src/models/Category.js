/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

module.exports = (sequelize, DataTypes) => {
  const categoriesModel = sequelize.define('Category',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'categories',
    },
  );

  categoriesModel.associate = ({ BlogPost }) => {
    categoriesModel.hasMany(BlogPost, { foreignKey: 'user_id', as: 'author' })
  }

  categoriesModel.associate = ({ PostCategory }) => {
    categoriesModel.hasMany(PostCategory, { foreignKey: 'category_id', as: 'category_post' });
  }

  return categoriesModel;
}