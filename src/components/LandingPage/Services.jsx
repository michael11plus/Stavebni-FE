import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import '../../styles/landing-page.css';
import { servicesData } from '../../utils/mockupData';
import CardComponent from '../CardComponent';

const Services = ({ servicesRef }) => {
	const [serviceHit, setServiceHit] = useState(false);
	const [isTwoColumns, setIsTwoColumns] = useState(false);

	const showServicesHandler = () => {
		setServiceHit((prev) => {
			if (prev && servicesRef.current) {
				const elementTop =
					servicesRef.current.getBoundingClientRect().top +
					window.scrollY;
				window.scrollTo({ top: elementTop - 72, behavior: 'smooth' });
			}
			return !prev;
		});
	};

	useEffect(() => {
		const handleScroll = () => {
			if (servicesRef.current) {
				const servicesRect =
					servicesRef.current.getBoundingClientRect();
				if (servicesRect.top + 120 <= window.innerHeight) {
					setServiceHit(true);
				} else {
					setServiceHit(false);
				}
			}
		};

		const handleResize = () => {
			if (window.innerWidth >= 768 && window.innerWidth < 992)
				setIsTwoColumns(true);
			else setIsTwoColumns(false);
		};

		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
		};
	}, [servicesRef]);

	return (
		<Container
			ref={servicesRef}
			className="services-container position-relative section"
			fluid
		>
			<div
				className={`justify-content-center base-width service-grid ${serviceHit ? 'a--fade-in-move-up' : 'opacity-0'}`}
			>
				{servicesData.map((service, index) => {
					if (
						(index > 2 && !serviceHit) ||
						(index > 1 && isTwoColumns)
					)
						return null;
					return (
						<CardComponent
                            key={service.id}
							service={service}
							servicesRef={servicesRef}
						/>
					);
				})}
			</div>
			{/* <button
				className="button--black mt-4"
				onClick={showServicesHandler}
			>
				Více informací
			</button> */}
		</Container>
	);
};

export default Services;
