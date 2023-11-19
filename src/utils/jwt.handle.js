const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  createToken: async (payload) => {
    const token = jwt.sign(payload, process.env.JWT_KEY);
    return token
  }
}