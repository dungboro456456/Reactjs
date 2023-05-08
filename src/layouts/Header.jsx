import React from "react";
import { Container, Navbar, Nav, NavDropdown, FormControl, Button, Carousel, Image } from "react-bootstrap";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import logo from "../images/logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Menu from "./Menu";
import Slider from "./Slider";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="nvbar-top" bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">
<Link to={'/'}>   <Image src={logo}  fluid style={{ objectFit: "cover", borderRadius: "50%",height:'100px',}} /> 
</Link>       </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <FormControl type="text" placeholder="Search" className="me-2" />
        <Button variant="outline-secondary">Search</Button>
        <Nav.Link href="#login"><FaUserCircle /> Login</Nav.Link>
        <Nav.Link href="#cart"><FaShoppingCart /> Cart</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      
<div><Menu/></div>
<div><Slider/></div>


    
    </>
  );
};

export default Header
