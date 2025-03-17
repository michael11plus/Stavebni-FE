import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import "../../styles/styles.css";
import { servicesData } from '../../utils/mockupData';

const Services = () => {
    const [showServices, setShowServices] = useState(false);
    const componentRef = React.useRef(null);
    const showServicesHandler = () => {
        setShowServices((prev) => {
            if (prev) {
                componentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            return !prev;
        });
    };

    return (
        <Container ref={componentRef} className='services-container' fluid>
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
