import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import "../../styles/landing-page.css";
import { servicesData } from '../../utils/mockupData';

const Services = ({
    servicesRef
}) => {
    const [showServices, setShowServices] = useState(false);
    const [serviceHit, setServiceHit] = useState(false);
    const [ isTwoColumns, setIsTwoColumns ] = useState(false);

    const showServicesHandler = () => {
        setShowServices((prev) => {
            if (prev && servicesRef.current) {
                const elementTop = servicesRef.current.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: elementTop - 72, behavior: "smooth" });
            }
            return !prev;
        });
    };

    React.useEffect(() => {
        const handleScroll = () => {
            if (servicesRef.current) {
                const servicesRect = servicesRef.current.getBoundingClientRect();
                if (servicesRect.top + 120 <= window.innerHeight) {
                    setServiceHit(true);
                }
            }

        };

        const handleResize = () => {
            if(window.innerWidth >= 768 && window.innerWidth < 992)
                setIsTwoColumns(true);
            else
                setIsTwoColumns(false);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);   
        }
    }, []);

    return (
        <Container ref={servicesRef} className='services-container position-relative section' fluid>
            <div className={`justify-content-center base-width service-grid ${serviceHit ? 'a--fade-in-move-up' : 'opacity-0'}`}>
                {servicesData.map((service, index) => {
                    if ((index > 2 && !showServices) || (index > 1 && isTwoColumns))
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
