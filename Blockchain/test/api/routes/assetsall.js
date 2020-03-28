const express = require('express');
const router = express.Router();
var path = require("path");

router.get('/', (req, res, next) =>{

  res.sendFile(path.join(__dirname+'/data/details.json'));
    //   res.status(200).json({
    //       message:'Handle get request'
    //   });  
});

module.exports = router;