const express = require('express');
const router = express.Router();
const studentsController = require('../Controllers/StudentControllers');

router.post('/', studentsController.createStudent);
router.get('/', studentsController.getAllStudents);
router.put('/:id', studentsController.updateStudent);
router.delete('/:id', studentsController.deleteStudent);

module.exports = router;