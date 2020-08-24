const CardModel = require('../Models/cardModel');

class CardController {
  async store(req, res) {
    const Card = await CardModel.create(req.body);

    return res.status(201).json({ Card });
  }
}

module.exports = new CardController();
