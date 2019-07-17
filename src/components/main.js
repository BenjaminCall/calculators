import React, { Component } from 'react';
import '../styles/main.css';
// import ClickCount from './clicker';
import CompoundCalc from './compound';

export default class Main extends Component {

  constructor(props) {
    super(props);
  }

          // <ClickCount />
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            There is going to be a lot of different types of calculator functions at some point...
          </p>
          <CompoundCalc />
        </header>
      </div>
    );
  }
}
