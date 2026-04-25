import React from 'react';
import img from '@/assets/error-404.png'
import Image from 'next/image';

const NotFountPage = () => {
    return (
        <div className='h-screen flex justify-center items-center flex-col space-y-3'>
            <h1 className='font-bold text-4xl text-purple-500 mb-4'>Not Fount your Item</h1>
            <Image src={img} alt='not found image' width={200} height={200} className='max-w-120 mx-auto'></Image>
        </div>
    );
};

export default NotFountPage;