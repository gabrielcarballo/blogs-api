/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false
        },
        content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        published: {
          type: Sequelize.DATE,
        },
        updated: {
          type: Sequelize.DATE,
        }

      })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
