const express = require('express');
const app = express();
const TaskRoutes = require('./src/routes/task');
const UserRouter = require('./src/routes/user')
const logger = require('./src/routes/middlewares/logger');

const userRoutes = new UserRouter()
const taskRoutes = new TaskRoutes()

app.use(express.json());
app.use(logger);
app.use('/api/user', userRoutes.start())
app.use('/api/tasks', taskRoutes.start());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));