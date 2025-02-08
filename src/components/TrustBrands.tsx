import { brands } from '@/components/constants/Index'; // Import the brands data
import Image from 'next/legacy/image';
import React from 'react';


export interface Brand {
  src: string;
  alt: string;
  width: number;
  height: number;
}
// BrandLogo component that displays individual brand logos
const BrandLogo: React.FC<Brand> = ({ src, alt, width, height }) => (
  <div className="flex items-center justify-center w-40 h-24 sm:w-52 sm:h-28 rounded-lg p-4">
    <Image
  src={src}
  alt={alt}
  layout="intrinsic" // Helps maintain aspect ratio
  width={width}
  height={height}
  loading="lazy"
  aria-label={alt}
  className="object-contain" // Use Tailwind instead
/>

  </div>
);

// TrustedBrands component to display a grid of trusted brands
const TrustedBrands: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      {/* Section Title */}
      <div className="container mx-auto text-center px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Trusted by Thousands of Customers Worldwide
        </h1>
      </div>
      {/* Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mt-6 sm:mt-8 px-4 md:px-6 place-items-center">
        {brands.map((brand, index) => (
          <BrandLogo key={index} {...brand} />
        ))}
      </div>
    </div>
  );
};

export default TrustedBrands;