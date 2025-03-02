import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Head+Foot/Header';
import Footer from '../components/Head+Foot/Footer';

const RootLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;