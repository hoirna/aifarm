import React from 'react';
import LatestNewsBox from './ui/LatestNewsBox';
import { newsItems } from '@/components/constants/Index';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';

const LatestNews: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 ">
      {/* News Header */}
      <div className="max-w-6xl mx-auto ">
        <div className="flex items-center gap-3 mb-8">
          <NewspaperOutlinedIcon className="text-yellow-300" fontSize="large" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Latest News
          </h1>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <LatestNewsBox
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              link={item.link}
              date={item.date}
              source={item.source}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="/news" 
            className="px-6 py-3 bg-[#F9EF19] text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition duration-300"
          >
            View More News
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
