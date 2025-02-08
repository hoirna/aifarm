import React from "react";
import Image from "next/image";

interface InnovationCardProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  logoSrc: string;
  logoAlt: string;
  onClick?: () => void; // Optional click handler for the button
  reverseLayout?: boolean; // New prop to reverse the layout
}

const InnovationCard: React.FC<InnovationCardProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  logoSrc,
  logoAlt,
  onClick,
  reverseLayout = false, // Default to false if not provided
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${reverseLayout ? "md:flex-row-reverse" : "md:flex-row"} items-center px-4 md:px-16 bg-gray-50 py-6 md:py-8 space-y-6 md:space-y-0 md:space-x-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      {/* Left Section - Image */}
      <div className="flex-1 relative">
        <div className="relative w-full max-w-md mx-auto">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={300}
            className="rounded-xl object-cover w-full h-full"
            priority
          />
          <div className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-80 shadow-sm">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={60}
              height={60}
              className="rounded-md"
              priority
            />
          </div>
        </div>
      </div>

      {/* Right Section - Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 text-lg">{description}</p>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={onClick}
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default InnovationCard;


