/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

module.exports = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPost',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts'
    });

  blogPosts.associate = ({ User }) => {
    blogPosts.belongsTo(User, {
      foreignKey: 'id',
      as: 'author'
    });

    blogPosts.associate = ({ PostsCategory }) => {
      blogPosts.hasMany(PostsCategory, {
        foreignKey: 'post_id',
        as: 'post_category'
      })
    }
  };

  return blogPosts;
}