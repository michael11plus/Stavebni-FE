import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../../styles/styles.css";
import { servicesData } from '../../utils/mockupData';
import { reconstruct_house } from '../../assets';

const Services = () => {
    const [showServices, setShowServices] = useState(false);
    const showServicesHandler = () => {
        setShowServices(!showServices);
    };

    return (
        <Container className='services-container' fluid>
            {/* <h2>Naše služby</h2> */}
            <div className='justify-content-center base-width p-0 service-grid'>
                {servicesData.map((service, index) => {
                    if (index > 2 && !showServices)
                        return;
                    else 
                        return (
                            <div key={service.id} md={6} lg={4} className="">
                                <Card className="service-card">
                                    <img src={service.img} className='service-image'/>
                                </Card>
                                <h5 className="service-title">{service.title}</h5>
                                <p className="service-caption">{service.caption}</p>
                            </div>
                        )
                })}
            </div>
            <button className="button--black" onClick={showServicesHandler}>
                Více informací
            </button>
        </Container>
    );
};

export default Services;
