import React from 'react';
import '../styles/navbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = ({
    navbarStyle
}) => {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) { // Adjust 50 to whatever threshold you prefer
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Navbar className={`navbar d-flex align-items-center justify-content-center ${scrolled ? 'navbar--layer' : ''} ${navbarStyle === 'white' ? 'navbar--white' :  ''}`} expand="md">
            <Container fluid className='base-width p-0'>
                <Navbar.Brand as={Link} to="/">🏗 Housing</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/services">Služby</Nav.Link>
                        <Nav.Link as={Link} to="/about">O nás</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;