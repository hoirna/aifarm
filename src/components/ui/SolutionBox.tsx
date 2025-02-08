import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

interface SolutionBoxProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const SolutionBox: React.FC<SolutionBoxProps> = ({ imageSrc, title, description, link }) => {
  return (
    <div className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md border  hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ">
      
      {/* Image Container - Adjusted */}
      <div className="relative w-full h-52 rounded-xl overflow-hidden bg-gray-100 mb-4">
        {/* Category Badge - Positioned Inside Image */}
      

        <Image 
          src={imageSrc} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center" 
          className="rounded-xl h-auto w-auto"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Read More Link */}
      <Link href={link} className="text-yellow-300 font-semibold hover:text-yellow-400 transition">
        Learn More →
      </Link>
    </div>
  );
};

export default SolutionBox;
