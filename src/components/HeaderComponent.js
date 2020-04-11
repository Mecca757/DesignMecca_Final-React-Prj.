import { Navbar, Jumbotron  } from 'reactstrap';
import { Header } from "react"
      
      
function Header () {
      return (
            <React.Fragment>
                  <Jumbotron fluid>
                        <div className="container">
                              <div className="row">
                                    <div className="col">
                                          <h1></h1>
                                    </div>
                              </div>
                        </div>
                  </Jumbotron>
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" dark sticky="top">
                        <div className="container">
                              <ReactBootStrap.Nav.Link href="#features">Services</ReactBootStrap.Nav.Link>
                              <ReactBootStrap.Nav.Link href="#pricing">Work</ReactBootStrap.Nav.Link>
                              <ReactBootStrap.Nav.Link href="#pricing">Consulting</ReactBootStrap.Nav.Link>
                              <ReactBootStrap.Nav.Link href="#deets">Contact Us</ReactBootStrap.Nav.Link>
                        </div>
                  </Navbar>
            </React.Fragment>
      );
}
export default Header;