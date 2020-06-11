import React, { Component } from 'react';
// import util from 'util';

var base64Img = require('base64-img');
const image2base64 = require('image-to-base64');
// var temp ="123";
// var util = require('util');
// var RNFetchBlob = require('react-native-fetch-blob')
class Main extends Component {



  // encodeImageFileAsURL() {

  //   var filesSelected = document.getElementById("inputFileToLoad").files;
  //   if (filesSelected.length > 0) {
  //     var fileToLoad = filesSelected[0];

  //     var fileReader = new FileReader();

  //     fileReader.onload = function(fileLoadedEvent) {
  //       var srcData = fileLoadedEvent.target.result; // <--- data: base64

  //       var newImage = document.createElement('img');
  //       newImage.src = srcData;

  //       document.getElementById("imgTest").innerHTML = newImage.outerHTML;
  //       alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
  //       console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
  //     }
  //     fileReader.readAsDataURL(fileToLoad);
  //   }
  // }


//  async getBase64(file) {
//     let document = "";
//     let reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = function () {
//         document = reader.result;
//     };
//     reader.onerror = function (error) {
//         console.log('Error: ', error);
//     };
//     window.alert("yeah")
//     console.log("---------------------IMAGEFILE---------------------")
//     console.log(document)
//     return document;
// }
// await temp = getBase64("/home/fkb/Pictures/ERD.png")

//   genImageBase(PATH_TO_READ)
//   {
//     RNFetchBlob.fs.readFile(PATH_TO_READ, 'base64')
//     .then((data) => {
//   console.log(data);
// })
//   }



  // async getEncoding(){
    

  // // console.log(temp) 
  // // var Example = <img src={`data:image/jpeg;base64,${temp}`} />
  // console.log(temp)
  // return temp;


  // }  


  render() { 
    // this.genImageBase("/home/fkb/Documents/MutationRecord.jpg");
    // var temp = base64Img.base64("/home/fkb/Pictures/ERD.png");
    // var temp = window.fetch("/home/fkb/Documents/record.jpg") 
    
    // var temp = this.getEncoding
  //   var temp = image2base64("https://www.hand2shouldercenter.com/wp-content/uploads/2019/05/release-of-medical-records.jpg")   
  //   .then(
  //     (response) => {
  //         console.log(response); //cGF0aC90by9maWxlLmpwZw==
  //     }
  // )
  // .catch(
  //     (error) => {
  //         console.log(error); //Exepection error....
  //     }
  // );

  // var b = Promise.resolve(temp)
  // var c = temp;

  // console.log("printing b: "+ b)

    // console.log("---------------------IMAGEFILE---------------------")
    // console.log(temp)
    // console.log("end")
    return (
      <div id="content">
        <h1>Add Patient</h1>
        <form onSubmit={(event) => {
            event.preventDefault()
            
            const name = this.patientName.value
            //   const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
            const cost = this.patientCost.value
            const procedure = this.patientProcedure.value
            const hospId = this.patientHospId.value
            const docName = this.patientDocName.value
            // const docName = this.patientDocName.value
            const treated = true;
            var c = "ERD.png"
            console.log(name, cost, procedure, hospId, docName, treated)
            this.props.createPatient(name, cost, procedure, hospId, docName, treated, c)
            // console.log("new B"+ b)
            // this.state.container
            // this.state.marketplace
            }}>
            <div className="form-group mr-sm-2">
                <input
                id="patientName"
                type="text"
                ref={(input) => { this.patientName = input }}
                className="form-control"
                placeholder="Patient Name"
                required />
            </div>
            <div className="form-group mr-sm-2">
                <input
                id="patientCost"
                type="text"
                ref={(input) => { this.patientCost = input }}
                className="form-control"
                placeholder="Procedure Price"
                required />
            </div>
            <div className="form-group mr-sm-2">
                <input
                id="patientProcedure"
                type="text"
                ref={(input) => { this.patientProcedure = input }}
                className="form-control"
                placeholder="Procedure Undergone"
                required />
            </div>

            <div className="form-group mr-sm-2">
                <input
                id="patientHospId"
                type="text"
                ref={(input) => { this.patientHospId = input }}
                className="form-control"
                placeholder="HospitalId (to be autofetched in later versions)"
                required />
            </div>

            <div className="form-group mr-sm-2">
                <input
                id="patientDocName"
                type="text"
                ref={(input) => { this.patientDocName = input }}
                className="form-control"
                placeholder="Doctor Name"
                required />
            </div>
            {/* this.props.products.map((product, key) => {
              return( */}



            <button type="submit" className="btn btn-primary" 
                
                // const name = {this.patientName.value}
                // const cost = {this.patientCost.value}
                // constprocedure = {this.patientProcedure.value}
                // const hospId = {this.patientHospId.value}
                // const docName = {this.patientDocName.value}
                // const treated = {true}
                // name = {patient.name}


                onClick={(event) => {
                    // console.log(this.patientName.value, this.patientCost.value, this.patientProcedure.value, this.patientHospId.value, this.patientDocName.value, true)
                    // this.props.createPatient(this.patientName.value, this.patientCost.value, this.patientProcedure.value, this.patientHospId.value, this.patientDocName.value, true)
                //now redundant   
                }}
                >Add Patient
            </button>





            

        </form>
        <p>&nbsp;&nbsp;</p>
        <h2>Patient List</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Procedure Cost</th>
              <th scope="col">H Address/Uploader Address (to be hidden in latre commit</th>
              <th scope="col">Procedure</th>
              <th scope="col">Doctor Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="patientList">
            { this.props.patients.map((patient, key) => {
              console.log("Current  ",this.props.accountSet.toString())
              console.log("Ofrecord  ",patient.owner.toString())
              // if(this.props.accountSet.toString() == patient.owner.toString())
              return(
                <tr key={key}>
                  <th scope="row">{patient.pId.toString()}</th>
                  <td>{patient.name}</td>
                  {/* <td>{window.web3.utils.fromWei(patient.cost.toString(), 'Ether')} Eth</td> */}
                  <td>{patient.cost.toString()}</td>

                  <td>{patient.owner}</td>
                  <td>{patient.procedure}</td>
                  <td>{patient.hospId.toString}</td>
                  <td>{patient.doctorName}</td>
                  <td>
                    {/* {if validation should be here  */}
                     {/* <button
                          name={patient.id}
                          value={patient.price}
                          onClick={(event) => {
                            this.props.purchaseProduct(event.target.name, event.target.value)
                          }}
                        >
                          Buy
                        </button> */}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <img src={"http://localhost:8887/ERD.png"}/>  
      </div>
      
    );
  }
}

export default Main;
