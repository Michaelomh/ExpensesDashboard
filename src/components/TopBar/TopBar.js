import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';

class TopBar extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Image src={require('../../img/avatar.png')} />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem href="/">
                Login
              </NavItem>
              <NavItem href="overview">
                Overview
              </NavItem>
              <NavItem href="monthview">
                Month View
              </NavItem>
              <NavItem href="yearview">
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
