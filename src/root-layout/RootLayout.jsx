import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/Head+Foot/NavigationBar';
import Footer from '../components/Head+Foot/Footer';

const RootLayout = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;