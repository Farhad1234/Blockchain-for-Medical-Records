import React, { Component } from 'react';
// var back = require("./back.js");

class Main extends Component {

  render() {
    return (
      <div>
        <form onSubmit={(event) => {
            event.preventDefault()
            console.log("Daba")
            const name1 = this.patientName.value
            const phone1 = this.patientPhone.value
            const patientAddress1 = this.patientAddress.value
            //   const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
            // const cost1 = this.patientCost.value
            // const procedure1 = this.patientProcedure.value
            // const hospId1 = this.patientHospId.value
            // const owner1 = this.props.accountSet.toString()
            // const docName1 = this.patientDocName.value
            // const treated1 = true;
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
              <h2>ADD PATIENT DETAILS</h2>
            </div>
            <div className="row" >
                <input
                id="patientName"
                type="text"
                ref={(input) => { this.patientName = input }}
                className="form-control"
                placeholder="Patient Name"
                required />
            </div>
            <div className="row" >
                <input
                id="patientPhone"
                type="text"
                ref={(input) => { this.patientPhone = input }}
                className="form-control"
                placeholder="Patient Phone"
                required />
            </div>
            <div className="row" >
                <input
                id="patientAddress"
                type="text"
                ref={(input) => { this.patientAddress = input }}
                className="form-control"
                placeholder="Patient Address"
                required />
            </div>
          
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
                  console.log("Daba")
                const name1 = this.patientName.value
                const phone1 = this.patientPhone.value
                const patientAddress1 = this.patientAddress.value
                //   const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
                // const cost1 = this.patientCost.value
                // const procedure1 = this.patientProcedure.value
                // const hospId1 = this.patientHospId.value
                // const owner1 = this.props.accountSet.toString()
                // const docName1 = this.patientDocName.value
                // const treated1 = true;
                // console.log(name, cost, procedure, hospId, docName, treated)
                this.props.createPatient(name1, phone1, patientAddress1)
                }}
                >Add Patient
            </button>


       <p>&nbsp;&nbsp;</p>
        <h2>Patient List</h2>
       
        
        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">PatientID</th>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Patient Address</th>
              <th scope="col">Records</th>
              {/* <th scope="col">Procedure</th>
              <th scope="col">Doctor Name</th> */}
              {/* <th scope="col"></th> */}
            </tr>
          </thead>
          {console.log("now")}
          <tbody id="patientList">
              { this.props.patients.map((patient, key) => {
              console.log("Current  ",this.props.accountSet.toString())
              console.log("Ofrecord  ",patient.owner.toString())
              if(this.props.accountSet.toString() == patient.owner.toString())   // or if in registered hospitals
              // console.log("PID",patient.pId.toString())
              return(
                <tr key={key}>
                  <th scope="row">{patient.pId.toString()}</th>
                  <td>{patient.name}</td>
                  {/* <td>{window.web3.utils.fromWei(patient.cost.toString(), 'Ether')} Eth</td> */}
                  <td>{patient.owner}</td>

                  <td>{patient.phone}</td>
             
                  <td> <button onClick={() => {this.props.loadRecordsPage(patient.pId.toString())}}>Show Records</button> </td>
                </tr>
              )
            })}
          </tbody>
        </table>    
     </div>
 
    );
  }
}

export default Main;
