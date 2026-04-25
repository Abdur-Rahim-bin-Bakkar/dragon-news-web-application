import Social from '@/components/News/Social';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const page = async ({ params }) => {
    const { id } = await params
    console.log(id)
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`, {cache:"no-store"})
    const data = await res.json()
    const news = data.data[0]
    console.log(news)
    return (
        <div className="max-w-11/12 mx-auto">
            <h1 className='font-bold text-2xl'>Dragon News</h1>
            <div className=' md:grid grid-cols-4 gap-4'>
                <div className="col-span-3  mb-10 border border-[#ffffff40]">
                    <Image src={news.image_url} alt='news image' width={400} height={300} className='w-full my-5' />

                    <div className="p-3">
                        <h1 className='font-bold text-lg'>{news.title}</h1>
                        <p className='text-[#706F6F]  my-3'>{news.details}</p>

                        <Link className='btn text-white font-bold bg-[#D72050]' href={`/news/${news.category_id}`}><FaArrowLeftLong className='text-lg'/> All news in this category</Link>
                    </div>
                </div>



                <div className="col-span-1">
                    <Social />
                </div>

            </div>
        </div>
    );
};

export default page;