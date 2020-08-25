const CardModel = require('../Models/cardModel');

class CardController {
  async store(req, res) {
    const Card = await CardModel.create(req.body);
    return res.status(201).json({ Card });
  }

  async getCardByAccountID(req, res) {
    const { _id: id } = req.params; // Puxa da URL o id da conta
    const findCard = await CardModel.find({ account_id: id });
    res.status(200).json({ findCard }); // Quando for consultar pelo front é essa variavel que irá consumir
  }
}

module.exports = new CardController();
