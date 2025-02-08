'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Lazy load the Spline component for better performance
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false, // Disable server-side rendering for this component
});

const ProductShowcase = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      console.log('3D Model Loaded');
    }
  }, [isLoaded]);

  return (
    <div className="bg-gray-900 text-white p-8 flex flex-col md:flex-row items-center justify-center min-h-screen w-full">
      {/* 3D Model */}
      <motion.div
        className="w-auto md:w-1/2 flex justify-center items-center transform transition-transform duration-500 hover:scale-105 md:mr-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Spline
          scene="https://prod.spline.design/PBQQBw8bfXDhBo7w/scene.splinecode"
          className="w-full h-screen md:h-[500px]"
          onLoad={() => setIsLoaded(true)}
          onError={() => console.error('Failed to load 3D Model')}
        />
      </motion.div>

      {/* Product Details */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#F9EF19] to-yellow-400">
          Mini-Dynamo One
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          The Mini-Dynamo One is a small and compact dynamo that can power small devices efficiently. Designed for portability and performance, it’s the perfect solution for your on-the-go energy needs.
        </p>
        <button
          className="px-8 py-3 bg-gradient-to-r from-[#F9EF19] to-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          onClick={() => {
            // Add your button action here
            console.log('Learn More clicked');
          }}
          aria-label="Learn more about Mini-Dynamo One"
        >
          Learn More
        </button>
      </motion.div>
    </div>
  );
};

export default ProductShowcase;