import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Avatar from "react-avatar";
import { LinkContainer } from "react-router-bootstrap";

const HeroNavBar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>
            <div className="logo">
              <span className="logo_text">hero</span>
            </div>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/health">
              <Nav.Link>health</Nav.Link>
            </LinkContainer>

            {/* <Nav.Link href="/health">health</Nav.Link>

            <NavDropdown title="notes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/p-notes">personal</NavDropdown.Item>
              <NavDropdown.Item href="/t-notes">team</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">about</Nav.Link> */}
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
            <Avatar
              name="Jessish Pothancheri"
              size="40"
              round="50px"
              color="black"
              fgColor="#00bfa5"
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeroNavBar;
