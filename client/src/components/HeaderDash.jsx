import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'


function BarDash() {
  
  return (
    <div className='barDash'>
      <h1>Dashboard</h1> 
      <div className='navbar-dashboard'>
      <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="link-3"><Link to='/dashboard/products'>Products</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"><Link to='/dashboard/clients'>Clients</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Orders</Nav.Link>
      </Nav.Item>
      
    </Nav>
    
      </div>
    </div>
  );
}

export default BarDash;