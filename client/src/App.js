import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonDiv: "block",
      data: ""
    }
  }

  fetchData = () => {
    this.setState({
      buttonDiv: "none",
      data: "Hello Samarth!"
    })
  }

  render() {
    return (
      <div>
        <div className="buttonDiv" style={{display: this.state.buttonDiv}}>
          <button onClick={() => {this.fetchData()}}>Fetch Data!</button>
        </div>
        <div className="dataDiv">
          {this.state.data}
        </div>
      </div>
    );
  }
}

export default App;
