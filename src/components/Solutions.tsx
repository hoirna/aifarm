import Image from 'next/legacy/image';
import Link from 'next/link';

const Solution: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Section Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-left mb-12 px-4">
        Solution For The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9EF19] to-yellow-400">Real World</span>
      </h1>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4 px-4">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-48 h-48 mb-6 flex items-center justify-center">
            <Image src="/images/feature1.png" alt="Feature 1" width={180} height={180} className="object-contain" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Picking Up</h2>
          <p className="text-gray-600 mb-4">Efficiently pick up items with precision and ease.</p>
          <Link href="/features/picking-up" className="text-yellow-400 font-semibold ">
            Learn More →
          </Link>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-48 h-48 mb-6 flex items-center justify-center">
            <Image src="/images/feature2.png" alt="Feature 2" width={180} height={180} className="object-contain" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Putting Down</h2>
          <p className="text-gray-600 mb-4">Carefully place items in the right location every time.</p>
          <Link href="/features/putting-down" className="text-yellow-400 font-semibold ">
            Learn More →
          </Link>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-48 h-48 mb-6 flex items-center justify-center">
            <Image src="/images/feature3.png" alt="Feature 3" width={180} height={180} className="object-contain" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Safety and Care</h2>
          <p className="text-gray-600 mb-4">Ensure safety and precision in all handling tasks.</p>
          <Link href="/features/safety-and-care" className="text-yellow-400 font-semibold ">
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solution;