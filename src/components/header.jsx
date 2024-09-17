import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import hero from '../assets/banner.jpg';


const Header = () => {
  return (
    <header>
      <Navbar expand="lg" variant="dark" style={{ background: 'black' }} className="w-100">
        <Navbar.Brand as={NavLink} to="/" className="brand-font">
          Delicious Grill
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} exact to="/">
              <i className="fa fa-home"></i> Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/menu">
              <i className="fa fa-cutlery"></i> Menu
            </Nav.Link>
            <Nav.Link as={NavLink} to="/order">
              <i className="fa fa-shopping-cart"></i> Order
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              <i className="fa fa-info-circle"></i> About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
