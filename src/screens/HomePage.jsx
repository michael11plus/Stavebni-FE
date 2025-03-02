import React from "react";
import SwipeGallery from "../components/Body/SwipeGallery";
import Services from "../components/Body/Services";
import About from "../components/Body/About";
import ContactForm from "../components/Body/ContactForm";
import "../styles/styles.css";
import { Container } from "react-bootstrap";


const HomePage = () => {
    return (
        <Container fluid className="p-0">
            <SwipeGallery />
            <Services />
            <About />
            <ContactForm />
        </Container>
    )
}

export default HomePage;