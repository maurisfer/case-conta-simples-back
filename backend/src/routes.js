const routes = require('express').Router();
const TransactionController = require('./app/Controllers/TransactionController');
const AccountController = require('./app/Controllers/accountController');
const CardController = require('./app/Controllers/cardController');
// const jwtMid = require('./app/middlewares/jwt');

routes.post('/login', AccountController.auth);
routes.post('/account', AccountController.store); // Criar conta

routes.post('/transactions', TransactionController.store); // Criar transações
// routes.use(jwtMid); // Implantação global da validação de token
routes.post('/card', CardController.store); // Cria os cartões de acordo com o cardModel


routes.get('/card/:id', CardController.getCardByAccountID); // Puxa todos os cartões ligados as contas
routes.get('/transactions/:id', TransactionController.getTransactionsByCardId); // Pega todas as trasações que são ligadas com os cartões cadastrados cada um com seu id
routes.get('/transactionsgraf/cre', TransactionController.TransactionsCredit); // Puxa as transações de crédito para o gráfico
routes.get('/transactionsgraf/deb', TransactionController.TransactionsDebit); // Puxa as transações de débito para o gráfico
routes.get('/account', AccountController.index); // Mostra todas as contas (Somente para desenvolvimento, para entrega excluir)

module.exports = routes;
