const { Router } = require('express');

const routes = Router();

routes.get('/', (resquest, response) => {return response.send('Hello Wolrd!')});

module.exports = routes;