import Link from 'next/link';
import React from 'react';

const CategoryBtns = async ({ params }) => {
    const { category } = await params
    const res = await fetch(' https://openapi.programming-hero.com/api/news/categories', { cache: "no-store" })
    const categorys = await res.json()
    const links = await categorys.data.news_category
    return (
        <div className='flex flex-col gap-2  mt-3 '>
            {
                links.map(link => <Link className={`cursor-pointer ${Number(category) === Number(link.category_id) && 'btn'}`} href={`/news/${link.category_id}`} key={link.category_id} >{link.category_name}</Link>)
            }
        </div>
    );
};

export default CategoryBtns;