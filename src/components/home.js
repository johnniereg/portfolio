import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1 className="Home-logo" style={{ position: `absolute`, top: 0 }}>
            Johnnie Regalado
          </h1>
          <div className="Nav rotate">
            <div>
              <Link to="/me">About</Link>
            </div>
            <div>
              <Link to="/resume">Resume</Link>
            </div>
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
