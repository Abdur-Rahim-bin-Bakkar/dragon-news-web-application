import React from 'react';
import Marquee from 'react-fast-marquee';
const breakingNewsCollection = [
  {
    id: 1,
    title: "Massive Fire Breaks Out in City Market",
    description: "A huge fire erupted in the central market area, causing panic among locals. Firefighters are working to control the situation.",
    category: "Emergency",
    image: "https://example.com/images/fire.jpg",
    author: "John Doe",
    date: "2026-04-25",
    isBreaking: true
  },
  {
    id: 2,
    title: "Government Announces New Economic Policy",
    description: "The government has introduced a new policy aimed at boosting economic growth and supporting small businesses.",
    category: "Politics",
    image: "https://example.com/images/economy.jpg",
    author: "Sarah Khan",
    date: "2026-04-25",
    isBreaking: true
  },
  {
    id: 3,
    title: "Severe Storm Warning Issued",
    description: "Meteorological department has issued a severe storm warning for coastal regions. Residents are advised to stay alert.",
    category: "Weather",
    image: "https://example.com/images/storm.jpg",
    author: "Weather Desk",
    date: "2026-04-25",
    isBreaking: true
  },
  {
    id: 4,
    title: "Tech Giant Launches New AI Tool",
    description: "A leading tech company has unveiled a new AI-powered tool that aims to revolutionize productivity.",
    category: "Technology",
    image: "https://example.com/images/ai.jpg",
    author: "Tech Reporter",
    date: "2026-04-25",
    isBreaking: true
  },
  {
    id: 5,
    title: "International Football Match Ends in Draw",
    description: "The highly anticipated match ended in a thrilling draw, leaving fans excited for the next encounter.",
    category: "Sports",
    image: "https://example.com/images/football.jpg",
    author: "Sports Desk",
    date: "2026-04-25",
    isBreaking: true
  }
];


const BrakingNews = () => {
    return (
        <div className='max-w-11/12 mx-auto bg-[#F3F3F3] py-2 px-3 flex gap-3 mt-6'>
            <button className='btn bg-[#D72050] text-white font-bold'>Latest</button>
            <Marquee pauseOnHover>

                {
                    breakingNewsCollection.map(news=> <span className='mx-10 px-2 border-r border-l border-red-400' key={news.id}>{news.title}</span>)
                }
                
            </Marquee>
        </div>
    );
};

export default BrakingNews;