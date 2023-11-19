const UserControllers = require('../controllers/user')

const router = require('express').Router()

class UserRouter {
  constructor() {

  this.usercontrollers = new UserControllers()
  }
  
  start() {

    router.get('/', this.usercontrollers.getAll);

    router.get('/:id', this.usercontrollers.getById);

    router.post('/register', this.usercontrollers.register)

    router.post('/login', this.usercontrollers.login);

    router.put('/', this.usercontrollers.update)

    router.delete('/:id', this.usercontrollers.delete )
  
    return router;

  }
}

module.exports = UserRouter;
