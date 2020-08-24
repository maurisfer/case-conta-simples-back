const routes = require('express').Router();
const TransactionController = require('./app/Controllers/TransactionController');

routes.post('/transactions', TransactionController.store);

module.exports = routes;
