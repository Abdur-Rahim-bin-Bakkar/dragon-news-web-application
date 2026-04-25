import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { FaEye, FaLink, FaStar } from 'react-icons/fa';
import { MdSaveAlt } from 'react-icons/md';

const NewsCard = ({ news }) => {
    console.log(news)
    // const handelRout = ()=> redirect(`/details/${news._id
    //         }`)
    return (
        <div >
            <div className='card border border-[#F3F3F3] mb-10'>
                <div className="bg-[#F3F3F3] flex justify-between p-2 mb-2 items-center px-4">
                    <div className="flex gap-3 items-center">
                        <Image className='w-10 rounded-full' src={news.author.img} alt='author image' width={100} height={100} />
                        <div className="">
                            <h3 className='font-bold '>{news.author.name}</h3>
                            <p className=' '>{news.author.published_date}</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <FaLink className='text-lg' />
                        <MdSaveAlt className='text-lg' />
                    </div>
                </div>

                <div className="p-3 ">

                    <h1 className='text-lg font-bold'>{news.title}</h1>
                    <Image src={news.image_url} alt='news image' width={400} height={300} className='w-full my-4' />

                    <p className='text-[#706F6F] line-clamp-4'>{news.details}</p>
                    <Link href={`/details/${news._id}`} className='text-[#FF8C47] font-bold'>Read More</Link>
                </div>

                <div className=" border-t border-[#E7E7E7]     flex justify-between  py-4 px-3 mx-5">
                    <div className="flex gap-2 items-center">
                        <FaStar className='text-lg text-[#FF8C47] ' />
                        <FaStar className='text-lg text-[#FF8C47] ' />
                        <FaStar className='text-lg text-[#FF8C47] ' />
                        <FaStar className='text-lg text-[#FF8C47] ' />
                        <FaStar className='text-lg text-[#FF8C47] ' />
                        <p className='text-[#706F6F]'>{news?.rating?.number}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaEye />
                        <p className='text-[#706F6F]'>{news.total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;