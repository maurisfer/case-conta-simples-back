const bcrypt = require('bcryptjs'); //  Importa a biblioteca de criptografia
const jwt = require('jsonwebtoken'); // mporta a biblioteca de geração de tokens
const AccountModel = require('../Models/accountModel');

class AccountController {
  // POST - Create an account
  async store(req, res) {
    const Account = await AccountModel.create([req.body]); // Involving req.body with [] forces return an array
    // console.log(Array.isArray(Account)); Should return true in console.
    return res.status(201).json({ Account }); // return Array
  }

  // GET - All account index
  async index(req, res) {
    const getAccounts = await AccountModel.find();
    // console.log(Array.isArray(getAccounts)); Should return true in console.
    return res.status(200).json({ getAccounts });
  }

  // GET - One single account
  async show(req, res) {
    const { account_id: id } = req.params;
    const oneAccount = await AccountModel.findOne(id);
    return res.status(200).json([oneAccount]);
  }

  // POST - Validação de login e senha
  async auth(req, res) {
    const { enterpriseID, password } = req.body;

    const account = await AccountModel.findOne({ enterpriseID });
    if (!account) return res.status(400).json({ msg: 'Credencias inválidas' });

    const correctUser = await bcrypt.compare(password, account.password);

    if (!correctUser) {
      return res.status(401).json({ msg: 'Credenciais inválidas' });
    }
    const { _id: id } = account; // Puxa o id

    const token = jwt.sign({ id }, process.env.JWT_KEY, {
      expiresIn: '1d',
    });

    return res.json({ token, id });
  }
}

module.exports = new AccountController();
