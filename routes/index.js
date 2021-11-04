const { response } = require('express');
var express = require('express');
// Middleware to allow for routing on the node server
var router = express.Router();
// require firestore
const firestore = require('firebase/firestore');
// Initialized Firestore database
const db = firestore.getFirestore();
// Reference to the blogposts
router.get('/', (req, res) => {
	const blogposts = firestore.getDocs(firestore.collection(db, 'blogposts'));
	// Create empty array
	const blogpostsArray = [];

	blogposts
		.then((response) => {
			response.forEach((doc) => {
				// Push document into array every time the query loops over data and push into array
				blogpostsArray.push(doc.data());
			});
			return res.send(blogpostsArray);
		})
		.catch(function (error) {
			console.log('Error', error);
			return res.send(error);
		});
});

module.exports = router;
