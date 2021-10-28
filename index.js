const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const indexRoute = require('./routes/index');
const articleRoute = require('./routes/article');
const createArticleRoute = require('./routes/createArticle');

app.use('/', indexRoute);
app.use('/article', articleRoute);
app.use('/', indexRoute);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
