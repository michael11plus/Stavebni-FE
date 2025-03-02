import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../styles/styles.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-light text-darks py-4">
            <Container>
                <Row className='justify-content-between text-md-start text-center'>
                    <Col xs={12} md={6}>
                        <h5>Kontakt</h5>
                        <p>📞 Telefon: +420 123 456 789</p>
                        <p>📧 Email: info@stavebnipage.cz</p>
                        <p>📍 Adresa: Stavební 246/8, 100 00, Praha 1</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <h5>Užitečné odkazy</h5>
                        <p><Link className='useful-links' to="/#services">Služby</Link></p>
                        <p><Link className='useful-links' to="/#about">O nás</Link></p>
                        <p><Link className='useful-links' to="/#contact">Kontakt</Link></p> 
                    </Col>
                </Row>
                <Row className='text-center'>
                    <Col className="footer-foot">
                        <p>© 2025 Všechna práva vyhrazena</p>
                        <p>M&F Development</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;