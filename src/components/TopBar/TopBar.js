import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import * as routes from '../Common/routes';

class TopBar extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Image src={require('../../img/Expenyse Horizontal.png')} />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem href={routes.LOGIN}>
                Login
              </NavItem>
              <NavItem href={routes.OVERVIEW}>
                Overview
              </NavItem>
              <NavItem href={routes.OVERVIEW}>
                Month View
              </NavItem>
              <NavItem href={routes.OVERVIEW}>
                Year View
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopBar;
