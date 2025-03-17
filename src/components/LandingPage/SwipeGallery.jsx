import React from 'react';
import "../../styles/styles.css";
import "../../styles/slider.css";
import "../../styles/animations.css";
import { Carousel, Container } from "react-bootstrap";
import { kitchen_1, kitchen_2 } from '../../assets';

const SwipeGallery = () => {
    return (
        <>
            <Carousel  controls={false} interval={3000} style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                    <Carousel.Item className='position-relative'>
                        <img className='w-100 flipped-image' src={kitchen_1} alt="Mordern kitchen 1" />
                        <div className='layer'></div>
                        <Carousel.Caption className='d-flex flex-column justify-content-center position-absolute a--fade-in-move-up'>
                            <Container fluid className='base-width d-flex flex-column align-items-center align-items-md-start p-0'>
                                <h3 className=''>Náš poslední projekt</h3>
                                <p className=''>Tento projekt je realizován ve spolupráci s xyz.cz</p>
                                <button className="button--white">
                                    Více informací
                                </button>
                            </Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                <Carousel.Item className='position-relative'>
                    <img className='w-100 flipped-image' src={kitchen_2} alt="Mordern kitchen 2" />
                    <div className='layer'></div>
                    <Carousel.Caption className='d-flex flex-column justify-content-center position-absolute'>
                        <Container fluid className='base-width d-flex flex-column align-items-center align-items-md-start p-0'>
                            <h3>Náš poslední projekt</h3>
                            <p>Tento projekt je realizován ve spolupráci s xyz.cz</p>
                            <button className="button--white">
                                Více informací
                            </button>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
};

export default SwipeGallery;
