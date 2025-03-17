import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import "../../styles/styles.css";
import { servicesData } from '../../utils/mockupData';

const Services = ({
    servicesRef
}) => {
    const [showServices, setShowServices] = useState(false);
    const showServicesHandler = () => {
        setShowServices((prev) => {
            if (prev) {
                servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            return !prev;
        });
    };

    return (
        <Container ref={servicesRef} className='services-container' fluid>
            <div className='justify-content-center base-width service-grid'>
                {servicesData.map((service, index) => {
                    if (index > 2 && !showServices)
                        return;
                    else 
                        return (
                            <div key={service.id}>
                                <Card className="service-card">
                                    <img src={service.img} className='service-image'/>
                                </Card>
                                <p className="service-title mt-3">{service.title}</p>
                                {/* <p className="service-caption">{service.caption}</p> */}
                            </div>
                        )
                })}
            </div>
            <button className="button--black mt-4" onClick={showServicesHandler}>
                Více informací
            </button>
        </Container>
    );
};

export default Services;
