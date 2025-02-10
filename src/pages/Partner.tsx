import React from "react";
import Image from "next/image";
import { partnersData } from "@/components/constants/Index";

const Partners = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white py-16">
           {/* Hero Image Section */}
           <section className="relative w-full h-[600px] bg-gray-50">
             <Image
               src="/assets/images/partner.jpg"
               alt="Innovation Lab showcasing robotics and automation technology"
               fill
               style={{ objectFit: "cover" }}
               quality={100}
               priority
             />
             <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30"></div>
             <div className="absolute inset-0 flex justify-center items-center text-white text-center px-4">
               <h1 className="text-4xl font-bold">Explore Our Resources</h1>
               <p className="mt-4 text-xl">Discover useful documents, tools, and guides.</p>
             </div>
           </section>
     
      <div className="max-w-7xl mx-auto text-center mt-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-10 tracking-tight">
          Meet Our Trusted Partners
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6">
          {partnersData.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <div className="w-full h-64 overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {partner.name}
                  </h3>
                  <p className="text-lg text-gray-600">{partner.description}</p>
                </div>
              </a>
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
