import React from 'react';
import NewsCard from './NewsCard';

const MainNews = async ({ params }) => {
    
    const category = await params;
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category.category}`)
    const data = await res.json()
    const news = data.data
    console.log(news)
    return (
        <div>
            {
                news.map((n,i)=> <NewsCard key={i} news={n}/>)
            }
        </div>
    );
};

export default MainNews;