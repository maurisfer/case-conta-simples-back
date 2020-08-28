const routes = require('express').Router();
const TransactionController = require('./app/Controllers/TransactionController');
const AccountController = require('./app/Controllers/accountController');
const CardController = require('./app/Controllers/cardController');
// const jwtMid = require('./app/middlewares/jwt');

routes.post('/login', AccountController.auth);
routes.post('/account', AccountController.store); // Cria o cadastro de usuário seguindo o accountModel. Tem que coloar um middleware para validação de login e yup.
routes.post('/transactions', TransactionController.store); // Cria as transações, todas serão feitas pelo insomnia pois não há um jeito de simular as transações da máquina nem depósitos sem ele
// routes.use(jwtMid); // Implantação global da validação de token
routes.post('/card', CardController.store); // Cria os cartões de acordo com o cardModel
routes.get('/getcardbyaccountid/:_id', CardController.getCardByAccountID); // Puxa todos os cartões ligados as contas
routes.get(
  '/gettransactionbycardid/:_id',
  TransactionController.getTransactionsByCardId
); // Pega todas as trasações que são ligadas com os cartões cadastrados cada um com seu id
routes.get('/transactions/cre', TransactionController.TransactionsCredit); // Puxa as transações de crédito para o gráfico
routes.get('/transactions/deb', TransactionController.TransactionsDebit); // Puxa as transações de débito para o gráfico

module.exports = routes;
