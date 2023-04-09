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
    },
  );

  userModel.associate = ({ BlogPost }) => {
    userModel.hasMany(BlogPost, { foreignKey: 'user_id', as: 'author' })
  }

  categoriesModel.associate = ({ PostsCategories }) => {
    categoriesModel.hasMany(PostsCategories, { foreignKey: 'category_id', as: category_post });
  }

  return categoriesModel;
}