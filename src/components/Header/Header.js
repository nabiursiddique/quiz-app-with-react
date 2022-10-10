import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="home">Quiz App</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="home">Home</Nav.Link>
                    <Nav.Link as={Link} to="topics">Topics</Nav.Link>
                    <Nav.Link as={Link} to="statistics">Statistics</Nav.Link>
                    <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;