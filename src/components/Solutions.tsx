import React from 'react';
import SolutionBox from './ui/SolutionBox';
import { solutions } from '@/components/constants/Index';
import PublicIcon from '@mui/icons-material/Public';

interface SolutionProps {
  showCTA?: boolean;
}

const Solution: React.FC<SolutionProps> = ({ showCTA = true }) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <PublicIcon className="text-yellow-300" fontSize="large" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-left mb-0">
            Real World Solutions
          </h1>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <SolutionBox
              key={index}
              imageSrc={solution.imageSrc}
              title={solution.title}
              description={solution.description}
              link={solution.link}
            />
          ))}
        </div>
        {/* Call to Action - Only Render if showCTA is true */}
        {showCTA && (
          <div className="text-center mt-16">
            <a 
              href="/solutions" 
              className="px-6 py-3 bg-[#F9EF19] text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition duration-300"
            >
              Discover More Solutions
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Solution;