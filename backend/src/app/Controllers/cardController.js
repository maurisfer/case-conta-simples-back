const bcrypt = require('bcryptjs');
const CardModel = require('../Models/cardModel');
const AccountModel = require('../Models/accountModel');

class CardController {
  async store(req, res) {
    const { account_id, cardName, password } = req.body;
    const Verifypass = await AccountModel.findOne({ account_id });
    if (Verifypass) {
      await bcrypt.compare(password, Verifypass.password);
    }
    const Card = await CardModel.create({ account_id, cardName }); // Envia somente os dados necessários para a criação do cartão
    return res.status(201).json({ Card });
  }

  async getCardByAccountID(req, res) {
    const { account_id } = req.params; // Puxa do body o id da conta
    const findCard = await CardModel.find( account_id );
    res.status(200).json({ findCard }); // Quando for consultar pelo front é essa variavel que irá consumir
  }
}

module.exports = new CardController();
