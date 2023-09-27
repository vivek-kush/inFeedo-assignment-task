require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const sequelize = require('./db')
const taskRoutes = require('./routes/tasks');



app.use(bodyParser.json());
sequelize.sync()

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
