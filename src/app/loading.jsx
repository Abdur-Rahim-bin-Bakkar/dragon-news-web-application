import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <HashLoader />
            
        </div>
    );
};

export default loading;