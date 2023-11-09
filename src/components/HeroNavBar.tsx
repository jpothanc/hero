import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Avatar from "react-avatar";
const HeroNavBar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#home">Hero</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/health">Health</Nav.Link>
            <NavDropdown title="Notes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/p-notes">Personal</NavDropdown.Item>
              <NavDropdown.Item href="/t-notes">Team</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <div className="d-flex">
            <div
              style={{
                alignSelf: "center",
                paddingRight: "10px",
              }}
            >
              Jessish Pothancheri
            </div>
            <Avatar name="Jessish Pothancheri" size="40" round="50px" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeroNavBar;
