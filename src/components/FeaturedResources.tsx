import React from 'react';
import FeaturedResourceBox from '@/components/ui/FeaturedResourceBox';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { featuredResources } from '@/components/constants/Index';


const FeaturedResources: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-4 my-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <LibraryBooksOutlinedIcon className="text-yellow-300" fontSize="large" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Featured Resources</h1>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredResources.map((item, index) => (
            <FeaturedResourceBox
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              link={item.link}
              category={item.category}
            />
          ))}
        </div>
        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="/resources"
            className="px-6 py-3 bg-[#F9EF19] text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition duration-300"
          >
            View More Resources
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;
