import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        /* 
                <Navbar bg="dark" variant="dark" className='py-3'>
                    <Container>
                        <Navbar.Brand className='fw-bold text-info' as={Link} to="/">Quiz App</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="topics">Topics</Nav.Link>
                            <Nav.Link as={Link} to="statistics">Statistics</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar >
                 */

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='py-3'>
            <Container>
                <Navbar.Brand className='fw-bold text-info' as={Link} to="/">Quiz App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="topics">Topics</Nav.Link>
                        <Nav.Link as={Link} to="statistics">Statistics</Nav.Link>
                        <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;