'use client';
import { useEffect, useRef } from "react";
import { PlayArrow as PlayArrowIcon } from '@mui/icons-material';

interface AutoPlayVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

const AutoPlayVideo: React.FC<AutoPlayVideoProps> = ({ src, poster, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log("AutoPlayVideo component mounted");
    const video = videoRef.current;
    if (video) {
      console.log("Video element found, trying to play...");
      video.play().catch(error => console.error("Autoplay failed:", error));
    } else {
      console.error("Video element not found");
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={className}
      aria-label="Background video"
      suppressHydrationWarning
    />
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-[70vh] md:h-screen overflow-hidden flex items-center justify-center text-center px-4 bg-gradient-to-r from-yellow-200 via-amber-300 to-orange-200">
      <AutoPlayVideo
        src="/videos/video.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="relative z-10 text-white px-4 md:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-xl">
          <div className="space-x-4">
            <span className="text-[#F9EF19]">AI FARM</span>
            <span className="text-white">ROBOTICS FACTORY</span>
          </div>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 drop-shadow-lg">
          Experience innovation like never before.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 sm:mt-8 justify-center">
          <button
            className="px-8 py-3 bg-[#F9EF19]  text-black text-lg font-semibold rounded-full shadow-2xl transform hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-[#F9EF19] focus:ring-offset-1"
            aria-label="Get Explore"
          >
            Get Explore
          </button>
          <div className="flex items-center gap-2 text-lg sm:text-xl text-gray-100 font-semibold">
            <span>Watch Video</span>
            <button
              className="px-6 py-2 bg-teal-400 hover:bg-teal-500 text-white rounded-full shadow-lg transform hover:scale-110 transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
              aria-label="Watch Video"
            >
              <PlayArrowIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-white clip-triangle z-0"></div>
    </div>
  );
};
export default HeroSection;