/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

module.exports = (sequelize, DataTypes) => {
  const postsCategories = sequelize.define('PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        foreignKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        foreignKey: true,
      }
    },
    {
      timestamps: false,
      underscored: true,
    },
  );

  postsCategories.associate = ({ BlogPost, Category }) => {
    Category.belongsToMany(BlogPost,
      {
        through: postsCategories,
        foreignKey: 'postId',
        as: 'post_category',
        otherKey: 'categoryId'
      });

    BlogPost.belongsToMany(Category,
      {
        through: postsCategories,
        foreignKey: 'categoryId',
        as: 'category_post',
        otherKey: 'postId'
      });
  }

  return postsCategories;
}