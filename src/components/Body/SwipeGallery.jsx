import React from 'react';
import "../../styles/styles.css";
import { Carousel } from "react-bootstrap";
import Block1 from "../../assets/Block1.jpeg";
import Block2 from "../../assets/Block2.jpeg";

const SwipeGallery = () => {
    return (
        <div className='section swipe-gallery'>
            <Carousel>
                <Carousel.Item>
                    <img className='d-block w-100' src={Block1} alt="Projekt 1" />
                    <Carousel.Caption>
                        <h3>Náš poslední projekt</h3>
                        <p>Tento projekt je realizován ve spolupráci s xyz.cz</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={Block2} alt="Projekt 2" />
                    <Carousel.Caption>
                        <h3>Náš první projekt</h3>
                        <p>Tento projekt je realizován ve spolupráci s xyz.cz</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default SwipeGallery;
