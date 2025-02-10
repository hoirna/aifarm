import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const SectionHeader: FC<{ title: string; description?: string }> = ({ title, description }) => (
  <div className="mb-12 text-center">
    <h1 className="text-5xl font-extrabold text-gray-900">{title}</h1>
    {description && <p className="mt-4 text-xl text-gray-700">{description}</p>}
  </div>
);

const FeatureSection: FC<{ title: string; description: string; imageSrc: string; href: string; reverse?: boolean }> = ({
  title,
  description,
  imageSrc,
  href,
  reverse = false,
}) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center p-10 transition duration-300` }>
    <Image src={imageSrc} alt={title} width={450} height={350} className="rounded-lg object-cover" />
    <div className="mt-8 md:mt-0 md:mx-8 text-center md:text-left">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <p className="mt-3 text-lg text-gray-700">{description}</p>
      <Link href={href} className="mt-5 inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300">
        Learn More →
      </Link>
    </div>
  </div>
);

const VisionMissionObjective: FC = () => (
  <div className="mt-16 bg-gray-100 p-10 rounded-lg">
    <SectionHeader title="About Us" />
    <div className="grid md:grid-cols-3 gap-8">
      {[ 
        { title: "Vision", text: "Revolutionizing agriculture through robotics and AI." },
        { title: "Mission", text: "Creating sustainable and efficient farming solutions." },
        { title: "Objective", text: "Empowering farmers with cutting-edge technology." }
      ].map(({ title, text }) => (
        <div key={title} className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="mt-3 text-lg text-gray-700">{text}</p>
        </div>
      ))}
    </div>
  </div>
);

const CompanyPage: FC = () => {
  return (
    <div>
         {/* Hero Image Section */}
         <section className="relative w-full h-[600px] bg-gray-50">
           <Image
             src="/assets/images/company.jpg"
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
   

      {/* Main Content Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="space-y-16">
          <FeatureSection
            title="Wanna be part of us?"
            description="If you are interested in learning more about AI Farm or our robots, explore our resources and reach out."
            imageSrc="/assets/images/careers.jpg"
            href="/careers"
          />
          <FeatureSection
            title="News"
            description="Stay updated with the latest news and developments at AI Farm."
            imageSrc="/assets/images/careers.jpg"
            href="/news"
            reverse={true}
          />
        </div>

        {/* Vision, Mission, and Objective Section */}
        <VisionMissionObjective />
      </section>
    </div>
  );
};

export default CompanyPage;
