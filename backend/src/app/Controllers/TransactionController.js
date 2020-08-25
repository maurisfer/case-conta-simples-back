const TransactionModel = require('../Models/transactionModel');

class TransactionController {
  // POST - Transações
  async store(req, res) {
    const Transaction = await TransactionModel.create(req.body);

    return res.status(201).json({ Transaction });
  }

  // GET - Transações pelo ID do Cartão
  async getTransactionsByCardId(req, res) {
    const { _id: id } = req.params;
    const CardTransaction = await TransactionModel.find({ card_id: id });
    res.status(200).json({ CardTransaction });
  }
}

module.exports = new TransactionController();
