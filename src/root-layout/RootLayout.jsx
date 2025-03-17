import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, NavigationBar } from '../components';

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