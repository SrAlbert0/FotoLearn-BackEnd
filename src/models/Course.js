const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Subject = require('./Subject');

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maxMark: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Course.belongsTo(Subject, { foreignKey: 'subjectId' });

module.exports = Course;
