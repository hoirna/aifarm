import { FC } from "react";
import Solution from "@/components/Solutions";
import Image from "next/image";
const SolutionPage: FC = () => {
  return (
    <div className="bg-gray-50">
            {/* Hero Image Section */}
            <section className="relative w-full h-[600px] bg-gray-50">
              <Image
                src="/assets/images/solution.jpg"
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
      
      <section className="py-24 px-6 bg-yellow-300 text-gray-900 text-center shadow-lg">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Want to see our products in action?
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            If you are interested in learning more about AI Farm or our robots,
            explore our resources or reach out to us today.
          </p>
          <a
            href="/resources"
            className="inline-block mt-6 px-8 py-3 text-black text-lg font-medium hover:underline"
          >
            View Case Studies →
          </a>
        </div>
      </section>

      <section>
        <Solution showCTA={false} />
      </section>
    </div>
  );
};

export default SolutionPage;
