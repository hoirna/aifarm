"use client"; // Ensure this runs only in the browser

import React, { useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/components/constants/Index";

export interface Product {
  image: string;
  name: string;
  description: string;
}

const ProductSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Function to navigate between product sets
  const handleNavigation = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? (totalPages - 1) * itemsPerPage : prevIndex - itemsPerPage
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage
      );
    }
  };

  return (
    <section className="relative w-full flex items-center justify-center">
      {/* Previous Button (Left Side) */}
      <button
        onClick={() => handleNavigation("prev")}
        className="absolute left-0 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-all"
      >
        &#10094;
      </button>

      {/* Product Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-12">
        {products.slice(currentIndex, currentIndex + itemsPerPage).map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            description={product.description}
          />
        ))}
      </div>

      {/* Next Button (Right Side) */}
      <button
        onClick={() => handleNavigation("next")}
        className="absolute right-0 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-all"
      >
        &#10095;
      </button>
    </section>
  );
};

export default ProductSlider;
