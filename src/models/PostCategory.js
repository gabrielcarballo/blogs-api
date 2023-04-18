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
        foreignKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      }
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
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