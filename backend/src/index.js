const express = require('express');
const routes  = require('./routes');
const { middlewareError } = require('./middlewares/middlewareError');

const app = express();

app.use(express.json());
app.use(middlewareError);
app.use(routes);


const PORT = 3333;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`)) 