const bcrypt = require('bcryptjs'); //  Importa a biblioteca de criptografia
const jwt = require('jsonwebtoken'); // mporta a biblioteca de geração de tokens
const AccountModel = require('../Models/accountModel');

class AccountController {
  async store(req, res) {
    const Account = await AccountModel.create(req.body);

    return res.status(201).json({ Account });
  }

  // POST - Validação de login e senha
  async auth(req, res) {
    const { enterpriseID, password } = req.body; // Recupera as informações do body

    const user = await AccountModel.findOne({ enterpriseID }); // Filtra o usuário pelo e-mail mas retorna todos os dados do json do cadastro
    // user.pass = undefined; Pode ocultar a senha do retorno
    if (!user) return res.status(400).json('Credencias inválidas'); // If inline

    const correctUser = await bcrypt.compare(password, user.password); // Puxa dos dos dados a senha e compara com a senha digitada de login agravés do compare do bcrypt

    if (!correctUser) {
      return res.status(401).json({ msg: 'Credenciais inválidas' });
    }
    const { _id: id } = user; // Puxa o id

    const token = jwt.sign({ id }, process.env.JWT_KEY, {
      expiresIn: '1d',
    }); // Usa a biblioteca jwt para criar token de validação com o id do usuário e as informações vindas do header criptografadas pela senha process.env.JWT_KEY
    return res.json({ token });
  }
}

module.exports = new AccountController();
