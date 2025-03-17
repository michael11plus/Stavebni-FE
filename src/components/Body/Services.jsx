import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../../styles/styles.css";
import { servicesData } from '../../utils/mockupData';

const Services = () => {
    return (
        <Container className='services-container' fluid>
            {/* <h2>Naše služby</h2> */}
            <Row className='justify-content-center'>
                {servicesData.map((service) => (
                    <Col key={service.id} md={6} lg={4} className="mb-4">
                        <Card className="service-card">
                            <Card.Body>
                                <h5 className="service-title">{service.title}</h5>
                                <p className="service-caption">{service.caption}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Services;
