import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1 className="Home-logo" style={{ position: `absolute`, top: 0 }}>
            Johnnie Regalado
          </h1>
          <div className="Nav rotate">
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

export default Home;
