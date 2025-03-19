import React, { useEffect, useRef, useState } from 'react';
import "../../styles/styles.css";
import "../../styles/animations.css";
import "../../styles/landing-page.css";
import { Col, Container, Row } from 'react-bootstrap';

const Hero = ({
    heroRef
}) => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    const [titleHit, setTitleHit] = useState(false);
    const [subtitleHit, setSubtitleHit] = useState(false);

    useEffect(() => {
    }, [titleHit]);

    React.useEffect(() => {
        const handleScroll = () => {
            if (titleRef.current) {
                const titleRect = titleRef.current.getBoundingClientRect();
                if (titleRect.top <= window.innerHeight) {
                    setTitleHit(true);
                }
                if (titleRect.top < 0)
                    setTitleHit(false);
            }

            if (subtitleRef.current) {
                const subtitleRect = subtitleRef.current.getBoundingClientRect();
                if (subtitleRect.top + 100 <= window.innerHeight) {
                    setSubtitleHit(true);
                }

                if (subtitleRect.top < 0)
                    setSubtitleHit(false);
            }

        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Container ref={heroRef} className='hero section d-flex justify-content-center align-items-center flex-column' fluid>
            <Row className='p-0 base-width d-flex justify-content-center align-items-center'>
                <Row className='p-0'>
                    <Col ref={titleRef} className={`hero-title p-0 ${titleHit ? 'a--fade-in-move-right' : 'opacity-0'}`} xs={6}>
                        Our goal is to deliver exceptional returns for our investors by executing high-quality flat renovation projects that enhance property value and appeal.
                    </Col>
                </Row>
                <Row className='d-flex justify-content-end p-0 m-0'>
                    <Col ref={subtitleRef} className={`hero-subtitle p-0 ${subtitleHit ? 'a--fade-in-move-left' : 'opacity-0'}`} xs={4}>
                        We work with local partners to renovate and revitalize properties in Prague, ensuring they meet modern standards while preserving their character.
                    </Col>
                </Row>
            </Row>
        </Container>
    );
};

export default Hero;