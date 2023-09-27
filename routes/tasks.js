require('dotenv').config();

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { validateCreateTask, validateUpdateTask, validateGetTasks } = require('../validators/taskValidator');

router.post('/', validateCreateTask, taskController.createTask);
router.put('/:taskId', validateUpdateTask, taskController.updateTask);
router.get('/', taskController.getTasks);
router.get('/metrics', taskController.getTaskMetrics);

module.exports = router;
