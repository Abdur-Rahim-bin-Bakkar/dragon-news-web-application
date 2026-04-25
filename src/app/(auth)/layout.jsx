import Navbar from '@/components/Top/Navbar';
import React from 'react';

const authLayout = ({children}) => {

    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default authLayout;