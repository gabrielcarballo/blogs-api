/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

module.exports = (sequelize, DataTypes) => {
  const userModel = sequelize.define('User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: DataTypes.STRING,
      displayName: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'users'
    },
  );

  userModel.associate = ({ BlogPost }) => {
    userModel.hasMany(BlogPost, { foreignKey: 'userId', as: 'user' })
  }

  return userModel;
}
