import React from 'react';
import logo from './logo.svg';
import './App.css' ;

export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar bg = "light" expand="lg">
          <Navbar.Brand>
            <Link to ="/">Fisher Bookstore</Link>
          </Navbar.Brand>
        </Navbar>
      <Routes />
      </div>
    );
  }
}

