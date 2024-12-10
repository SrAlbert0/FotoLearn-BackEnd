const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: console.log, // Puedes desactivarlo con `false`
});

sequelize
  .authenticate()
  .then(() => console.log('Conexión con la base de datos exitosa'))
  .catch((error) => console.error('Error al conectar con la base de datos:', error));

module.exports = sequelize;
