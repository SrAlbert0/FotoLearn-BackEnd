require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const sequelize = require('./models'); // Conexión a Sequelize
const cursoRoutes = require('./routes/cursos');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api/cursos', cursoRoutes);

// Sincroniza Sequelize y levanta el servidor
const PORT = process.env.PORT || 8080;

sequelize
  .sync({ force: false }) // Cambiar a true si quieres reiniciar las tablas
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });
