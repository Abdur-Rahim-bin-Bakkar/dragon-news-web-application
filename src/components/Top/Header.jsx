import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';
import BrakingNews from './BrakingNews';

const Header = () => {
    return (
        <div className='pt-10 text-center'>
            <Image src={logo} alt='header logo' width={300} height={200} className='max-w-80 mx-auto'/>
            <p className='mt-5 mb-3 text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-[#706F6F]'>{format(new Date(),'EEEE, MMM dd, yyyy')}</p>

            <BrakingNews/>
        </div>
    );
};

export default Header;