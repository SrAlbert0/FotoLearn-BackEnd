const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Subject = sequelize.define('Subject', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
  imageURL: DataTypes.STRING,
});

module.exports = Subject;
