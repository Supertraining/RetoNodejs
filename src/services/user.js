const { models } = require('../db/sequelize')
const bcryptHandle = require('../utils/bcrypt.handle')

class UserServices {

  async getAll() {
    try {

    } catch (error) {

    }

  }

  async getById() {
    try {

    } catch (error) {

    }

  }

  async login() {
    try {

    } catch (error) {

    }

  }

  async register(username, password, role) {

    try {
      const hashedPass = await bcryptHandle.encrypt(password)
      const newUser = await models.Users.create({
        username: username,
        password: hashedPass,
        role: role
      })
      return newUser

    } catch (error) {
      
      throw error

    }

  }

  async update() {
    try {

    } catch (error) {

    }

  }

  async delete() {
    try {

    } catch (error) {

    }

  }

}

module.exports = UserServices