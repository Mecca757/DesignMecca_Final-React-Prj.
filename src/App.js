import React from 'react';
import *as ReactBootStrap from "react-bootstrap";
import { Navbar, Jumbotron } from 'reactstrap';
import DirectoryComponent from "./components/DirectoryComponent";
import './App.css';

function App () {
      return (
            <React.Fragment>
                  <Jumbotron fluid>
                        <div className="container text-center">
                              <div className="row">
                                    <div className="col">
                                          
                                         
                                    </div>
                              </div>
                              <div className="row">
                                    <div className="col-md-7">
                                          <img src='assets/images/desk500x300 logo.png' />
                                          <h1>A Creative Design Firm</h1>

                                    </div>
                              </div>
                        </div>
                  </Jumbotron>
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" dark sticky="top">
                        <div className="container">
                              <ReactBootStrap.Nav.Link className="Navbarlink"href="#Service">Services</ReactBootStrap.Nav.Link>
                              <ReactBootStrap.Nav.Link className="Navbarlink"href="#work">Work</ReactBootStrap.Nav.Link>
                              <ReactBootStrap.Nav.Link className="Navbarlink"href="#Consulting">Consulting</ReactBootStrap.Nav.Link>
                              <ReactBootStrap.Nav.Link className="Navbarlink"href="#Contact">Contact Us</ReactBootStrap.Nav.Link>
                        </div>
                  </Navbar>
                  <DirectoryComponent />
                  
            </React.Fragment>
      );
}
export default App;

