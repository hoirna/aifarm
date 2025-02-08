import React from "react";
import Image from "next/legacy/image";

function InnovationLab() {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center text-white px-6">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image 
          src="/assets/images/feature4.png" 
          alt="Innovation Lab showcasing robotics and automation technology"  // Improved alt text for accessibility
          layout="fill"  
          objectFit="cover"  
          quality={100}  
          priority  // Keep this, remove "loading='lazy'" to avoid conflict
          unoptimized={true}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 p-8 rounded-xl text-center max-w-3xl mx-4 sm:mx-8 shadow-xl">
  <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 tracking-wide">
    Redefining Robotics: Innovation Labs
  </h1>
  <p className="text-lg sm:text-xl mb-8 text-gray-300 leading-relaxed">
    Our Innovation Labs are where we push the boundaries of what is
    possible with robotics and automation. Constantly experimenting with new
    technologies and approaches, we aim to deliver the best solutions for
    our customers. Our team is always working on cutting-edge projects to
    help you stay ahead of the competition.
  </p>
  <a
    href="/innovation-labs"
    className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
  >
    See Our Labs →
  </a>
</div>

    </div>
  );
}

export default InnovationLab;
