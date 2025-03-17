import React, { useEffect, useRef } from "react";
import { SwipeGallery, Hero } from "../components";
import Services from "../components/Body/Services";
import About from "../components/Body/About";
import ContactForm from "../components/Body/ContactForm";
import "../styles/styles.css";
import { Container } from "react-bootstrap";


const HomePage = ({
    heroRef,
    servicesRef,
}) => {

    return (
        <Container fluid className="p-0">
            <SwipeGallery />
            <Hero heroRef={heroRef} />
            <Services servicesRef={servicesRef} />
            <About />
            <ContactForm />
        </Container>
    )
}

export default HomePage;