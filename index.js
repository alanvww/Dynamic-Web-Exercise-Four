const express = require('express');
const app = express();
const port = 3000;

const indexRoute = require('./routes/index');

app.use('/', indexRoute);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
