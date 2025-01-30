import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import AutoPlayVideo from "@/components/autoplayvideo";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      {/* Main Content */}
      <main className="container">
        {/* Full-Screen Video Section */}
        <section className="relative w-full min-h-[70vh] md:h-screen overflow-hidden flex items-center justify-center text-center px-4">
          {/* Background Video */}
          <AutoPlayVideo
            src="/videos/video.mp4"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Overlay Content (Text & Button) */}
          <div className="relative z-10 text-white px-4 md:px-6">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
              Welcome to Our Website
            </h1>
            <p className="text-sm sm:text-lg md:text-2xl mt-2 sm:mt-4 drop-shadow-lg">
              Experience innovation like never before.
            </p>
            <button className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm sm:text-lg font-medium rounded-full shadow-lg transition">
              Get Started
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-white clip-triangle"></div>
        </section>

        {/* Trusted Customers Section */}
        <section className="py-12 bg-white">
          {/* Section Title */}
          <div className="container mx-auto text-center px-4">
            
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Trusted by Thousands of Customers Worldwide
            </h1>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-6 sm:mt-8 px-4 md:px-6 place-items-center">
            <div className="relative w-24 h-12 sm:w-40 sm:h-20">
              <Image src="/images/ford.png" alt="Ford" layout="fill" objectFit="contain" />
            </div>
            <div className="relative w-24 h-12 sm:w-40 sm:h-20">
              <Image src="/images/nasa.png" alt="NASA" layout="fill" objectFit="contain" />
            </div>
            <div className="relative w-24 h-12 sm:w-40 sm:h-20">
              <Image src="/images/tesla.png" alt="Tesla" layout="fill" objectFit="contain" />
            </div>
          </div>
        </section>
        
        {/* Features Section */}  
        <section>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
              Our Features
            </h1>
          </div>
         </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
