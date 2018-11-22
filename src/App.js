import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'normalize.css';
import './App.scss';

// Pages
import Home from './routes/home';
import About from './routes/about';
import Resume from './routes/resume';
import Tracks from './routes/tracks';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/me" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/tracks" component={Tracks} />
      </Switch>
    );
  }
}

export default App;
