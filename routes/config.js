const express = require('express');
const router = express.Router();

 var fs = require("fs");


/* GET api listing. */
router.get('/', (req, res) => {
	 var contents = fs.readFileSync("routes/configuration.json");
	  var jsonContent = JSON.parse(contents);
  	res.send(jsonContent);
});

module.exports = router;