import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import image from '@/assets/swimming.png'
import image2 from '@/assets/playground.png'
import image3 from '@/assets/class.png'
import image4 from '@/assets/bg.png'

const Social = () => {
    return (
        <div className=''>
            <h1 className='font-bold text-2xl '>Login With</h1>
            <div className="flex flex-col gap-2 mt-5">
                <button className='btn btn-outline border-sky-600 text-sky-500'><FaGoogle /> Login With Google</button>
                <button className='btn btn-outline'><FaGithub /> Login With GitHub</button>
            </div>

            <div className="mt-8">
                <h1 className='text-2xl font-bold mb-4'>Find US On</h1>
                <div className="join join-vertical w-full text-[#706F6F] text-start">
                    <button className="btn btn-outline border border-[#E7E7E7] join-item w-full flex justify-start gap-4  p-2"><span><FaFacebook className='text-lg text-sky-300'/></span> Facebook</button>
                    <button className="btn btn-outline border-[#E7E7E7]  join-item flex justify-start gap-4 p-2"><FaTwitter className='text-sky-500 tabs-lg'/> Twitter</button>
                    <button className="btn btn-outline border-[#E7E7E7]  join-item flex justify-start gap-4 p-2"> <FaInstagram className='text-pink-500 text-lg'/> Instagram</button>
                </div>
            </div>

            <div className="mt-5 space-y-2 bg-[#F3F3F3] p-5">
                <h1 className='font-bold text-2xl '>Q-Zone</h1>

                <Image src={image} alt='swimming' width={500} height={500} className='w-[70%] mx-auto md:w-full'/>
                <Image src={image2} alt='swimming' width={500} height={500} className='w-[70%] mx-auto md:w-full'/>
                <Image src={image3} alt='swimming' width={500} height={500} className='w-[70%] mx-auto md:w-full'/>
                <Image src={image4} alt='swimming' width={500} height={500} className='w-[70%] mx-auto md:w-full'/>
            </div>
        </div>
    );
};

export default Social;