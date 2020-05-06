const express = require('express');

const app = express();

const baseDir = `${__dirname}/build/`;

app.use(express.static(`${baseDir}`));

app.get('*', (req, res) => res.sendFile('index.html' , { root : baseDir } ));


const PORT = 3333;

app.listen(PORT, () => console.log(`Server running website at port ${PORT}`));
