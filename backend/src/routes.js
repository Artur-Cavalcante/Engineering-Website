const { Router } = require('express');
const EmailController = require('./controllers/EmailController.js');

const routes = Router();

routes.post('/contato', EmailController.send);

module.exports = routes;