import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

interface FeaturedResourcesBoxProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  category: string;
}

const FeaturedResourcesBox: React.FC<FeaturedResourcesBoxProps> = ({
  imageSrc,
  title,
  description,
  link,
  category,
}) => {
  return (
    <div className="relative bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden mb-8 space-y-8">
      {/* Image Section */}
      <div className="relative w-full h-48">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>

      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center mb-3">
          <span className="bg-[#F9EF19] text-gray-800 text-xs font-semibold py-1 px-3 rounded-full uppercase">{category}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Read More Link */}
        <Link href={link}>
          <span className="mt-4 text-yellow-400 font-semibold hover:underline transition duration-200">
            Read More →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedResourcesBox;
