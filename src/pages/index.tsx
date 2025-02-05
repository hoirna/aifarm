
import Footer from "@/components/layout/Footer";
import AutoPlayVideo from "../components/HeroSection";
import TrustedCompany from "../components/TrustBrands";
import Solution from "../components/Solutions";
import ProductShowcase from "@/components/ProductShowcase";
import Navbar from "@/components/layout/Navbar";
const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        <AutoPlayVideo />
        <TrustedCompany />
        <ProductShowcase />
        <Solution />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
