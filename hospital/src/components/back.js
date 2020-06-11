const express = require('express');
const router = express.Router();
var path = require("path");
var fs = require('fs');

router.get('/', (req, res, next) =>{

//  res.sendFile('assets.html',  {root: path.join(__dirname,'./templates')});
//   res.sendFile(path.join(__dirname+'/templates/addtask.html'));
    //   res.status(200).json({
    //       message:'Handle get request'
	//   });  

});

router.post('/', (req, res, next) =>{
	console.log(req);
	res.status(200).send("console check kar");
});
//     res.status(200).json({
//         message:'Handle post'
//   });
// fs.readFile('./api/routes/data/task.json', 'utf-8', function(err, data) {
// 	if (err) throw err

// 	var arrayOfObjects = JSON.parse(data)
// 	arrayOfObjects.task.push({
//         taskID: req.body.taskid,
// 		name: req.body.taskName,
// 		frequency: req.body.frequency
// 	})

// 	fs.writeFile('./api/routes/data/task.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
// 		if (err) throw err
// 		console.log('Donetask!')
// 		res.status(200).send("Ok");
// 	})
// })
// });

module.exports = router;