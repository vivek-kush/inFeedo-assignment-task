require('dotenv').config();

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/', taskController.createTask);
router.put('/:taskId', taskController.updateTask);
router.get('/', taskController.getTasks);
router.get('/metrics', taskController.getTaskMetrics);

module.exports = router;
