const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Subject = require('./Subject');

const Question = sequelize.define('Question', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  answers: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  imageURL: DataTypes.STRING,
});

Question.belongsTo(Subject, { foreignKey: 'subjectId' });

module.exports = Question;
