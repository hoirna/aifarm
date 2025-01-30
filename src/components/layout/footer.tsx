import Image from "next/image";
import { Facebook, Instagram, YouTube, LinkedIn, Telegram } from "@mui/icons-material"; // MUI Icons

// Footer Section Component
interface FooterSectionProps {
  title: string;
  items: string[];
  itemLinks?: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  items,
  itemLinks,
}) => (
  <div className="space-y-3">
    <h4 className="text-lg font-semibold text-yellow-400">{title}</h4>
    <div className="space-y-2">
      {items.map((item, index) => (
        <p key={index} className="text-sm text-gray-300">
          {itemLinks?.[index] ? (
            <a
              href={itemLinks[index]}
              className="hover:underline text-yellow-500"
            >
              {item}
            </a>
          ) : (
            item
          )}
        </p>
      ))}
    </div>
  </div>
);

// Social Icon Component using MUI Icons
const SocialIcon = ({
  href,
  label,
  Icon,
  size = 24,
}: {
  href: string;
  label: string;
  Icon: React.ElementType; // Correct type for the MUI icon component
  size?: number;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-yellow-500 hover:text-yellow-600 transition"
  >
    <Icon sx={{ fontSize: size }} /> {/* Correct usage of the MUI Icon */}
  </a>
);


export default function Footer() {
  const footerLinks = [
    {
      title: "Navigation",
      items: [
        "Products",
        "Solutions",
        "Industries",
        "Innovation Labs",
        "Company",
        "Resources",
      ],
    },
    {
      title: "Helpful Links",
      items: ["Consulting", "Engineering", "Support", "Training"],
    },
    {
      title: "Support",
      items: ["FAQ", "Documentation", "Contact", "Feedback"],
    },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms of Service", "License"],
      itemLinks: [
        "/privacy",
        "/terms",
        "/license",
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info & Location */}
        <div className="space-y-6">
          <div className="flex items-center">
            <Image
              src="/images/aifarm.png"
              alt="AI Farm Logo"
              width={65}
              height={65}
            />
            <div className="ml-3">
              <h2 className="text-xl font-semibold text-yellow-400">AI FARM</h2>
              <p className="text-gray-300 font-medium">ROBOTICS FACTORY</p>
            </div>
          </div>

          <FooterSection
            title="Location"
            items={[
              "Factory #3, Rd. 39D, St. 50M",
              "Anlungkong Village, Dangkhor Commune",
              "Preysar District, Phnom Penh",
              "Cambodia",
            ]}
          />

          {/* Embedded Map */}
          <div className="w-full h-64 md:h-48">
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

        {/* Navigation & Links */}
        <div className="grid grid-cols-2 gap-6 px-12">
          {footerLinks.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>

        {/* Contact & Subscription */}
        <div className="space-y-6 px-12">
          {/* Subscription Form */}
          <div>
            <div>
              <h4 className="text-lg font-semibold text-yellow-400">
                Subscribe
              </h4>
              <p className="text-sm text-gray-300 mb-3">
                Get the latest updates and news
              </p>
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="border border-yellow-500 text-sm px-4 py-2 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <FooterSection
            title="Contact"
            items={["Phone: +123 456 7890", "Email: info@aifarm.dev"]}
          />

          {/* Work Schedule */}
          <FooterSection
            title="Work Schedule"
            items={[
              "Monday - Friday: 8:00 AM - 5:00 PM",
              "Saturday: 8:00 AM - 12:00 PM",
            ]}
          />

          {/* Social Media */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-yellow-400">Follow Us</h4>
            <div className="flex space-x-4">
            <SocialIcon
                href="https://facebook.com"
                label="Telegram"
                Icon={Telegram}/>
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
              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} AI Farm Robotics Factory. All Rights
        Reserved.
      </div>
    </footer>
  );
}
