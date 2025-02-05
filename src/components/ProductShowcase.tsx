'use client';
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

const ProductShowcase = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      console.log("3D Model Loaded");
    }
  }, [isLoaded]);

  return (
    <div className="bg-gray-900 text-white p-8 shadow-xl flex flex-col md:flex-row items-center justify-center min-h-screen">
      {/* 3D Model */}
      <div className="w-full md:w-1/2 flex justify-center items-center transform transition-transform duration-500 hover:scale-105">
        <Spline
          scene="https://prod.spline.design/i8eNphGELT2tDQVT/scene.splinecode"
          className="w-full h-96"
          onLoad={() => setIsLoaded(true)}
          onError={() => console.log("Failed to load 3D Model")}
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#F9EF19] to-yellow-400">
          Mini-Dynamo One
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          The Mini-Dynamo One is a small and compact dynamo that can power small devices efficiently. Designed for portability and performance, it’s the perfect solution for your on-the-go energy needs.
        </p>
        <button className="mt-8 px-8 py-3 bg-gradient-to-r from-[#F9EF19] to-yellow-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductShowcase;