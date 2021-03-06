import React, { Component } from 'react';
import "./App.css";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Routes from "./Routes.js";

export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar bg = "light" expand="lg">
          <Navbar.Brand>
            <Link to ="/">Fisher Bookstore</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavItem>
              <Nav.Link href="/books">Books</Nav.Link>
              </NavItem>
              <NavItem>
              <Nav.Link href="/author">Author</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <Routes />
      </div>
    );
}
};
