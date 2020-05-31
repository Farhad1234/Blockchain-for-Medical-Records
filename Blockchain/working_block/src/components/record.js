import React, { Component } from 'react';

class Record extends Component {

    render() {
      return (
        <div>
          <form onSubmit={(event) => {
              event.preventDefault()
              console.log("Daba")
              const pId1 = this.patientId.value
              //   const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
              const cost1 = this.patientCost.value
              const procedure1 = this.patientProcedure.value
              const hospId1 = this.patientHospId.value
              const owner1 = this.props.accountSet.toString()
              const docName1 = this.patientDocName.value
              const treated1 = true;
              const image1 = this.patientImage.value
              // console.log(name, cost, procedure, hospId, docName, treated)
              // this.props.createPatient(name, cost, procedure, hospId, docName, treated)
  
            //   const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ name: name1, cost:cost1, procedure:procedure1, owner:owner1, hospId:hospId1, docName:docName1, treated:treated1 })
            // };
            // fetch('http://10.0.4.99:3002/add-patient', requestOptions)
            //     .then(response => response.json())
            //     .then(data => console.log(data)); 
            //       // this.setState({ postId: data.id }));
  
  
              }}>
              <div style={{margin:'20px',color:'rgb(12, 171, 160)'}}>
                <h2>ADD RECORD DETAILS</h2>
              </div>
              <div className="row" >
                  <input
                  id="patientId"
                  type="text"
                  ref={(input) => { this.patientId = input }}
                  className="form-control"
                  placeholder="Patient ID"
                  required />
              </div>
              <div  className="row" >
                  <input
                  id="patientCost"
                  type="text"
                  ref={(input) => { this.patientCost = input }}
                  className="form-control"
                  placeholder="Procedure Price"
                  required />
              </div>
              <div className="row" >
                  <input
                  id="patientProcedure"
                  type="text"
                  ref={(input) => { this.patientProcedure = input }}
                  className="form-control"
                  placeholder="Procedure Undergone"
                  required />
              </div>
  
              <div className="row" >
                  <input
                  id="patientHospId"
                  type="text"
                  ref={(input) => { this.patientHospId = input }}
                  className="form-control"
                  placeholder="HospitalId (to be autofetched in later versions)"
                  required />
              </div>
  
              <div className="row" >
                  <input
                  id="patientDocName"
                  type="text"
                  ref={(input) => { this.patientDocName = input }}
                  className="form-control"
                  placeholder="Doctor Name"
                  required />
             </div>
             <div className="row" >
                  <input
                  id="patientImage"
                  type="text"
                  ref={(input) => { this.patientImage = input }}
                  className="form-control"
                  placeholder="Image"
                  required />
             </div>
             {/* this.props.products.map((product, key) => {
                // return( */}
  
  
  
  
        </form>
      
       <button type="submit" className="btn btn-primary" 
                  
                  // const name = {this.patientName.value}
                  // const cost = {this.patientCost.value}
                  // const procedure = {this.patientProcedure.value}
                  // const hospId = {this.patientHospId.value}
                  // const docName = {this.patientDocName.value}
                  // const treated = {true}
                  // name = {patient.name}
                  onClick={(event) => {
                      // console.log(this.patientName.value, this.patientCost.value, this.patientProcedure.value, this.patientHospId.value, this.patientDocName.value, true)
                      // this.props.createPatient(this.patientName.value, this.patientCost.value, this.patientProcedure.value, this.patientHospId.value, this.patientDocName.value, true)
                  //now redundant 
  
  
                  console.log("Daba")
                  const pId1 = this.patientId.value
                  //   const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
                  const cost1 = this.patientCost.value
                  const procedure1 = this.patientProcedure.value
                  const hospId1 = this.patientHospId.value
                  const owner1 = this.props.accountSet.toString()
                  const docName1 = this.patientDocName.value
                  const treated1 = true;
                  const image1 = this.patientImage.value
                  console.log(pId1, cost1, procedure1, hospId1, owner1, docName1, treated1, image1)
                  this.props.createRecord(pId1, cost1, procedure1, hospId1, docName1, treated1, image1)
      
                //   const requestOptions = {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "mode": "no-cors" },
                //     body: JSON.stringify({ name: name1, cost:cost1, procedure:procedure1, owner:owner1, hospId:hospId1, docName:docName1, treated:treated1 })
                //     // body: "name:1234"
                //   };
                // fetch('http://localhost:3002/add-patient', requestOptions)
                //     .then(response => console.log(response))
                //     .then(data => console.log(data))
                //     .catch(err => console.log(err) )
                  
                  
                  }}
                  >Add Record
              </button>
  
  
         <p>&nbsp;&nbsp;</p>
          <h2>Record List</h2>
          <button onClick={() => {this.props.loadPatientsPage()}}>Show Patients!</button>
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
            {/* <tbody id="patientList"> }
              { this.props.patients.map((patient, key) => {
                console.log("Current  ",this.props.accountSet.toString())
                console.log("Ofrecord  ",patient.owner.toString())
                if(this.props.accountSet.toString() == patient.owner.toString())
                return(
                  <tr key={key}>
                    <th scope="row">{patient.pId.toString()}</th>
                    <td>{patient.name}</td>
                    <td>{patient.cost.toString()}</td>
  
                    <td>{patient.owner}</td>
                    <td>{patient.procedure}</td>
                    <td>{patient.hospId.toString}</td>
                    <td>{patient.doctorName}</td>
                    <td>
                    </td> 
                  </tr>
                )
              })}
            </tbody> */}
          </table>}
       </div>
   
      );
    }
  }
  
  export default Record;