import React from "react";
import SwipeGallery from "../components/Body/SwipeGallery";
import Services from "../components/Body/Services";
import About from "../components/Body/About";
import ContactForm from "../components/Body/ContactForm";
import NextProjects from "../components/Body/NextProjects";
import "../styles/styles.css";


const HomePage = () => {
    return (
        <div className="full-width">
            <SwipeGallery />
            <Services />
            <About />
            <ContactForm />
            <NextProjects />
        </div>
    )
}

export default HomePage;