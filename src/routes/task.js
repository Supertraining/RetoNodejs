const TaskControllers = require('../tasks/controllers/task');
const express = require('express');
const router = express.Router();
const isAuthenticated = require('./middlewares/authValidation')
const authorize = require('./middlewares/roleValidation')

class TaskRouter {
    constructor() {
        this.taskController = new TaskControllers();
    }

    start() {        
        router.post('/', this.taskController.saveNewTask);
        router.use(isAuthenticated)
        router.get('/', authorize('admin') ,this.taskController.getTasks);
        router.put('/:id', this.taskController.updateTask);
        router.delete('/:id', authorize('admin'), this.taskController.deleteTask);
        
        return router;
    }
}

module.exports = TaskRouter;