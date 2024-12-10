const express = require('express');
const router = express.Router();
const Curso = require('../models/Curso');

// Obtener todos los cursos
router.get('/', async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los cursos' });
  }
});

// Crear un nuevo curso
router.post('/', async (req, res) => {
    try {
      const nuevoCurso = await Curso.create(req.body); // Asegúrate de que req.body contiene los datos
      res.status(201).json(nuevoCurso);
    } catch (error) {
      res.status(400).json({ error: 'Error al crear el curso', detalle: error.message });
    }
  });
  

// Eliminar un curso por ID
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const cursoEliminado = await Curso.destroy({ where: { id } });
    if (!cursoEliminado) return res.status(404).json({ error: 'Curso no encontrado' });
    res.json({ mensaje: 'Curso eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el curso' });
  }
});

module.exports = router;
