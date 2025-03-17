import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, NavigationBar } from '../components';

const RootLayout = ({
    navbarStyle,
}) => {
    return (
        <div>
            <NavigationBar navbarStyle={navbarStyle} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;