import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
              <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/' className="fw-bold">
          Sportswear City
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
              <Nav.Item>
                <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link>
              </Nav.Item>
             
              <Nav.Item>
                <Nav.Link as={Link} to='/blog'>
                  Blog
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;