import React, { Component } from "react";
// var back = require("./back.js");

class Front extends Component {
  render() {
    return (
      <div style={{ margin: "30px" }}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("Daba");
          }}
        >
          <div style={{ margin: "20px", color: "rgb(0, 0, 0)" }}>
            <h2>ADD INSURANCE DETAILS</h2>
          </div>
          <div className="row" style={{ margin: "20px"}}>
            <input
              id="patientName"
              type="text"
              ref={(input) => {
                this.patientName = input;
              }}
              className="form-control"
              placeholder="Patient Name"
              required
            />
          </div>
          <div className="row" style={{ margin: "20px"}}>
            <input
              id="patientPhone"
              type="text"
              ref={(input) => {
                this.patientPhone = input;
              }}
              className="form-control"
              placeholder="Patient Contact"
              required
            />
          </div>
          {/* <div className="row">
            <input
              id="patientAddress"
              type="text"
              ref={(input) => {
                this.patientAddress = input;
              }}
              className="form-control"
              placeholder="Patient Address"
              required
            />
          </div> */}
          <div className="row" style={{ margin: "20px"}}>
            <input
              id="patientCost"
              type="text"
              ref={(input) => {
                this.patientCost = input;
              }}
              className="form-control"
              placeholder="Procedure Price"
              required
            />
          </div>
          <div className="row" style={{ margin: "20px"}}>
            <input
              id="patientProcedure"
              type="text"
              ref={(input) => {
                this.patientProcedure = input;
              }}
              className="form-control"
              placeholder="Procedure Undergone"
              required
            />
          </div>

          <div className="row" style={{ margin: "20px"}}>
            <input
              id="patientHospId"
              type="text"
              ref={(input) => {
                this.patientHospId = input;
              }}
              className="form-control"
              placeholder="HospitalId (to be autofetched in later versions)"
              required
            />
          </div>

          <div className="row" style={{ margin: "20px"}}>
            <input
              id="patientDocName"
              type="text"
              ref={(input) => {
                this.patientDocName = input;
              }}
              className="form-control"
              placeholder="Doctor Name"
              required
            />
          </div>
        </form>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(event) => {
            console.log("Daba");
            const name1 = this.patientName.value;
            const phone1 = this.patientPhone.value;
            // const patientAddress1 = this.patientAddress.value;
            const cost1 = this.patientCost.value;
            const procedure1 = this.patientProcedure.value;
            const hospId1 = this.patientHospId.value;
            const owner1 = this.props.accountSet.toString();
            // const docName1 = this.patientDocName.value.toString();
            const _docName = this.patientDocName.value.toString();

            // console.log("DOCNAME", _docName);
            const treated1 = true;
            const image1 = "sampleImg";
            console.log(name1,treated1,procedure1)
            this.props.createClient(name1,phone1,cost1,procedure1,hospId1,_docName,treated1,image1)
          }}
        >
          Add Insurance Details
        </button>
        <hr style={{ color: "rgb(0, 0, 0)" }}></hr>
        <h2>Shared Record List</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Procedure Cost</th>
              {/* <th scope="col">H Address</th> */}
              <th scope="col">Uploader Address</th>
              <th scope="col">Procedure</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody id="patientList">
            {this.props.patients.map((patient, key) => {
              // console.log("Current  ", this.props.accountSet.toString());
              // console.log("Ofrecord  ", patient.owner.toString());
              // if(this.props.accountSet.toString() == patient.owner.toString())   // or if in registered hospitals
              // console.log("PID",patient.pId.toString())
              return (
                <tr key={key}>
                  <th scope="row">{patient.pId.toString()}</th>

                  <td>{patient.name}</td>
                  <td>{patient.phone}</td>
                  <td>{patient.cost.toString()}</td>
                  <td>{patient.uploader.toString()}</td>
                  <td>{patient.procedure}</td>
                  <td>{patient.doctorName}</td>
                  <td>{patient.phone}</td>
                </tr>
              );
            })}
          </tbody>


          
        </table>
      </div>
    );
  }
}

export default Front;
