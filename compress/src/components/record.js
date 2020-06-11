import React, { Component } from "react";

class Record extends Component {
  // var localRec;

  constructor(props) {
    super(props)
    this.state = {
      cost: [],
      procedure: [],
      uploader: [],
      hospId: [],
      docName: [],
      image: [],
      records: []
    }

  }


  async getRecords(pNo) {
    // var localRec =
    // ,this.props.procedure,this.props.uploader,this.props.hospId,this.props.docName,this,props.image
    // this.state.records = this.props.container.methods.getRecord(pNo, 1).call();
    var rec = await this.props.container.methods.getRecord(pNo, 1).call();
    console.log(rec)
    // console.log(localRec);
    // this.props.Rec = localRec;
    // console.log(this.props.Rec)
    // return localRec;
    // this.render()
  }

  render() {
    // var localRec =
    this.getRecords(this.props.id).then((rec) => {
      console.log(rec)
    })
    // console.log(localRec)  
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.props.loadPatientsPage();
          }}
        >
          Back To Patients
        </button>
        <div style={{ margin: "20px", color: "rgb(0, 255, 255)" }}>
          <h3>
            Patient Name:{" "}
            {this.props.patients[this.props.id - 1].name.toString()}
          </h3>
          <h3>
            Phone Number:{" "}
            {this.props.patients[this.props.id - 1].phone.toString()}
          </h3>
          <h3>
            Address: {this.props.patients[this.props.id - 1].owner.toString()}
          </h3>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("Daba");
            const pId1 = this.patientId.value;
            //   const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
            const cost1 = this.patientCost.value;
            const procedure1 = this.patientProcedure.value;
            const hospId1 = this.patientHospId.value;
            const owner1 = this.props.accountSet.toString();
            const docName1 = this.patientDocName.value;
            const treated1 = true;
            const image1 = this.patientImage.value;
            // console.log(name, cost, procedure, hospId, docName, treated)
            // this.props.createPatient(name, cost, procedure, hospId, docName, treated)
          }}
        >
          <hr></hr>
          <div style={{ margin: "20px", color: "rgb(255, 255, 255)" }}>
            <h2>ADD RECORD DETAILS</h2>
          </div>

          <div className="row">
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
          <div className="row">
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

          <div className="row">
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

          <div className="row">
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
          {/* <div className="row" >
                  <input
                  id="patientImage"
                  type="text"
                  ref={(input) => { this.patientImage = input }}
                  className="form-control"
                  placeholder="Image"
                  required />
             </div> */}
          {/* this.props.products.map((product, key) => {
                // return( */}
        </form>
        <button
          type="submit"
          className="btn btn-primary"
          // const name = {this.patientName.value}
          // const cost = {this.patientCost.value}
          // const procedure = {this.patientProcedure.value}
          // const hospId = {this.patientHospId.value}
          // const docName = {this.patientDocName.value}
          // const treated = {true}
          // name = {patient.name}
          onClick={(event) => {
            console.log("Daba");
            const pId1 = this.props.id;
            console.log("passing id to function ", pId1);
            //   const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
            const cost1 = this.patientCost.value;
            const procedure1 = this.patientProcedure.value;
            const hospId1 = this.patientHospId.value;
            const owner1 = this.props.accountSet.toString();
            const docName1 = this.patientDocName.value.toString();
            const treated1 = true;
            const image1 = "sampleImg";
            console.log(
              pId1,
              cost1,
              procedure1,
              hospId1,
              owner1,
              docName1,
              treated1,
              image1
            );
            this.props.createRecord(
              pId1,
              cost1,
              procedure1,
              hospId1,
              docName1,
              treated1,
              image1
            );
          }}
        >
          Add Record
        </button>

<br></br><br></br><hr></hr><br></br>
        <button
          className="btn btn-primary"
          onClick={() => {
            // this.props.loadPatientsPage();
            // this.state.container.methods.createRecord(this.props.id,cost,procedure,hospId,docName,treated,image).send({ from: this.state.account })
            console.log("Shared with localhost:7546")
          }}
        >
         Share Record
        </button>
        <input
              id="patientDocName"
              type="text"
              ref={(input) => {
                this.patientDocName = input;
              }}
              className="form-control"
              placeholder="Insurance id"
              required
            />
              <input
              id="patientDocName"
              type="text"
              ref={(input) => {
                this.patientDocName = input;
              }}
              className="form-control"
              placeholder="Record Num"
              required
            />



        <p>&nbsp;&nbsp;</p>
        <h2>Record List</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              {/* <th scope="col">Name</th> */}
              <th scope="col">Procedure Cost</th>
              {/* <th scope="col">H Address</th> */}
              <th scope="col">Uploader Address</th>
              <th scope="col">Procedure</th>
              <th scope="col">Doctor Name</th>
            </tr>
          </thead>
          <tbody id="patientList">
            { 
              // console.log(localRec)

              // listTable( )

              // localRec.cost.map((cost, key) => {
              //   return (
              //     <tr key={key}>
              //       {console.log("COST", cost)}
              //       {/* <th scope="row">{this.}</th> */}
              //       {/* {/* <td>{patient.name}</td> */}
              //       <td>{"ASDASD"}</td> */}
              //       {/* <td>{patient.hospId.toString}</td> */}
              //       {/* <td>{patient.uploader}</td> */}
              //       {/* <td>{patient.procedure}</td> */}
              //       {/* <td>{patient.doctorName}</td> */}
              //       <td></td>
              //     </tr>
              //   );
              // })

              // console.log("ONLY 1 :", this.props.patients[this.props.id])
              //   this.props.patients.map((patient, key) => {
              //   console.log("Current  ",this.props.accountSet.toString())
              //   console.log("Ofrecord  ",patient.owner.toString())
              //   // console.log("RECORD COST VAL",patient.cost)
              //   console.log("patient name",patient.name)
              //   // if(this.props.accountSet.toString() == patient.owner.toString() )
              //   return(
              //     <tr key={this.props}>
              //       <th scope="row">{patient.pId.toString()}</th>
              //       <td>{patient.name}</td>
              //       {/* <td>{patient.cost.toString()}</td> */}
              //       {/* <td>{patient.hospId.toString}</td> */}
              //       {/* <td>{patient.uploader}</td> */}
              //       {/* <td>{patient.procedure}</td> */}
              //       {/* <td>{patient.doctorName}</td>  */}
              //       <td>
              //       </td>
              //     </tr>
              //   )
              // }
              // )
            // }<tr><td>eeeeeeeee</td>
            // <td>{this.state.records[0]}</td>
            // {console.log("REEEE",this.state.records)}
            // {
            // this.state.records =this.getRecords(this.props.id).then((rec) => {
            //   // return rec[0][0]
            //   console.log(rec)
            // })
            // }
            // </tr>
            }
          </tbody>
        </table>



      </div>
    );
  }
}

export default Record;
