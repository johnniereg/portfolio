import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

// Pages
import Home from './components/home';
import About from './components/about';
import Resume from './components/resume';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/me" component={About} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    );
  }
}

export default App;
