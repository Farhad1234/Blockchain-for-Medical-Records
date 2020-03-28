const express = require('express');
const router = express.Router();
var path = require("path");
var fs = require('fs');
var Web3 = require('web3')
// import Web3 from web3
// import Container from '../abis/container.json'
const Container = require( '../../container.json')


router.get('/', (req, res, next) =>{

});

router.post('/', async (req, res, next) =>{
	const web3 = new Web3
	web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'))


	let source = fs.readFileSync("/home/leo/test/Udaan_test/container.json");
	let abi = await JSON.parse(source)["abi"];
	



	
    var accounts = await web3.eth.getAccounts()
    const networkId = await web3.eth.net.getId()
    // console.log("network id :", networkId)
	var accounts = await web3.eth.getAccounts()
	web3.eth.defaultAccount = await accounts[0];
	let nID = await JSON.parse(source).networks["5777"];
	console.log("nid  "+nID.address)
	// console.log("web3: " + web3.eth.defaultAccount)
	// containerObj = container.At()



	let container = new web3.eth.Contract(abi, nID.address);

	// console.log(res.text);


	// await container.methods.createPatient("name", 999, "procedure", 111111, "docName", true).send({ from: web3.eth.defaultAccount, gas:4700000 })
try{
	await container.methods.createPatient(req.body.name, req.body.cost,req.body.procedure,req.body.owner, req.body.docName, true).send({ from: req.body.owner, gas:4700000 })
    // .once('receipt', (receipt) => {
	//   console.log("Finished exec")
    // })

    // console.log("Added")


	// console.log(req);
	// console.log(typeof(req.body.name));

	res.status(200).send("HospitalId :" + req.body.hospId + "\n" + "Data Updated Successfully");
	// console.log(accounts);
}
catch(err){
	next(err);
}
});







// name	chaitnaya	false	application/json	true
// cost	800	false	application/json	true
// procedure	poisoning	false	application/json	true
// docName	dafff	false	application/json	true
// treted	true	false	application/json	true



// {
// 	"name" : "tkr",
// 	"cost" : "157892",
// 	"procedure" : "fdsg",
// 	"owner" : "0xB453F4C477Cd3f9879C6D37Bb143BE409EF6b780",
// 	"hospId" : "24",
// 	"docName" : "fdsg",
// 	"treated" : true
// 	}
	


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