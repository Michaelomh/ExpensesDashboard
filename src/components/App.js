import React, { Component } from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './Login/Login';
import Overview from './Overview/Overview';
import RecordsMain from './Records/RecordsMain';
import * as routes from './Common/routes';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={routes.LOGIN} component={Login} />
          <Route exact path={routes.OVERVIEW}  component={Overview} />
          <Route exact path={routes.RECORDS}  component={RecordsMain} />
        </Switch>
      </div>
    );
  }
}

export default App;
