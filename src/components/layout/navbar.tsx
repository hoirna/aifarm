import Link from "next/link";
import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Dropdown from "../HoveredDropdown";
import { dropdownData } from "@/components/data/DropdownData";

interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  links?: NavLink[];
}

const NavLinkItem: React.FC<
  NavLink & {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  }
> = ({ href, label }) => (
  <Link
    href={href}
    className="relative text-gray-700 hover:text-yellow-500 transition-all duration-300 ease-in-out after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-500 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
  >
    {label}
  </Link>
);

const Navbar: React.FC<NavbarProps> = ({ links = [] }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMouseOverNavItem, setIsMouseOverNavItem] = useState(false);
  const [isMouseOverDropdown, setIsMouseOverDropdown] = useState(false);

  const navLinks =
    links.length > 0
      ? links
      : [
          { href: "/products", label: "Products" },
          { href: "/solutions", label: "Solutions" },
          { href: "/industries", label: "Industries" },
          { href: "/labs", label: "InnovationLabs" },
          { href: "/company", label: "Company" },
          { href: "/partners", label: "Partners" },
          { href: "/resources", label: "Resources" },
        ];

  
        const getDropdownData = () => {
          if (!hoveredItem) return null;
          const normalizedKey = hoveredItem.replace(/\s+/g, ""); // Remove spaces
          return dropdownData[normalizedKey as keyof typeof dropdownData] || null;
        };
        

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isMouseOverNavItem || isMouseOverDropdown) {
      setIsDropdownVisible(true);
    } else {
      timeout = setTimeout(() => {
        if (!isMouseOverNavItem && !isMouseOverDropdown) {
          setIsDropdownVisible(false);
          setHoveredItem(null);
        }
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [isMouseOverNavItem, isMouseOverDropdown, hoveredItem]);

  return (
    <header className="bg-white shadow-md py-5 px-8 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/images/aifarm.png" alt="Logo" width={65} height={60} />
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-[#F9EF19]">
              AI FARM
            </span>
            <span className="text-gray-900 font-semibold">
              ROBOTICS FACTORY
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 font-medium">
          {navLinks.map(({ href, label }) => (
            <div
              key={href}
              onMouseEnter={() => {
                setHoveredItem(label);
                setIsMouseOverNavItem(true);
              }}
              onMouseLeave={() => {
                setIsMouseOverNavItem(false);
              }}
              className="relative group"
            >
              <NavLinkItem href={href} label={label} />
            </div>
          ))}
        </nav>

        {/* Contact Sales Button */}
        <div className="hidden lg:block">
          <Link
            href=""
            className="bg-[#F9EF19] text-black font-medium py-3 px-4 rounded-full hover:bg-yellow-300 transition"
          >
            Contact Sales
          </Link>
        </div>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {hoveredItem && isDropdownVisible && getDropdownData() && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full max-w-[1600px] mx-auto z-50 bg-white shadow-lg"
            onMouseEnter={() => setIsMouseOverDropdown(true)}
            onMouseLeave={() => setIsMouseOverDropdown(false)}
          >
            <Dropdown
              title={getDropdownData()?.title || ""}
              sections={getDropdownData()?.sections || []}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;