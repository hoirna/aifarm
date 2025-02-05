import Image from "next/legacy/image";

interface Brand {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const brands: Brand[] = [
  { src: "/images/ford.png", alt: "Ford", width: 160, height: 80 },
  { src: "/images/nasa.png", alt: "NASA", width: 110, height: 70 },
  { src: "/images/tesla.png", alt: "Tesla", width: 140, height: 80 },
  // Add more brands here
];

const BrandLogo: React.FC<Brand> = ({ src, alt, width, height }) => (
  <div className="flex items-center justify-center w-40 h-24 sm:w-52 sm:h-28 rounded-lg p-4 ">
    <Image
      src={src}
      alt={alt}
      layout="intrinsic"
      width={width}
      height={height}
      loading="lazy"
      aria-label={alt}
    />
  </div>
);

const TrustedBrands: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      {/* Section Title */}
      <div className="container mx-auto text-center px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Trusted by Thousands of Customers Worldwide
        </h1>
      </div>
      {/* Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mt-6 sm:mt-8 px-4 md:px-6 place-items-center">
        {brands.map((brand, index) => (
          <BrandLogo key={index} {...brand} />
        ))}
      </div>
    </div>
  );
};

export default TrustedBrands;