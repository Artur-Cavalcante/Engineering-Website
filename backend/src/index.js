const express = require('express');
const routes  = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors({
	origin: '*'
}));
app.use(express.json());
app.use(routes);

//The port is 3000 to running in Umbler hosp
const PORT = 3000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
