import React from 'react';
import { Button, Form, Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link, Outlet  } from "react-router-dom";
import './home.css';

function NavigateBar() {
  return (
      <div className='contain-fluid navigate'> 
    <Navbar bg="light" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#">School4All</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
              <Nav.Link > 
            <Link to = "/">Login</Link></Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Outlet/>
    </Navbar>
    </div>
  );
}

export default NavigateBar;