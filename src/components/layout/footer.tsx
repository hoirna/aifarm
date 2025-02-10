import Image from "next/legacy/image";
import Link from "next/link";
import { footerLinks } from "@/components/constants/Index";
import {
  Facebook,
  Instagram,
  YouTube,
  LinkedIn,
  Telegram,
} from "@mui/icons-material";

const FooterSection: React.FC<{
  title: string;
  links: { name: string; href: string }[];
}> = ({ title, links }) => (
  <div className="space-y-3">
    <h4 className="text-lg font-semibold text-[#F9EF19]">{title}</h4>
    <div className="space-y-2">
      {links && links.length > 0 ? (
        links.map((link, index) => (
          <p key={index} className="text-sm text-gray-300">
            <Link href={link.href} className="hover:underline text-gray-300">
              {link.name}
            </Link>
          </p>
        ))
      ) : (
        <p className="text-sm text-gray-300">No links available</p>
      )}
    </div>
  </div>
);

const SocialIcon = ({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ElementType;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-300 hover:text-[#F9EF19] transition"
  >
    <Icon sx={{ fontSize: 24 }} />
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 py-12 gap-8">
        <div className="space-y-6">
          <div className="flex items-center">
            <Image
              src="/assets/images/aifarm.png"
              alt="AI Farm Logo"
              width={70}
              height={65}
            />
            <div className="ml-3">
              <h2 className="text-xl font-semibold text-[#F9EF19]">AI FARM</h2>
              <p className="text-gray-300 font-medium">ROBOTICS FACTORY</p>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-[#F9EF19]">Location</h4>
            <p className="text-sm text-gray-300">
              Factory #3, Rd. 39D, St. 50M
            </p>
            <p className="text-sm text-gray-300">
              Anlungkong Village, Dangkhor Commune
            </p>
            <p className="text-sm text-gray-300">
              Preysar District, Phnom Penh, Cambodia
            </p>
          </div>
          <div className="w-full h-96 md:h-48">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.9265733023008!2d104.86941237481602!3d11.485221988709945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095ba203ba2c87%3A0xd97e7c157cf191de!2sAI%20FARM%20Robotics%20Factory!5e0!3m2!1sen!2skh!4v1737967017521!5m2!1sen!2skh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 px-12 ">
          {footerLinks.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        <div className="space-y-6 px-12">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#F9EF19]">
              Subscribe to Our Newsletter
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 text-gray-800 rounded-l-md focus:outline-none"
              />
              <button className="bg-[#F9EF19] text-gray-800 p-2 rounded-r-md hover:bg-yellow-500 transition">
                Subscribe
              </button>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-[#F9EF19]">Contact</h4>
          <p className="text-sm text-gray-300">Phone: +123 456 7890</p>
          <p className="text-sm text-gray-300">Email: info@aifarm.dev</p>
          <h4 className="text-lg font-semibold text-[#F9EF19]">
            Work Schedule
          </h4>
          <p className="text-md text-gray-300">
            Monday - Friday: 8:00 AM - 5:00 PM
          </p>
          <p className="text-md text-gray-300">Saturday: 8:00 AM - 12:00 PM</p>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-[#F9EF19]">Follow Us</h4>
            <div className="flex space-x-4">
              <SocialIcon
                href="https://facebook.com"
                label="Facebook"
                Icon={Facebook}
              />
              <SocialIcon
                href="https://instagram.com"
                label="Instagram"
                Icon={Instagram}
              />
              <SocialIcon
                href="https://youtube.com"
                label="YouTube"
                Icon={YouTube}
              />
              <SocialIcon
                href="https://linkedin.com"
                label="LinkedIn"
                Icon={LinkedIn}
              />
              <SocialIcon
                href="https://telegram.com"
                label="Telegram"
                Icon={Telegram}
              />
            </div>
          </div>

          {/* Subscription Section */}
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} AI Farm Robotics Factory. All Rights
        Reserved.
      </div>
    </footer>
  );
}
