const bcrypt = require('bcrypt');

module.exports = {

  encrypt : async (password) => {
    const passwordHash = await bcrypt.hash(password, 10);
    return passwordHash;
  },

  verified : async (password, passwordHash) => {
    const isCorrect = await compare(password, passwordHash);
    return isCorrect;
  }
}

