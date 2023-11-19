const { models } = require('../../db/sequelize')
const bcryptHandle = require('../../utils/bcrypt.handle')

class UserServices {

  async getAll() {
    try {

      const users = await models.Users.findAll();
      return users

    } catch (error) {

      throw error

    }

  }

  async getById(id) {
    try {

      const user = await models.Users.findByPk(id)
      return user

    } catch (error) {

    }

  }

  async login(username, password) {

    try {

      const user = await models.Users.findOne({
        where: {
          username,
        }
      });
      const passwordMatch = await bcryptHandle.verifyPassword(password, user.password)
      if (!user || !passwordMatch) {
        throw new Error('Wrong username or password')
      }

      return user;

    } catch (error) {

      throw new Error(error.message)

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

  async update(id, data) {
    try {
      const user = await models.Users.findByPk(id)
      if (!user) {
        return user
      }
      const updatedUser = await models.Users.update(data, {
        where: {
          id: user.id,
        },
      });

      return updatedUser

    } catch (error) {

      throw error

    }

  }

  async delete(id) {
    try {

      const deletedUser = await models.Users.destroy({
        where: {
          id: id,
        },
      });
      return deletedUser

    } catch (error) {

      throw error

    }

  }

}

module.exports = UserServices