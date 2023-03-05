import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" expand="md">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav" className="rnavs">
            <div className="lnav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Help</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
              </Nav>
            </div>
            <div className="rnav">
              <Nav className="me-auto">
                <Nav.Link href="#link">Views</Nav.Link>
                <Nav.Link href="#link">Edits & Actions</Nav.Link>
                <Nav.Link href="#link">Objectives</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
