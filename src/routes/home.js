import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header>
          <h1 className="nameplate">Johnnie Regalado</h1>
        </header>
        <nav>
          <Link className="nav-item" to="/resume">
            Resume
          </Link>
          <Link className="nav-item" to="/me">
            About
          </Link>
          <Link className="nav-item" to="/tracks">
            Tracks
          </Link>
        </nav>
        <footer>
          <p>a playground and portfolio</p>
        </footer>
      </div>
    );
  }
}

export default Home;
