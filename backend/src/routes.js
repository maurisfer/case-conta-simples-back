const routes = require('express').Router();
const TransactionController = require('./app/Controllers/TransactionController');
// const validCard = require('./app/middlewares/creatCardAux')
const AccountController = require('./app/Controllers/accountController');
const CardController = require('./app/Controllers/cardController');

routes.post('/login', AccountController.auth);
routes.post('/account', AccountController.store);
routes.post('/card', CardController.store);
routes.post('/transactions', TransactionController.store);
routes.get('/account/:id', AccountController.show);
routes.get('/account', AccountController.index);

routes.get('/allcard/:id', CardController.index);

routes.get('/transactions/:id', TransactionController.show);
routes.get('/transactions', TransactionController.index);
routes.get('/transactionscd', TransactionController.showCredit);
routes.get('/transactionsdb', TransactionController.showDebit);

module.exports = routes;
