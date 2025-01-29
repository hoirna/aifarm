import Link from 'next/link';
import Image from 'next/image';
import { Menu, Close } from '@mui/icons-material';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/products', label: 'Products' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/industries', label: 'Industries' },
    { href: '/labs', label: 'Innovation Labs' },
    { href: '/company', label: 'Company' },
    { href: '/resources', label: 'Resources' },
  ];

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <Image src="/images/aifarm.png" alt="Logo" width={65} height={65} />
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-yellow-400">AI FARM</span>
            <span className="text-gray-600 font-medium">ROBOTICS FACTORY</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-gray-700 hover:text-yellow-500 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-500 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact Sales Button */}
        <div className="hidden lg:block">
          <Link
            href=""
            className="bg-yellow-400 text-white py-2 px-6 rounded-full hover:bg-yellow-500 transition"
          >
            Contact Sales
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden text-gray-700 focus:outline-none">
          {isMenuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden overflow-hidden bg-white shadow-md px-6 ${isMenuOpen ? 'py-4' : 'py-0'}`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-2 text-gray-700 hover:text-yellow-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href=""
            className="block text-center bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition"
          >
            Contact Sales
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
