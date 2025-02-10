import { FC } from "react";
import Image from "next/image";

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  reverse?: boolean;
}

const FeatureSection: FC<FeatureSectionProps> = ({ title, description, imageSrc, href, reverse = false }) => {
  return (
    <div
      className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center space-x-8 gap-8 p-8 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300`}
    >
      <div className="w-full md:w-1/2 relative h-72">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-3xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="mt-4 text-lg text-gray-700">{description}</p>
        <a
          href={href}
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

const ResourcePage: FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Image Section */}
      <section className="relative w-full h-[600px] bg-gray-50">
        <Image
          src="/assets/images/resource.jpg"
          alt="Innovation Lab showcasing robotics and automation technology"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl font-bold">Explore Our Resources</h1>
          <p className="mt-4 text-xl">Discover useful documents, tools, and guides.</p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-left mb-8">Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Resource Item 1 */}
          <div className="bg-white shadow-md overflow-hidden rounded-lg">
            <div className="relative w-full h-48">
              <Image
                src="/assets/images/background02.jpg"
                alt="Resource 1"
                fill
                style={{ objectFit: "cover" }}
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Blog</h3>
              <p className="mt-2 text-gray-600">A brief description of the resource goes here, explaining its purpose and relevance.</p>
              <a
                href="/assets/resources/resource1.pdf"
                className="mt-4 inline-block text-blue-600 hover:underline"
                download
              >
                Download
              </a>
            </div>
          </div>

          {/* Resource Item 2 */}
          <div className="bg-white shadow-md overflow-hidden rounded-lg">
            <div className="relative w-full h-48">
              <Image
                src="/assets/images/background01.jpg"
                alt="Resource 2"
                fill
                style={{ objectFit: "cover" }}
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Video</h3>
              <p className="mt-2 text-gray-600">Another description goes here, explaining what this resource is about and how to use it.</p>
              <a
                href="/assets/resources/resource2.pdf"
                className="mt-4 inline-block text-blue-600 hover:underline"
                download
              >
                Download
              </a>
            </div>
          </div>

          {/* Resource Item 3 */}
          <div className="bg-white shadow-md overflow-hidden rounded-lg">
            <div className="relative w-full h-48">
              <Image
                src="/assets/images/background03.jpg"
                alt="Resource 3"
                fill
                style={{ objectFit: "cover" }}
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">News</h3>
              <p className="mt-2 text-gray-600">A final description of the resource, highlighting its key features or use cases.</p>
              <a
                href="/assets/resources/resource3.pdf"
                className="mt-4 inline-block text-blue-600 hover:underline"
                download
              >
                Download
              </a>
            </div>
          </div>
        </div>

        {/* See All Articles Button */}
        <div className="mt-12 text-center">
          <a
            href="/articles"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            See All Articles
          </a>
        </div>
      </section>

      {/* Additional Feature Sections */}
      <section className="bg-gray-100 py-16">
        <div className="space-y-16">
          <FeatureSection
            title="Events"
            description="Join our events to explore the latest in robotics, AI, and automation technology. Stay connected with our innovations."
            imageSrc="/assets/images/product01.png"
            href="/careers"
            reverse={true}
          />
          <FeatureSection
            title="Mini-dynamo One"
            description="Discover the latest version of the Mini-dynamo One, a cutting-edge robotics solution for automation and AI-driven tasks."
            imageSrc="/assets/images/product02.png"
            href="/news"
          />
        </div>
      </section>

      <section className="py-24 px-6 bg-yellow-300 text-gray-900 text-center shadow-lg">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Want to be part of us??
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            If you are interested in learning more about AI Farm or our robots, explore our resources or reach out to us today.
          </p>
          <a
            href="/resources"
            className="inline-block mt-6 px-8 py-3 text-black text-lg font-medium hover:underline"
          >
            Connect with us →
          </a>
        </div>
      </section>
    </div>
  );
};

export default ResourcePage;
