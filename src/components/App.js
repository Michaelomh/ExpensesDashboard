import React, { Component } from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './Login/Login';
import Overview from './Overview/Overview';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/overview'  component={Overview}/>
          <Route path='/yearview'  component={Overview}/>
          <Route path='/monthview'  component={Overview}/>
        </Switch>
      </div>
    );
  }
}

export default App;
