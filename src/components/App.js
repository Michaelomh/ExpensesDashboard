import React, { Component } from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './Login/Login';
import Overview from './Overview/Overview';
import RecordsMain from './Records/RecordsMain';
import AddTransaction from './AddTransaction/AddTransaction';
import * as routes from './Common/routes';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={routes.LOGIN} component={Login} />
          <Route exact path={routes.OVERVIEW}  component={Overview} />
          <Route exact path={routes.RECORDS}  component={RecordsMain} />
          <Route exact path={routes.ADD}  component={AddTransaction} />
        </Switch>
      </div>
    );
  }
}

export default App;
