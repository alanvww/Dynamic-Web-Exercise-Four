var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.send(`<h1>Create Post</h1>
	<form>
		<div style="display: flex; flex-direction: column; margin-bottom: 20px; max-width: 325px">
			<label for="articleTitle">Article Title</label>
			<input type="text" name="articleTitle">
		</div>
		<button type="submit">Submit Article</button>
	</form>
	
	`);
});

module.exports = router;
