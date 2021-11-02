var express = require('express');
// Middleware to allow for routing on the node server
var router = express.Router();
// require firebase
const firebase = require('firebase/firestore/lite');
// Initialized Firestore database
const db = firebase.getFirestore();
// Reference to the blogposts
const blogposts = db.collection('blogposts');

router.get('/', function (req, res) {
	// create empty array
	const blogpostsArray = [];
	// Get blogposts JSON from Firebase...
	// Push document from blogposts into the blogposts array
	res.send(blogpostsArray);
});

module.exports = router;
