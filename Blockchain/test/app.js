const express = require('express');
var cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const assetsroute = require('./api/routes/assets');
const addtaskroute = require('./api/routes/addtask');
const addworkerroute = require('./api/routes/addworker');
const assetallroute = require('./api/routes/assetsall');
const allocatetaskroute = require('./api/routes/allocatetask');
const gettaskroute = require('./api/routes/gettask');


app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use(function(req, res, next) {

//     res.header("Access-Control-Allow-Origin", "*");
  
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
//     next();
  
//   });
  
  

app.use('/add-asset', assetsroute);
app.use('/add-patient',addtaskroute );
app.use('/add-worker',addworkerroute);
app.use('/assets/all',assetallroute);
app.use('/allocate-task',allocatetaskroute);
app.use('/get-tasks-for-worker',gettaskroute);
// app.use((req, res, next) =>{

//     res.status(200).json({
//          message: 'It works'
//     });
// });

module.exports = app;