import React, { Component } from 'react';
import { Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as routes from '../Common/routes';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Image src={require('../../img/Expenyse Horizontal (black).png')} />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="nav navbar-nav navbar-right">
              <li className="navbar-list">
                <Link to={routes.LOGIN}>Login</Link>
              </li>
              <li className="navbar-list">
                <Link to={routes.OVERVIEW}>Overview</Link>
              </li>
              <li className="navbar-list">
                <Link to={routes.RECORDS}>Records</Link>
              </li>
              <li className="navbar-list">
                <Link to={routes.ADD}>Add</Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopBar;
