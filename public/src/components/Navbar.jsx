// NavbarComponent.js
import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { BsCart } from "react-icons/bs"; // Using react-icons for the cart icon
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand  as={Link} to="/">Organic Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/register">signup</Nav.Link>
            {/* <Nav.Link href="#products">Products</Nav.Link> */}
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nuts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Grains</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sweeteners</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
              <BsCart size={24} />
                <span className="ms-2">Cart</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
