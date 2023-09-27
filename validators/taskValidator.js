const { body, validationResult } = require('express-validator');

// Validation for creating a task
exports.validateCreateTask = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').optional(),
  body('status').isIn(['open', 'inprogress', 'completed']).withMessage('Invalid status'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Validation for updating a task
exports.validateUpdateTask = [
  body('title').optional(),
  body('description').optional(),
  body('status').optional().isIn(['open', 'inprogress', 'completed']).withMessage('Invalid status'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

