import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Front from './front';
import './photon-0.1.2-alpha/dist/css/photon.css'

class App extends Component{


    // createPatient(name, phone,address) {
    //   console.log("Adding Patient")
    //   // this.setState({ loading: true })
    //   // let a = this.state.container.methods.createPatient("name", 666666, "procedure", 1, "docName", false )
    //   // this.state.container.methods.createPatient(name, phone,address).send({ from: this.state.account })
    //   // .once('receipt', (receipt) => {
    //   //   console.log("Finished exec")
    //   // })

    //   console.log("Added Patient")
    // }

render(){
  return (
    <div className="window">
    <header className="toolbar toolbar-header">
      <h1 className="title">SECURING MEDICAL RECORDS FOR INSURANCE CLAIM USING BLOCKCHAIN</h1>
    </header>
      <div className="window-content">
        <div className="row">
        <Front/>
        </div>
    </div>

      <footer className="toolbar toolbar-footer">
        <h1 className="title">  &copy;2020 RK FKB</h1>
      </footer>
    </div>
  );
}
}

export default App;
