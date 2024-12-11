const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// Rutas protegidas
router.get('/', protect, async (req, res) => {
  // Aquí solo pueden acceder usuarios autenticados
  const courses = await Course.findAll();
  res.json(courses);
});
