import AutoPlayVideo from "@/components/HeroSection";
import TrustedCompany from "@/components/TrustBrands";
import Solution from "@/components/Solutions";
import ProductShowcase from "@/components/ProductShowcase";
import LatestNews from "@/components/LatestNews";
import InnovationLab from "@/components/InnovationLab";
import FeaturedResources from "@/components/FeaturedResources";
const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <AutoPlayVideo />
        <TrustedCompany />
        <ProductShowcase />
        <Solution />
        <LatestNews />
        <InnovationLab />
        <FeaturedResources />
      </main>
    </div>
  );
};
export default Home;
