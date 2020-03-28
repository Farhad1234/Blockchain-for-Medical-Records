const express = require('express');
const router = express.Router();
var path = require("path");
var fs = require("fs");
router.get('/', (req, res, next) =>{

//  res.sendFile('assets.html',  {root: path.join(__dirname,'./templates')});
  res.sendFile(path.join(__dirname+'/templates/allocatetask.html'));
    //   res.status(200).json({
    //       message:'Handle get request'
    //   });  
});

router.post('/', (req, res, next) =>{
//     res.status(200).json({
//         message:'Handle post'
//   });

fs.readFile('./api/routes/data/allocatetask.json', 'utf-8', function(err, data) {
	if (err) throw err

var arrayOfObjects = JSON.parse(data)
	arrayOfObjects.allocate.push({
    assestID:req.body.assetid,
    taskID: req.body.taskid,
		workerName: req.body.workerid,
    timeAllocate: req.body.allocationtime,
    performBy: req.body.performedby,
	})
	fs.writeFile('./api/routes/data/allocatetask.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
		if (err) throw err
		console.log('Donetask!')
	})
})
});

module.exports = router;