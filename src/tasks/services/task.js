const { models } = require('../../db/sequelize')

class TaskService {


  async getTasks() {
    try {

      const tasks = await models.Tasks.findAll()

      return tasks

    } catch (error) {

      throw error

    }

  }

  async saveNewTask(username, date, name, description) {
    try {

      const productCreated = await models.Tasks.create({
        username,
        date,
        name,
        description
      })

      return productCreated

    } catch (error) {

      throw error

    }

  }

  async updateTask(id, username, date, name, description) {

    const tasks = await models.Tasks.findByPk(id)

    await product.update({
      username,
      date,
      name,
      description
    })

  }

  async upsertTask(id, username, date, name, description) {
    try {

      const task = await models.Tasks.findByPk(id)

      if (!task) {
        const newTask = this.saveNewTask(username, date, name, description)
        return newTask
      }

      const updatedTask = await product.update({
        username,
        date,
        name,
        description
      })
      return updatedTask

    } catch (error) {

      throw error

    }

  }

  async deleteTask(id) {
    try {

      const taskToDelete = await models.Tasks.destroy({
        where: {
          id: id,
        },
      });

      return taskToDelete;

    } catch (error) {

      throw error

    }

  }
  
}

module.exports = TaskService