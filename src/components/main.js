import React, { Component } from 'react';
import '../styles/main.css';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            There is going to be a lot of different types of calculator functions at some point...
          </p>
          <button onClick={() => this.setState({count: this.state.count + 1})}> Clicker</button>
          <div> {this.state.count} </div>
        </header>
      </div>
    );
  }
}
