const TaskService = require('../services/task');

class TaskControllers {

  constructor() {
    this.taskService = new TaskService()
  }

  getTasks = async (req, res) =>  {
    try {
      const tasks = await this.taskService.getTasks();
      tasks.length === 0 
      ? res.status(204).send()
      : res.json(tasks)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  saveNewTask = async (req, res) => {
    try {
      const { username, date, name, description } = req.body;
      const newTask = await this.taskService.saveNewTask(username, date, name, description);
      newTask.length === 0 
      ? res.status(204).send()
      : res.json(newTask)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }

  updateTask = async (req, res) => {
    try {
      const { id, username, date, name, description } = req.body;
      const task = await models.Tasks.findByPk(id);
      if (!task) {
        res.status(404).json({ error: 'Task not found' });
      } else {
        await task.update({username, date, name, description});
        res.json({ message: 'Task updated successfully' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  upsertTask = async (req, res) => {
    try {
      const { id, username, date, name, description } = req.body;  
      const task = await this.taskService.upsertTask(id, username, date, name, description);
      task.length === 0 
      ? res.status(204).send()
      : res.json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
      const taskToDelete = await this.taskService.deleteTask(id);
      taskToDelete === 0 
      ? res.status(404).json({ error: 'Task not found' })
      : res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}

module.exports = TaskControllers;
