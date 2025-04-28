import React, { useEffect, useRef, useState } from 'react';
import '../../styles/styles.css';
import '../../styles/animations.css';
import '../../styles/landing-page.css';
import { Col, Container, Row } from 'react-bootstrap';

const Hero = ({ heroRef }) => {
	const titleRef = useRef(null);
	const subtitleRef = useRef(null);

	const [titleHit, setTitleHit] = useState(false);
	const [subtitleHit, setSubtitleHit] = useState(false);

	useEffect(() => {}, [titleHit]);

	React.useEffect(() => {
		const handleScroll = () => {
			if (titleRef.current) {
				const titleRect = titleRef.current.getBoundingClientRect();
				if (titleRect.top <= window.innerHeight) {
					setTitleHit(true);
				} else setTitleHit(false);
			}

			if (subtitleRef.current) {
				const subtitleRect =
					subtitleRef.current.getBoundingClientRect();
				if (subtitleRect.top + 100 <= window.innerHeight) {
					setSubtitleHit(true);
				} else setSubtitleHit(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<Container
			ref={heroRef}
			className="hero section d-flex justify-content-center align-items-center flex-column"
			fluid
		>
			<Row className="p-0 base-width d-flex justify-content-center align-items-center">
				<Row className="p-0">
					<Col
						ref={titleRef}
						className={`hero-title p-0 pe-4 ${titleHit ? 'a--fade-in-move-right' : ''}`}
						xs={6}
					>
						Specializujeme se na poskytování kvalitních stavebních,
						malířských a úklidových služeb v Praze.
					</Col>
				</Row>
				<Row className="d-flex justify-content-end p-0 m-0">
					<Col
						ref={subtitleRef}
						className={`hero-subtitle p-0 ${subtitleHit ? 'a--fade-in-move-left' : ''}`}
						xs={4}
					>
						Klademe maximální důraz na spolehlivost, preciznost a
						cenovou dostupnost.
					</Col>
				</Row>
			</Row>
		</Container>
	);
};

export default Hero;
