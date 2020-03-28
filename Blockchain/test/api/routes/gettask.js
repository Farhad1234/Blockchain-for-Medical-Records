const express = require('express');
const router = express.Router();
var path = require("path");
// var fs =("fs");
var fs = require('fs');


router.get('/:workid', (req, res, next) =>{

//  res.sendFile('assets.html',  {root: path.join(__dirname,'./templates')});
var p = req.params.workid;
// fs.writeFile('./api/routes/data/task.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
//     if (err) throw err
//     console.log('Donetask!')
//     res.status(200).send("Ok");
// })
fs.readFile('./api/routes/data/task.json',(err,data)=>{
    if(err)
        return res.status(500).send(err);
    const d = JSON.parse(data).task;
    for(var i=0;i<d.length;i++){
        if(d[i].taskID == p){
            const ans = {
                taskID : d[i].taskID,
                name : d[i].name,
                frequency : d[i].frequency
            }
            return res.status(200).send(ans);
        }
    }
    res.status(404).send("Not found");

})
// res.send(p);
});

module.exports = router;