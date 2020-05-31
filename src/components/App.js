import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import MedRecords from '../abis/MedRecords.json'
import Main from './main'
import Record from './record'
import './photon-0.1.2-alpha/dist/css/photon.css'
class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }


  constructor(props) {
    super(props)
    this.state = {
      account: '',
      patientCount: 0,
      patients: [],
      loadPatients: true,
      loadRecords: false,
      id:-1
      // loading: true
    }

    this.createPatient = this.createPatient.bind(this)
    this.createRecord=this.createRecord.bind(this)
  
  }

  async loadWeb3() {
    if (window.ethereum) {
      // window.alert("running on window.ethereum")
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      // console.log("window.ethereum chal raha hai")
    }
    // else if (window.web3) {
    //   window.alert("window.web3 chal raha hai")
    //   window.web3 = new Web3(window.web3.currentProvider)
    //   // console.log("window.web3 chal raha hai")
    // }
    // else {
    //   window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    // }
  }

  async loadBlockchainData() {
    console.log("loading data")
    const web3 = await window.web3
    console.log(web3)
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    console.log(accounts)
    const networkId = await web3.eth.net.getId()
    console.log("network id :", networkId)
    const networkData = MedRecords.networks[networkId]
    
    if(networkData) {
      // window.alert("connected to correct netowrk (7545,5777)")
      const container = web3.eth.Contract(MedRecords.abi, networkData.address)
      console.log("we have network")
      this.setState({ container })
      const patientCount = await container.methods.patientCount().call()
      // console.log(patientCount.toString())
      // this.setState({ loading: false})
      this.setState({ patientCount })

      for (var i = 1; i <= patientCount; i++) {                                                 //getting value fro contract
        const patient = await container.methods.patients(i).call()
        console.log(patient)
        // console.log("cost: ",container.methods.patients(i).cost.call())
        
        this.setState({
          patients: [...this.state.patients, patient]
        })
      }

      console.log("------------PatientList Test --------------------")
      console.log(this.state.patients)




    } else {
      window.alert('Blockchain contract not deployed to detected network.')
    }
  }

// string memory name1, uint cost1, string memory procedure1, uint hId1, string memory docName1, bool treat1 


  createPatient(name, phone,address) {
    console.log("Adding Patient")
    // this.setState({ loading: true })
    // let a = this.state.container.methods.createPatient("name", 666666, "procedure", 1, "docName", false )
    this.state.container.methods.createPatient(name, phone,address).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      console.log("Finished exec")
    })

    console.log("Added Patient")
  }


  createRecord(id,cost,procedure,hospId,docName,treated,image) {
    console.log("Adding Record")
    // this.setState({ loading: true })
    // let a = this.state.container.methods.createPatient("name", 666666, "procedure", 1, "docName", false )
    this.state.container.methods.createRecord(id,cost,procedure,hospId,docName,treated,image).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      console.log("Finished exec")
    })

    console.log("Added Record")
  }

  


  loadPatientsPage = () => {
    this.setState({
      ...this.state,
      loadPatients: true,
      loadRecords: false
    })
  }

  loadRecordsPage = (Pid) => {
    this.setState({
      ...this.state,
      loadPatients: false,
      loadRecords: true,
      id: Pid
    })
  }


  render() {
    console.log("ID NUMBER", this.state.id)
    return (
      
      <div className="window">
      <header className="toolbar toolbar-header">
        <h1 className="title">SECURING MEDICAL RECORDS FOR INSURANCE CLAIM USING BLOCKCHAIN</h1>
      </header>
        <div className="window-content">
          {this.state.loadPatients && <div className="row">
              <Main
                  patients={this.state.patients}
                  createPatient={this.createPatient}
                  accountSet = {this.state.account}
                  loadRecordsPage = {this.loadRecordsPage}/>
          </div> }

          {this.state.loadRecords && <div className="row">
              <Record 
                  patients={this.state.patients}
                  id={this.state.id}
                  createRecord={this.createRecord}
                  accountSet = {this.state.account}
                  loadPatientsPage = {this.loadPatientsPage}/>
          </div> }

      </div>

        <footer className="toolbar toolbar-footer">
          <h1 className="title">  &copy;2020 RK FKB</h1>
        </footer>
      </div>
 
      // </div>
    
        // {/* <Navbar account={this.state.account} /> */}

        // {/* <nav className="navbar navbar-dark fixed-top bg-light flex-md-nowrap p-0 shadow">
            
        //     <div align="center"><p align="center">BLOCKCHAIN MAJOR PROJECT</p> </div>
        // </nav> */}


      //   {/* <div className="container-fluid mt-5">
      //     <div className="row">
      //       <main role="main" className="col-lg-12 d-flex">
      //         { <Main
      //             // patients={this.state.patients}
      //             // createPatient={this.createPatient}
      //             // accountSet = {this.state.account}
      //              />
      //         }
      //       </main>
      //     </div>
      //   </div>
      // </div> */}
   
    );
  }

}

export default App;
