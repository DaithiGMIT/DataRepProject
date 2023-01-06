//Imports For Components Needed for Routing
import './App.css';
import React, { Component } from 'react';
import { Content } from './components/Content';
import { AddAlbum } from './components/AddAlbum';
import { EditAlbum } from './components/EditAlbum';

//Imports For Bootstrap and Bootsrap NavBar and Routing
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      // Create a Nav Bar at the top of the page to link between the main content page and the add album
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Albums</Nav.Link>
              <Nav.Link href="/AddAlbum">Add</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          {/* Also Declare Routes Needed for navagating between pages */}
          <Routes>
            <Route path='/' element={<Content />} exact />
            <Route path='/AddAlbum' element={<AddAlbum />} />
            <Route path='/albums/:id' element={<EditAlbum />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;

