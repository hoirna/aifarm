import { useEffect, useRef } from "react";

interface AutoPlayVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

const AutoPlayVideo: React.FC<AutoPlayVideoProps> = ({ src, poster, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => console.error("Autoplay failed", error));
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
      className={`rounded-lg shadow-lg ${className}`}
    />
  );
};

export default AutoPlayVideo;
