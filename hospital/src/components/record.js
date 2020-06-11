import React, { Component } from "react";

class Record extends Component {
  // var localRec;

  constructor(props) {
    super(props);
    this.state = {
      loading: 1,
      records: [],
    };
  }

  loadMainPage() {
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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          className="btn btn-primary"
          onClick={() =>   {
            this.setState({
              loading: 1
            });
          }}
        >
          Refresh
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
            // console.log("Daba");
            // // const pId1 = this.patientId.value;
            // // //   const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
            // // const cost1 = this.patientCost.value;
            // // const procedure1 = this.patientProcedure.value;
            // // const hospId1 = this.patientHospId.value;
            // // const owner1 = this.props.accountSet.toString();
            // // const docName1 = this.patientDocName.value;
            // // const treated1 = true;
            // // const image1 = this.patientImage.value;
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

          onClick={(event) => {
            console.log("Daba");
            const pId1 = this.props.id;
            console.log("passing id to function ", pId1);
            //   const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
            const cost1 = this.patientCost.value;
            const procedure1 = this.patientProcedure.value;
            const hospId1 = this.patientHospId.value;
            const owner1 = this.props.accountSet.toString();
            // const docName1 = this.patientDocName.value.toString();
            const _docName = this.patientDocName.value.toString();

            // console.log("DOCNAME", _docName);
            const treated1 = true;
            const image1 = "sampleImg";
            console.log(
              pId1,
              cost1,
              procedure1,
              hospId1,
              owner1,
              _docName,
              treated1,
              image1
            );
            this.props.createRecord(
              pId1,
              cost1,
              procedure1,
              hospId1,
              _docName,
              treated1,
              image1
            );
          }}
        >
          Add Record
        </button>

        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <button
          className="btn btn-primary"
          onClick={() => {
            // this.props.loadPatientsPage();
            // this.state.container.methods.createRecord(this.props.id,cost,procedure,hospId,docName,treated,image).send({ from: this.state.account })
            console.log("Shared with localhost:7546");
          }}
        >
          Share Record
        </button>
        <input
          id="insuranceId"
          type="text"
          ref={(input) => {
            // this.patientDocName = input;
          }}
          className="form-control"
          placeholder="Insurance id"
          required
        />
        <input
          id="recordId"
          type="text"
          ref={(input) => {
            // this.patientDocName = input;
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
              <th scope="col">Record #</th>
              <th scope="col">Name</th>
              <th scope="col">Procedure Name</th>
              {/* <th scope="col">H Address</th> */}
              <th scope="col">Uploader Address</th>
              <th scope="col">Procedure Cost</th>
              {/* <th scope="col"></th> */}
              <th scope="col">Doctor Name</th>
            </tr>
          </thead>
          <tbody id="patientList">
            {this.state.records[0].map((record, key) => {

              return (
                <tr key={key}>
                  <th scope="row">{key}</th>
                  {console.log("KEY",key)}
                  <td>{this.props.patients[this.props.id - 1].name.toString()}</td>
                  <td>{this.state.records[1][key]}</td>
                  <td>{this.state.records[2][key]}</td>
                  <td>{this.state.records[0][key].toString()}</td>
                  <td>{this.state.records[4][key].toString()}</td>

                  {/* <td>{patient.owner}</td> */}

                  <td>
  
                    {" "}
                    {/* <button
                      onClick={() => {
                        this.props.loadRecordsPage(patient.pId.toString());
                      }}
                    >
                      Show Records
                    </button>{" "} */}
                  </td>
                </tr>
              );
            })}

              {/* }<tr><td>eeeeeeeee</td>
              { <td>{this.state.records[0]}</td>
              {{console.log("REEEE",this.state.records[0][0].toString())}}
              // </tr> */}
            
          </tbody>
        </table>
      </div>
    );
  }

  async getRecords(pNo) {
    // var localRec =
    // ,this.props.procedure,this.props.uploader,this.props.hospId,this.props.docName,this,props.image
    // this.state.records = this.props.container.methods.getRecord(pNo, 1).call();
    var rec = await this.props.container.methods.getRecord(pNo, 1).call();
    console.log(rec);
    // this.render(<h1>text</h1>)
    // console.log(localRec);
    // this.props.Rec = localRec;
    // console.log(this.props.Rec)
    return rec;
    // this.render()
  }

  render() {
    // var localRec;

    if (this.state.loading == 1)
      this.getRecords(this.props.id).then((rec) => {
        // console.log(rec);
        this.state.records = rec;
        

        // this.state.loading = 0;
        this.setState({
          loading: 0,
          records: rec
        });
        // console.log("RECORDSTATE", this.state.records)
      });

    return (
      <div>
        {this.state.loading == 0 ? (
          this.loadMainPage()
        ) : (
          <h2 style={{ color: "rgb(0, 255, 255)" }}>LOADING...</h2>
        )}
        {/* // console.log("Render with state val ",this.state.loading) */}
      </div>
    );
    // this.render();
  }
}

export default Record;
