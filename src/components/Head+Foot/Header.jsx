import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">🏗 I+I Housing</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Domů</Nav.Link>
                        <Nav.Link as={Link} to="/#services">Služby</Nav.Link>
                        <Nav.Link as={Link} to="/#about">O nás</Nav.Link>
                        <Nav.Link as={Link} to="/#contact">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;