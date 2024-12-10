const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Curso = sequelize.define('Curso', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: true, // Añade createdAt y updatedAt automáticamente
});

module.exports = Curso;
