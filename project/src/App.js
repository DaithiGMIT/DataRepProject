import React, { Component } from 'react';
import './App.css';
import { Content } from './components/Content';
import { AddAlbum } from './components/AddAlbum';

//Imports For Bootstrap and Bootsrap NavBar and Routing
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/AddAlbum">Add</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          <Routes>
            <Route path='/' element={<Content />} exact />
            <Route exact path='/AddAlbum' element={<AddAlbum />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;

