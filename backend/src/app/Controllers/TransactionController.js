const TransactionModel = require('../Models/transactionModel');

class TransactionController {
  async store(req, res) {
    const Transaction = await TransactionModel.create(req.body);

    return res.status(201).json({ Transaction });
  }
}

module.exports = new TransactionController();
