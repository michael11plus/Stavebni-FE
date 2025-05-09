import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from '../root-layout/RootLayout';
import HomePage from '../screens/HomePage';
import { ServiceConstruction, ServiceDemolition } from '../components';

const Router = () => {
	const heroRef = useRef(null);
	const servicesRef = useRef(null);
	const [navbarStyle, setNavbarStyle] = React.useState('');

	React.useEffect(() => {
		const handleScroll = () => {
			if (servicesRef.current && window.scrollY >= servicesRef.current.offsetTop - 72) {
				setNavbarStyle('black');
			} else {
				setNavbarStyle('');
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<RootLayout navbarStyle={navbarStyle} />}
				>
					<Route
						index
						element={
							<HomePage
								heroRef={heroRef}
								servicesRef={servicesRef}
							/>
						}
					/>
					<Route path='stavebni-prace' element={<ServiceConstruction />}/>
					<Route path='bouraci-prace' element={<ServiceDemolition />}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
