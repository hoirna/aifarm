import { FC } from "react";
import Image from "next/image";
const ResourcePage: FC = () => {
  return (
    <div className="bg-gray-50 ">
       {/* Image Section */}
            <section className="bg-gray-50">
              <div className="w-full relative h-[600px]">
                <Image
                  src="/assets/images/feature2.png"
                  alt="Innovation Lab showcasing robotics and automation technology"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={100}
                  priority
                />
              </div>
            </section>
      <section>
        <h1>1</h1>
      </section>
    </div>
  );
};

export default ResourcePage;