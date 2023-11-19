// taskModel.js
let tasks = [];

const getAllTasks = () => {
  return tasks;
};

const getTaskById = (taskId) => {
  return tasks.find(task => task.id === taskId);
};

const createTask = (newTask) => {
  tasks.push(newTask);
  return newTask;
};

const updateTask = (taskId, updatedTask) => {
  const index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks[index] = updatedTask;
    return updatedTask;
  }
  return null; // Tarea no encontrada
};

const deleteTask = (taskId) => {
  tasks = tasks.filter(task => task.id !== taskId);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
