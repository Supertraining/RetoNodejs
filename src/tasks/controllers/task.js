const TaskService = require('../services/task');


class TaskController {

  constructor() {
    this.taskService = new TaskService()
  }

  getTasks = async (req, res) =>  {

    const tasks = await this.taskService.getTasks()
    
    tasks.length === 0 
    ? res.status(204).send()
    : res.json(tasks)
  }

}