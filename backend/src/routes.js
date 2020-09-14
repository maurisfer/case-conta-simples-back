const routes = require('express').Router();
const TransactionController = require('./app/Controllers/TransactionController');
const auxiliarMid = require('./app/middlewares/creatCardAux')
const AccountController = require('./app/Controllers/accountController');
const CardController = require('./app/Controllers/cardController');
// const jwtMid = require('./app/middlewares/jwt');

routes.post('/login', AccountController.auth);
routes.post('/account', AccountController.store);
routes.post('/card', auxiliarMid.cardCreateAuxliar, CardController.store);
routes.post('/transactions', TransactionController.store);

routes.get('/account', AccountController.index);
routes.get('/oneaccount/:id', AccountController.show);
routes.get('/allcard/:id', CardController.index);
routes.get('/transactions/:id', TransactionController.show);
routes.get('/transactionscd', TransactionController.showCredit);
routes.get('/transactionsdb', TransactionController.showDebit);

module.exports = routes;
