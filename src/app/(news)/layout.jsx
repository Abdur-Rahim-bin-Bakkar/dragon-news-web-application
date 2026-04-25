import Header from '@/components/Top/Header';
import Navbar from '@/components/Top/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <Navbar></Navbar>

            {children}

        </div>
    );
};

export default MainLayout;