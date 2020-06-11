import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import Container from '../abis/container.json'
import Main from './main'

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
      // loading: true
    }

    this.createPatient = this.createPatient.bind(this)
  
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.alert("running on window.ethereum")
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
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()

    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    console.log("network id :", networkId)
    const networkData = Container.networks[networkId]
    
    if(networkData) {
      window.alert("connected to correct netowrk (7545,5777)")
      const container = web3.eth.Contract(Container.abi, networkData.address)
      this.setState({ container })
      const patientCount = await container.methods.patientCount().call()
      // console.log(patientCount.toString())
      // this.setState({ loading: false})
      this.setState({ patientCount })


      for (var i = 1; i <= patientCount; i++) {
        const patient = await container.methods.patients(i).call()
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


  createPatient(name, cost, procedure, hospId, docName, treated, image) {
    console.log("Adding")
    // this.setState({ loading: true })
    // let a = this.state.container.methods.createPatient("name", 666666, "procedure", 1, "docName", false )
    this.state.container.methods.createPatient(name, cost, procedure, hospId, docName, treated, image).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      console.log("Finished exec")
    })

    // console.log(a,"  idhar")
 
    
    // .send({ from: this.state.account })
    // .once('receipt', (receipt) => {
    //   this.setState({ loading: false })
    // })
    console.log("Added")
  }


  render() {
    return (
      <div>
        {/* <Navbar account={this.state.account} /> */}

        <nav className="navbar navbar-dark fixed-top bg-light flex-md-nowrap p-0 shadow">
            
            <div align="center"><p align="center">BLOCKCHAIN MAJOR PROJECT</p> </div>
        </nav>


        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex">
              { <Main
                  patients={this.state.patients}
                  createPatient={this.createPatient}
                  accountSet = {this.state.account}
                   />
              }
            </main>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
