import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Front from './front';
import Web3 from 'web3';
import insurance from '../abis/Insurance.json'
import './photon-0.1.2-alpha/dist/css/photon.css'

class App extends Component{

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }


  constructor(props) {
    super(props)
    this.state = {
      account: '',
      clientCount: 0,
      patients: [],

      loadPatients: true,
      loadRecords: false,
      id:-1
      // loading: true
    }

    this.createClient = this.createClient.bind(this)
    // this.createRecord=this.createRecord.bind(this)
  
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
    const networkData = insurance.networks[networkId]
    
    if(networkData) {
      // window.alert("connected to correct netowrk (7545,5777)")
      const container = web3.eth.Contract(insurance.abi, networkData.address)
      console.log("we have network")
      console.log("cotainer",container)
      this.setState({ container })
      const clientCount = await container.methods.clientCount().call()
      console.log("CLIENTCOUNT:",clientCount.toString())
      // this.setState({ loading: false})
      this.setState({ clientCount })

      for (var i = 1; i <= clientCount; i++) {                                                 //getting value fro contract
        const patient = await container.methods.clients(i).call()
        console.log(patient)
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


  createClient(name, phone, cost, procedure, hospId, docName, treated, image ) {
    console.log("Adding Patient")
    // this.setState({ loading: true })
    // let a = this.state.container.methods.createClient("name", 666666, "procedure", 1, "docName", false )
    this.state.container.methods.createClient(name, phone,cost,procedure,hospId, docName, treated,image).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      console.log("Finished exec")
    })

    console.log("Added Patient")
  }


render(){
  return (
    <div className="window">
    <header className="toolbar toolbar-header">
      <h1 className="title">SECURING MEDICAL RECORDS FOR INSURANCE CLAIM USING BLOCKCHAIN</h1>
    </header>
      <div className="window-content">
        <div className="row">
        <Front
         patients={this.state.patients}
         createClient={this.createClient}
         accountSet = {this.state.account}
        />
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
