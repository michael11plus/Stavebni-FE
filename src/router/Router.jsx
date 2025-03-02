import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from '../root-layout/RootLayout';
import HomePage from '../screens/HomePage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;