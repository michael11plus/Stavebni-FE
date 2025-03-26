import React from "react";
import { SwipeGallery, Hero } from "../components";
import { Services, Form } from "../components";
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
            <Form />
            {/* <About /> */}
        </Container>
    )
}

export default HomePage;