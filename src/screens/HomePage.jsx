import React from 'react';
import { SwipeGallery, Hero } from '../components';
import { Services, Form } from '../components';
import '../styles/styles.css';
import { Container } from 'react-bootstrap';

const HomePage = ({ heroRef, servicesRef }) => {
	return (
		<Container fluid className="p-0">
			<SwipeGallery />
			<Hero heroRef={heroRef} />
			<Services servicesRef={servicesRef} />
			<Form />
		</Container>
	);
};

export default HomePage;
