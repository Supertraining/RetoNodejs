const UserControllers = require('../users/controllers/user')
const router = require('express').Router()
const isAuthenticated = require('./middlewares/authValidation')
const authorize = require('./middlewares/roleValidation')

class UserRouter {
  constructor() {
    this.usercontrollers = new UserControllers()
  }

  start() {

    router.post('/register', this.usercontrollers.register)

    router.post('/login', this.usercontrollers.login);

    router.use(isAuthenticated)

    router.get('/', authorize('admin'), this.usercontrollers.getAll);

    router.get('/:id', this.usercontrollers.getById);

    router.put('/:id', this.usercontrollers.update)

    router.delete('/:id', authorize('admin'), this.usercontrollers.delete)

    return router;

  }
}

module.exports = UserRouter;
