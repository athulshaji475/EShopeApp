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
        <span style={{marginLeft:'1pxf,',fontFamily:'cursive',fontSize:'30px'}}>ESopee</span>
          <Navbar.Brand ></Navbar.Brand>
          <Nav className="me-auto">
          
           
            <Nav.Link ><Link to='/home'>Home</Link></Nav.Link>
            <Nav.Link ><Link to='/items'>Items</Link></Nav.Link>
            <Nav.Link ><Link to='/'>LogOut</Link></Nav.Link>
            <Nav.Link ><Link  to='/Listview' >Listview</Link></Nav.Link>
            <Nav.Link ><Link  to='/Purchasereport' >Purchase Report</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Navbr
