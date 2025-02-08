import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LatestNewsBoxProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  date: string;
  source: string;
}

const LatestNewsBox: React.FC<LatestNewsBoxProps> = ({ imageSrc, title, description, link, date, source }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden space-y-4">
      <Image src={imageSrc} alt={title} width={400} height={250} className="w-full h-52 object-cover" />

      <div className="p-6">
        {/* Date & Source */}
        <p className="text-sm text-gray-500 mb-2">{date} • {source}</p>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Read More Link */}
        <Link href={link} className="text-yellow-400 font-semibold hover:underline">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default LatestNewsBox;
