require('dotenv').config();
const express = require('express');
const helmet = require('helmet'); // Para mayor seguridad
const rateLimit = require('express-rate-limit'); // Para limitar solicitudes
const sequelize = require('./models');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const app = express();

// Middleware de seguridad
app.use(helmet()); // Configura encabezados de seguridad
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Máximo 100 solicitudes por IP
  })
);

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes); // Autenticación
app.use('/api/users', userRoutes); // Usuarios

// Sincronizar base de datos y levantar el servidor
const PORT = process.env.PORT || 8080;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
});
