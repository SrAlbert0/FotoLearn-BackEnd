const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

const User = require('./User');
const UserCourse = require('./UserCourse');
const Course = require('./Course');
const Subject = require('./Subject');
const Question = require('./Question');

// Relaciones
User.hasMany(UserCourse, { foreignKey: 'UserId' });
Course.hasMany(UserCourse, { foreignKey: 'courseId' });
Subject.hasMany(Course, { foreignKey: 'subjectId' });
Subject.hasMany(Question, { foreignKey: 'subjectId' });

module.exports = sequelize;
