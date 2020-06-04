import React, { Component } from 'react';
// var back = require("./back.js");

class Front extends Component {

  render() {
    return (
      <div>
    <form onSubmit={(event) => {
            event.preventDefault()
            console.log("Daba")

            }}>
            <div style={{margin:'20px',color:'rgb(0, 0, 0)'}}>
              <h2>ADD INSURANCE DETAILS</h2>
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
                
    
                onClick={(event) => {
                  console.log("Daba")
                const name1 = this.patientName.value
                const phone1 = this.patientPhone.value
                const patientAddress1 = this.patientAddress.value
                }}
                >Add Insurance Details
            </button>


       
     </div>
 
    );
  }
}

export default Front;
