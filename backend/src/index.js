const express = require('express');
const routes  = require('./routes');
const email = require('./email');

const app = express();

app.use(express.json());
app.use(routes);
app.use(email);


const PORT = 3333;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`)) 