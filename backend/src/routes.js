const routes = require('express').Router();
const TransactionController = require('./app/Controllers/TransactionController');
const AccountController = require('./app/Controllers/accountController');
const CardController = require('./app/Controllers/cardController');

routes.post('/transactions', TransactionController.store);
routes.post('/account', AccountController.store);
routes.post('/card', CardController.store);

module.exports = routes;
