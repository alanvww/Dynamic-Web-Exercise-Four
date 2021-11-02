const express = require('express');
// Initiate express
const app = express();
// Setting port - dynamically with Heroku
const port = process.env.PORT || 3000;
// Import Firebase
const firebase = require('firebase/app');
// Get configuration object so we can communicate with firebase
const firebaseConfig = {
	apiKey: 'AIzaSyCjjVdu-0HWrSKskB5orS36ERnkqW7syuk',
	authDomain: 'exercise-4-fall-2021.firebaseapp.com',
	projectId: 'exercise-4-fall-2021',
	storageBucket: 'exercise-4-fall-2021.appspot.com',
	messagingSenderId: '683590652249',
	appId: '1:683590652249:web:d447344040203ff53ebc48',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// routes for directing user to correct place
const indexRoute = require('./routes/index');
const articleRoute = require('./routes/article');
const createArticleRoute = require('./routes/createArticle');
// tell express to use routes
app.use('/', indexRoute);
app.use('/article', articleRoute);
app.use('/create', createArticleRoute);
// Listen for port
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
