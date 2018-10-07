import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-logo" style={{ position: `absolute`, top: 0 }}>
            Johnnie Regalado
          </h1>
          <div className="Nav">
            <h2>About</h2>
            <h2>Resume</h2>
            <h2>OddRad.io</h2>
            <h2>Listen2gether</h2>
          </div>
          <p style={{ position: `absolute`, bottom: 0 }}>
            a playground and portfolio
          </p>
        </header>
      </div>
    );
  }
}

export default App;
