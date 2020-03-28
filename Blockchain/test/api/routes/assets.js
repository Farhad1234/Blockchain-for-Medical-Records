const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var path = require("path");
var fs = require('fs');

router.get('/', (req, res, next) =>{

  res.sendFile(path.join(__dirname+'/templates/assets.html'));
    //   res.status(200).json({
    //       message:'Handle get request'
    //   });  
});

router.post('/', (req,res) =>{
//     res.status(200).json({
//         message: req.body
//   });


fs.readFile('./api/routes/data/details.json', 'utf-8', function(err, data) {
	if (err) throw err

	var arrayOfObjects = JSON.parse(data)
	arrayOfObjects.assets.push({
		assetID : req.body.assetid,
		assetname: req.body.assetName,
		type: req.body.type
	})

	fs.writeFile('./api/routes/data/details.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
		if (err) throw err
		console.log('Done!')
	})
})
});

module.exports = router;