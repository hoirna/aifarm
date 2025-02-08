import { FC } from "react";
import ProductSlider from "@/components/ProductSlider";
import Image from "next/image";
const ProductPage: FC = () => {
  return (
    <div className="bg-gray-50">
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

      {/* Product Description Section */}
      <section className="py-10 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          This is Product
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover our latest innovation that pushes the boundaries of
          technology, designed to make your life easier and more efficient. With
          cutting-edge features and unparalleled performance, this product is
          perfect for both personal and professional use.
        </p>
      </section>

      {/* Product Slider Section */}
      <section className="py-10 px-4">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Explore Our Related Products
        </h3>
        <ProductSlider />
      </section>

      <section className="py-24 px-6 bg-yellow-300 text-gray-900 text-center shadow-lg">
        <div className=" max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Want to see our products in action?
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            If you are interested in learning more about AI Farm or our robots,
            explore our resources or reach out to us today.
          </p>
          <a
            href="/resources"
            className="inline-block mt-6 px-8 py-3   text-black text-lg font-medium hover:underline"
          >
            Contact Sales →
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
