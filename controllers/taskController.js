require('dotenv').config();

const Task = require('../models/task');
const { fn, col, literal } = require('sequelize');
const moment = require('moment');

// Create a task
exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to create a task. Error: ' + error.message });
    }
};

// Update a task by ID
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found. id: ' + req.params.id});
        }
        await task.update(req.body);
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to update the task. Error: ' + error.message });
    }
};

// Get all tasks with pagination
exports.getTasks = async (req, res) => {
    try {
        const pageSize = process.env.PAGE_SIZE
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * pageSize
        const tasks = await Task.findAll({ limit: pageSize, offset: offset });
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve tasks. Error: ' + error.message });
    }
};

// Get task metrics
exports.getTaskMetrics = async (req, res) => {
    try {

      const metrics = await Task.findAll({
        attributes: [
          [
            fn('strftime', '%Y-%m', col('createdAt')),
            'year_month'
          ],
          [fn('COUNT', literal('*')), 'count'],
          'status',
        ],
        group: ['year_month', 'status'],
        raw: true,
      });
  
      
      const metricsByMonth = {};
      const aggregateMetrics = {
            open_tasks: 0,
            inprogress_tasks: 0,
            completed_tasks: 0,
        }
  
      metrics.forEach((metric) => {
        const { year_month, status, count } = metric;
  
        if (!metricsByMonth[year_month]) {
          metricsByMonth[year_month] = {
              open_tasks: 0,
              inprogress_tasks: 0,
              completed_tasks: 0,
          };
        }
        aggregateMetrics[`${status}_tasks`] += 
        metricsByMonth[year_month][`${status}_tasks`] = count;
      });
  
      const result = {
      aggregate_metrics: aggregateMetrics,
      metric_by_month: Object.entries(metricsByMonth).map(([date, metrics]) => ({
        date: moment(date, 'YYYY-MM').format('MMMM YYYY'),
        metrics,
      })),
    };
  
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error: ' + error.message});
    }
  };