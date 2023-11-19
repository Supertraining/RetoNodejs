const UserServices = require("../services/user");


class UserControllers {

  constructor() {
    this.userServices = new UserServices()
  }
  getAll = async (req, res) => {
    try {

      const response = await this.userServices.getAll()


    } catch (error) {

    }

  }

  getById = async (req, res) => {
    try {

      const response = await this.userServices.getById(req.id)

    } catch (error) {

    }

  }

  login = async (req, res) => {
    try {

      const response = await this.userServices.login()

    } catch (error) {

    }

  }

  register = async (req, res) => {
    try {
      const { username, password, role } = req.body
      const response = await this.userServices.register(username, password, role)
      response
        ? res.status(201).json(response)
        : res.status(401).send('Bad request')

    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }

  }

  update = async (req, res) => {
    try {

      const response = await this.userServices.update()

    } catch (error) {

    }

  }

  delete = async (req, res) => {
    try {

    } catch (error) {

    }

  }

}

module.exports = UserControllers;