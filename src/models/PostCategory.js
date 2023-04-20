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
    BlogPost.belongsToMany(Category,
      {
        through: postsCategories,
        foreignKey: 'categoryId', 
        as: 'categories',
        otherKey: 'postId'
      });

    Category.belongsToMany(BlogPost,
      {
        through: postsCategories,
        foreignKey: 'postId',
        as: 'blog_posts',
        otherKey: 'categoryId'
      });

  }

  return postsCategories;
}