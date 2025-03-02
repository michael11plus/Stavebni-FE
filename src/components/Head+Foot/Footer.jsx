import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-light text-darks py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Kontakt</h5>
                        <p>Email: info@stavebnipage.cz</p>
                        <p>Telefon: +420 123 456 789</p>
                    </Col>
                    <Col md={4}>
                        <h5>Užitečné odkazy</h5>
                        <p><a href="/#services" className="text-light">Služby</a></p>
                        <p><a href="/#about" className="text-light">O nás</a></p>
                    </Col>
                    <Col md={4} className="text-center">
                        <p>© 2025 Všechna práva vyhrazena</p>
                        <p>M&F Development</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;