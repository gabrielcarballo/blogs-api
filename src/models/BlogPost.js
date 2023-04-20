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
      userId: {
        foreignKey: true,
        type: DataTypes.INTEGER,  
      },
      published: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts',
    });

  blogPosts.associate = ({ User }) => {
    blogPosts.belongsTo(User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };

  return blogPosts;
}