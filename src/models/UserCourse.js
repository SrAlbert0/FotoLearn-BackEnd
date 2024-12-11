const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./User');
const Course = require('./Course');

const UserCourse = sequelize.define('UserCourse', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  CourseName: DataTypes.STRING,
  userGrades: DataTypes.FLOAT,
});

UserCourse.belongsTo(User, { foreignKey: 'UserId' });
UserCourse.belongsTo(Course, { foreignKey: 'courseId' });

module.exports = UserCourse;
