/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

module.exports = (sequelize, DataTypes) => {
  const postsCategories = sequelize.define('PostsCategories',
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
    },
    {
      timestamps: false,
      underscored: true,
    },
  );

  postsCategories.associate = ({ BlogPost, Category }) => {
    postsCategories.belongsToMany(BlogPost, { foreignKey: 'postId', as: 'post_category' });
    postsCategories.belongsToMany(Category, { foreignKey: 'categoryId', as: 'category_post' });
  }

  return postsCategories;
}