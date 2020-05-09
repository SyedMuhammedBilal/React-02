import React, { Component } from 'react';
import './App.css';


class Friends extends Component {
  render() {
    const names = ["Bilal", "Ahmed", "Abdulrehman"]
    
    return(
      <div>
        <ul>
          {
            names.map((n, index) => <li key={index}>{n}</li>)
          }
        </ul>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return(
      <div>
        <Friends />
        <Friends />
      </div>
    )
  }
}

export default App;
