import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/styles.css';
import '../styles/animations.css';
import { facebookIcon, instagramIcon } from '../assets';

const Footer = () => {
	const footerRef = React.useRef(null);
	const [footerHit, setFooterHit] = React.useState();

	React.useEffect(() => {
		const handleScroll = () => {
			if (footerRef.current) {
				const servicesRect = footerRef.current.getBoundingClientRect();
				if (servicesRect.top + 120 <= window.innerHeight) {
					setFooterHit(true);
				} else setFooterHit(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<footer
			ref={footerRef}
			className="bg-light text-darks d-flex align-items-center justify-content-center py-5"
		>
			<Row
				className={`base-width ${footerHit ? 'a--fade-in-move-up' : 'opacity-0'}`}
			>
				<Col
					xs={12}
					className="p-0 pb-3"
					style={{
						borderBottom: 'solid .8px',
						fontSize: '56px',
						fontWeight: '400',
					}}
				>
					Tvoříme domov podle vašich představ
				</Col>
				<Col xs={12} className="p-0 py-5" md={6}>
					<p style={{ fontSize: '1.35rem', fontWeight: '600' }}>
						HOUSING
					</p>
					<p style={{ fontSize: '.9rem', fontWeight: '300' }}>
						Stavební 246/8, 100 00, Praha 1
					</p>
					<p style={{ fontSize: '.9rem', fontWeight: '300' }}>
						info@stavebnipage.cz
					</p>
					<p style={{ fontSize: '.9rem', fontWeight: '300' }}>
						+420 777 666 555
					</p>
				</Col>
				<Col xs={12} className="p-0 py-5" md={6}>
					<p style={{ fontSize: '1rem', fontWeight: '600' }}>
						Užitečné odkazy
					</p>
					<p style={{ fontSize: '.9rem', fontWeight: '300' }}>
						Služby
					</p>
					<p style={{ fontSize: '.9rem', fontWeight: '300' }}>
						O nás
					</p>
				</Col>
				<Col
					className="p-0 pb-4"
					xs={12}
					style={{ borderBottom: 'solid grey .1px' }}
				>
					<img
						className="me-2"
						style={{ cursor: 'pointer' }}
						alt="instagram icon"
						height={24}
						src={instagramIcon}
					/>
					<img
						style={{ cursor: 'pointer' }}
						alt="facebook icon"
						height={24}
						src={facebookIcon}
					/>
				</Col>
				<Col className="p-0 pt-3 pb-5 mb-3 mb-md-0 pb-md-0" xs={12}>
					<p style={{ fontSize: '.9rem', fontWeight: '300' }}>
						© 2024 Housing, Inc.
					</p>
				</Col>
			</Row>
		</footer>
	);
};

export default Footer;
