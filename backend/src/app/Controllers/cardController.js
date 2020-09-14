const CardModel = require('../Models/cardModel');

class CardController {
  // POST - Create a card
  async store(req, res) {
    const { account_id, cardName } = req.body;
    const Card = await CardModel.create([{ account_id, cardName }]);
    return res.status(200).json({ Card });
  }

  // GET - Find all cards by account_id
  async index(req, res) {
    const { id: account_id } = req.params;
    const findCard = await CardModel.find({ account_id });
    return res.status(200).json(findCard);
  }
}

module.exports = new CardController();
