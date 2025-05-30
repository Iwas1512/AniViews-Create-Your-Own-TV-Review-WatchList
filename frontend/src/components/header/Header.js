import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'

import  Button  from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import  Navbar  from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import { NavbarBrand } from 'react-bootstrap'


const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container fluid>
                <NavbarBrand href='/' style={{ color: 'gold' }}>
                    <FontAwesomeIcon icon={faVideoSlash} /> Anlil
                </NavbarBrand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse>
                    <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
                        <NavLink className='nav-link' to='/'>
                            Home
                        </NavLink>
                        <NavLink className='nav-link' to='/'>
                            WatchList
                        </NavLink>
                    </Nav>
                    
                    <Button variant='outline-info' className='me-2'>
                        Login
                    </Button>
                    <Button variant='outline-info' className='me-2'>
                        Register
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default Header