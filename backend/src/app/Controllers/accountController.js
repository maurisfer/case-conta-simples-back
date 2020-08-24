const AccountModel = require('../Models/accountModel');

class AccountController {
  async store(req, res) {
    const Account = await AccountModel.create(req.body);

    return res.status(201).json({ Account });
  }
}

module.exports = new AccountController();
