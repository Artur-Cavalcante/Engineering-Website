const express = require('express');

const app = express();

const baseDir = `./build/`;

app.get('*', (req, res) => {
	res.sendFile('index.html', {root : baseDir});
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running website at port ${PORT}`));