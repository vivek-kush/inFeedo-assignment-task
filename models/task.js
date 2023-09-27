const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Define the allowed enum values
const validStatusValues = ['open', 'inprogress', 'completed'];

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING, 
    defaultValue: 'open',
    validate: {
      isValidStatus(value) {
        if (!validStatusValues.includes(value)) {
          throw new Error('Invalid status');
        }
      },
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Task;
