import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardComponent = ({service, servicesRef}) => {
	// const [activeCard, setActiveCard] = React.useState(0);
	// const toggleCard = () => {
	// 	setActiveCard((prev) => (prev === 0 ? 1 : 0));
	// };

	// React.useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (servicesRef && servicesRef.current) {
	// 			const servicesRect =
	// 				servicesRef.current.getBoundingClientRect();
	// 			if (servicesRect.bottom <= window.innerHeight) {
	// 				setActiveCard(0);
	// 			}
	// 		}
	// 	};

	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, [servicesRef]);

	return (
		<div
			className="position-relative"
			style={{ overflow: 'hidden', height: '380px' }}
		>
			{/* Card 1 */}
			<div
				// onClick={toggleCard}
				// className={`position-absolute w-100 ${activeCard === 1 ? 'a--fade-in-move-left-disappear' : 'a--fade-in-move-left-appear'}`}
				style={{ zIndex: 1, cursor: 'pointer' }}
			>
                <Link to={service.to} style={{textDecoration: 'none', color: 'black'}}>
                    <Card className="service-card">
                        <img
                            src={service.img}
                            className="service-image"
                            alt="Service"
                        />
                    </Card>
                    <p className="service-title mt-2">{service.title}</p>
                </Link>
			</div>
			{/* Card 2 */}
			{/* <div
				onClick={toggleCard}
				className={`position-absolute w-100 border ${activeCard === 0 ? 'a--fade-in-move-left-disappear' : 'a--fade-in-move-left-appear'}`}
				style={{
					zIndex: 1,
					transform: 'translateX(1000px)',
                    cursor: 'pointer'
				}}
			>
				<p className="service-title mt-3">Alternate Content</p>
			</div> */}
		</div>
	);
};

export default CardComponent;
