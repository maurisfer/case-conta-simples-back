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

  // GET - Cálculo para o gráfico - endpoint: /transactions 
  async getAllTransaction(req, res) {
    const AllTransaction = await TransactionModel.find({});
    const agoTransaction = await TransactionModel.find({
      month: '8',
      operationId: 1,
    });
    agoTransaction.forEach((element) => {
      const valores = element.value;
      console.log(valores);
      return valores;
    });
    // Nesse for each eu consigo acessar individalmente os valores que quero através dos filtros que fiz. Porém, tentaria fazer um reduce, mas ele também percorre um array. Nesse caso, os output são somente os valores individuas e não ficam em um array para que eu possa fazer o reduce. Alguma dica?
    // console.log(agoTransaction);
    res.status(200).json({ AllTransaction });

    // Promise all - Pesquisar
  }
}

module.exports = new TransactionController();
