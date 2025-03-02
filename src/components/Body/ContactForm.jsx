import React from 'react';
import "../../styles/styles.css";
import { Button, Col, Container, Row } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <Container fluid className='contact-container text-center'>
            <Row className='align-items-center text-center text-md-start'>
                <Col xs={12} md={6} className='contact-text'>
                    <h4>Konzultace ZDARMA! Kontaktujte nás</h4>
                </Col>

                <Col xs={12} md={6} className='contact-buttons'>
                    <Button variant='outline-warning'>
                        <strong>Napište:</strong> Formulář
                    </Button>
                    <Button variant='outline-primary'>
                        <strong>Zavolejte:</strong> Telefon
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;
