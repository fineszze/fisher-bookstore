import React, { Component } from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <NavBar bg = "light" expand="lg">
          <Navbar.Brand>
            <Link to ="/">Fisher Bookstore</Link>
          </Navbar.Brand>
        </NavBar>
        <Routes />
      </div>
    );
  }
}

