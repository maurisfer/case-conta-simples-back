const bcrypt = require('bcryptjs');
const AccountModel = require('../Models/accountModel');

class Auxiliar {
  async cardCreateAuxliar(req, res, next) {
    const { account_id: id, password } = req.body;
    const Verifypass = await AccountModel.findOne({ id });
    if (Verifypass) {
      await bcrypt.compare(password, Verifypass.password);
    }
    res.status(200);
    return next();
  }
}

module.exports = new Auxiliar();
