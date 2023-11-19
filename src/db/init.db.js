const { Task, TaskSchema } = require('./models/task')
const { User, UserSchema } = require('./models/user')

function setupModels(sequelize) {
  Task.init(TaskSchema, Task.config(sequelize))
  User.init(UserSchema, User.config(sequelize))
}

module.exports = setupModels