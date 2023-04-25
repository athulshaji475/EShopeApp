import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

function Navbr() {
  return (
    <div>
       
      
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand ><span>ESopee</span></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to='/'>Login</Link></Nav.Link>
            <Nav.Link >Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Navbr
