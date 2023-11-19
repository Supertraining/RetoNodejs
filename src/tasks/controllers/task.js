// taskController.js
const taskModel = require('../models/taskModel');

const getAllTasks = (req, res) => {
  const tasks = taskModel.getAllTasks();
  res.json(tasks);
};

const createTask = (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: Date.now().toString(), title, description };
  const createdTask = taskModel.createTask(newTask);
  res.json(createdTask);
};

const updateTask = (req, res) => {
  const taskId = req.params.id;
  const { title, description } = req.body;
  const updatedTask = { id: taskId, title, description };
  const result = taskModel.updateTask(taskId, updatedTask);

  if (result) {
    res.json(updatedTask);
  } else {
    res.status(404).json({ error: 'Tarea no encontrada' });
  }
};

const deleteTask = (req, res) => {
  const taskId = req.params.id;
  taskModel.deleteTask(taskId);
  res.json({ message: 'Tarea eliminada correctamente' });
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
