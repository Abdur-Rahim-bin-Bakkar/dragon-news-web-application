import CategoryBtns from '@/components/News/CategoryBtns';
import MainNews from '@/components/News/MainNews';
import Social from '@/components/News/Social';
import React from 'react';

const CategoryNewsPage = ({ params }) => {
    return (


        <div className="max-w-11/12 mx-auto gap-3  grid md:grid-cols-4">
            <div className="md:col-span-1">
                <h1 className='text-2xl font-bold'>All Category</h1>
                <CategoryBtns params={params}></CategoryBtns>
            </div>
            <div className="md:col-span-2 ">
                <h1 className='text-2xl font-bold'>Dragon News Home</h1>
                <MainNews params={params} />
            </div>
            <div className="md:col-span-1">
                <Social/>
            </div>
        </div>



    );
};

export default CategoryNewsPage;