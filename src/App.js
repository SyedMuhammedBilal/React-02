import React, { Component } from 'react';
import './App.css';

/* Functional Component */
function DisplayNames(props){
  
  return(
    <div>
        <ul>
          {
            props.names.map((n, index) => 
            <li key={index}>{n}</li>)
          }
        </ul>
    </div>
  )

}



/* Class Component */
class ListItems extends Component {

  render() {
    return(
      <div>
        <ul>
          {
            this.props.cityNames.map((n, index) => 
            <li key={index}>{n}</li>)
          }
        </ul>
        <button onClick={this.props.plzChangeTheState} > Press to increment </button>
      </div>
    )
  }
}



class App extends Component {

  state = {
    cityNames: ["Kashmir", "Karachi", "Islamabad"],
    address: "Axiom"
  }

  changeTheState = () => {this.setState(
    () => ({
      cityNames: ["Bilal", "Ahmed", "Abdulrehman"]
    })
  )}

  render() {
    /*const names = ["Bilal", "Ahmed", "Abdulrehman"]*/
    return(
      <div>
        <ListItems cityNames={this.state.cityNames} plzChangeTheState={this.changeTheState} />

      </div>
    )
  }
}

export default App;
