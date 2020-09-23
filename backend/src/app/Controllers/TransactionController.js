const TransactionModel = require('../Models/transactionModel');

class TransactionController {
  // POST - Transações
  async store(req, res) {
    const Transaction = await TransactionModel.create([req.body]);
    return res.status(201).json({ Transaction });
  }

  // GET - Transações pelo ID do Cartã
  async show(req, res) {
    const { id: card_id } = req.params;
    const CardTransaction = await TransactionModel.find({ card_id });
    res.status(200).json(CardTransaction);
  }

  async index(req, res) {
    const allTransactions = await TransactionModel.find({ });
    res.status(200).json(allTransactions);
  }

  // GET - Cálculo para o gráfico - endpoint: /transactionscd
  async showCredit(req, res) {
    const janTransaction = await TransactionModel.find({
      month: '01',
      operationId: 1,
    });
    const totalJan = janTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const fevTransaction = await TransactionModel.find({
      month: '02',
      operationId: 1,
    });
    const totalFev = fevTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const marTransaction = await TransactionModel.find({
      month: '03',
      operationId: 1,
    });
    const totalMar = marTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const abrTransaction = await TransactionModel.find({
      month: '04',
      operationId: 1,
    });
    const totalAbr = abrTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const maiTransaction = await TransactionModel.find({
      month: '05',
      operationId: 1,
    });
    const totalMai = maiTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const junTransaction = await TransactionModel.find({
      month: '06',
      operationId: 1,
    });
    const totalJun = junTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const julTransaction = await TransactionModel.find({
      month: '07',
      operationId: 1,
    });
    const totalJul = julTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const agoTransaction = await TransactionModel.find({
      month: '08',
      operationId: 1,
    });
    const totalAgo = agoTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const setTransaction = await TransactionModel.find({
      month: '09',
      operationId: 1,
    });
    const totalSet = setTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const outTransaction = await TransactionModel.find({
      month: '10',
      operationId: 1,
    });
    const totalOut = outTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const novTransaction = await TransactionModel.find({
      month: '11',
      operationId: 1,
    });
    const totalNov = novTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const dezTransaction = await TransactionModel.find({
      month: '12',
      operationId: 1,
    });
    const totalDez = dezTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    Promise.all([
      totalJan,
      totalFev,
      totalMar,
      totalAbr,
      totalMai,
      totalJun,
      totalJul,
      totalAgo,
      totalSet,
      totalOut,
      totalNov,
      totalDez,
    ]).then((data) => {
      res.status(200).json(data);
    });
  }

  // GET - Cálculo para o gráfico - endpoint: /transactionsdb
  async showDebit(req, res) {
    const janTransaction = await TransactionModel.find({
      month: '01',
      operationId: 0,
    });
    const totalJan = janTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const fevTransaction = await TransactionModel.find({
      month: '02',
      operationId: 0,
    });
    const totalFev = fevTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const marTransaction = await TransactionModel.find({
      month: '03',
      operationId: 0,
    });
    const totalMar = marTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const abrTransaction = await TransactionModel.find({
      month: '04',
      operationId: 0,
    });
    const totalAbr = abrTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const maiTransaction = await TransactionModel.find({
      month: '05',
      operationId: 0,
    });
    const totalMai = maiTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const junTransaction = await TransactionModel.find({
      month: '06',
      operationId: 0,
    });
    const totalJun = junTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const julTransaction = await TransactionModel.find({
      month: '07',
      operationId: 0,
    });
    const totalJul = julTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const agoTransaction = await TransactionModel.find({
      month: '08',
      operationId: 0,
    });
    const totalAgo = agoTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const setTransaction = await TransactionModel.find({
      month: '09',
      operationId: 0,
    });
    const totalSet = setTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const outTransaction = await TransactionModel.find({
      month: '10',
      operationId: 0,
    });
    const totalOut = outTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const novTransaction = await TransactionModel.find({
      month: '11',
      operationId: 0,
    });
    const totalNov = novTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );
    const dezTransaction = await TransactionModel.find({
      month: '12',
      operationId: 0,
    });
    const totalDez = dezTransaction.reduce(
      (previousValue, element) => previousValue + element.value,
      0
    );

    Promise.all([
      totalJan,
      totalFev,
      totalMar,
      totalAbr,
      totalMai,
      totalJun,
      totalJul,
      totalAgo,
      totalSet,
      totalOut,
      totalNov,
      totalDez,
    ]).then((data) => {
      res.status(200).json(data);
    });
  }
}

module.exports = new TransactionController();
