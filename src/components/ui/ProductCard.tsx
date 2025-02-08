import React from "react";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, description }) => {
  return (
    <div className="min-w-[280px] bg-white rounded-xl shadow-lg overflow-hidden snap-start transition-transform transform hover:scale-105">
      <Image src={image} alt={name} width={300} height={300} className="object-cover w-full h-64" />
      <div className="p-5 text-center">
        <h4 className="text-xl font-semibold text-gray-900">{name}</h4>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
