import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaTachometerAlt, FaUserAlt } from "react-icons/fa";
import { NavLink} from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
const Sidebar = () => {
    return (
        <>
          <div className="left-sidebar">
            <Navbar bg="dark" variant="dark" key='md' expand='md' className='sideNavBar'>
              <div className='mobile-menu'>
              <Navbar.Brand to="/dashboard" className='w-100 m-0 text-white fs-4 fw-bold'>CoinCap</Navbar.Brand>
              <Navbar.Toggle aria-controls='md' />
              </div>
              <Navbar.Offcanvas
              id='md'
              aria-labelledby='md'
              width='w-100'
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="me-auto w-100">
                <NavLink  to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }><span className="nav-text">Dashboard</span> <FaTachometerAlt style={{width:'15px',height:'15px'}} /></NavLink >
                <NavLink  to="/user-management" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><span className="nav-text">Assets</span> <FaUserAlt style={{width:'15px',height:'15px'}}/></NavLink >
                <NavLink  to="/rates-management" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><span className="nav-text">Rates</span> <FaUserAlt style={{width:'15px',height:'15px'}}/></NavLink >
                <NavLink  to="/exchanges-management" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><span className="nav-text">Exchanges</span> <FaUserAlt style={{width:'15px',height:'15px'}}/></NavLink >
                <NavLink  to="/markets-management" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><span className="nav-text">Markets</span> <FaUserAlt style={{width:'15px',height:'15px'}}/></NavLink >
                
              </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Navbar>
          </div>
        </>
    );
}

export default Sidebar;
