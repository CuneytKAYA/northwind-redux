import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

export default class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() { 
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">TEST APP</NavbarBrand>
          <NavbarToggler onClick={this.state.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
