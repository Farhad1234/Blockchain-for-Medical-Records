import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonDiv: "block",
      dataDiv: "none",
      data: "",
      imgUri: ""
    }
  }

  fetchData = () => {
    this.setState({
      buttonDiv: "none",
      dataDiv: "block",
      data: "Hello Samarth!"
    })
  }

  fetchImage = () => {
    fetch('https://sam-base64-api.herokuapp.com/img')
    .then((resp) => {
      return resp.json()
    })
    .then((data) => {
      this.setState({
        imgUri: data.imgdata
      })
    })
    .catch((error) => {
      console.log("Unable to fetch the image : ",error)
    })
  }

  render() {
    return (
      <div>
        <div className="buttonDiv" style={{display: this.state.buttonDiv}}>
          <button onClick={() => {this.fetchData()}}>Fetch Data!</button>
        </div>

        <div className="dataDiv" style={{display: this.state.dataDiv}}>
          {this.state.data}
          <button onClick={() => {this.fetchImage()}}>Fetch Image!</button>
          <div id="container">
            <img src={`data:image/jpeg;base64,${this.state.imgUri}`} />  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
