export const dropdownData = {
    Products: {
      title: "PRODUCTS",
      sections: [
        {
          title: "STEM",
          items: [
            { label: "MICRO: BIT", link: "/" },
            { label: "MICRO: NET", link: "/" },
            { label: "MICRO: MO", link: "/" },
          ],
        },
        {
          title: "INDUSTRIES",
          items: [
            { label: "Pick an Place", link: "/" },
            { label: "Box Erector", link: "/" },
            { label: "TrailBox", link: "/" },
          ],
        },
        {
          title: "FOOD & BEVERAGE",
          items: [
            { label: "Cafe Robot", link: "/" },
            { label: "Service Robot", link: "/" },
          ],
        },
      ],
    },
    Solutions: {
      title: "SOLUTIONS",
      sections: [
        {
          title: "INDUSTRIAL AUTOMATION",
          items: [
            { label: "Industrial Robotic System Integration", link: "/" },
            { label: "Warehouse Automation", link: "/" },
            { label: "Mechanical Part Manufacturing", link: "/" },
          ],
        },
        {
          title: "SERVICE AND RETAIL AUTOMATION",
          items: [
            { label: "Restaurant Automation", link: "/" },
            { label: "Automated Kiosk", link: "/" },
          ],
        },
        {
          title: "INNOVATION AND DEVELOPMENT",
          items: [{ label: "Research and Development", link: "/" }],
        },
      ],
    },
    Industries: {
      title: "INDUSTRIES",
      sections: [
        // {
        //   title: "INDUSTRY_X",
        //   items: [
        //     { label: "Sector 1", link: "/" },
        //     { label: "Sector 2", link: "/" },
        //   ],
        // },
        // {
        //   title: "INDUSTRY_Y",
        //   items: [
        //     { label: "Sector A", link: "/" },
        //     { label: "Sector B", link: "/" },
        //   ],
        // },
      ],
    },
    InnovationLabs: {
      title: "INNOVATION LABS",
      sections: [
        {
          title: "Factory",
          items: [
            { label: "AUVx Lab", link: "/" },
            { label: "STEAM Lab", link: "/" },
            { label: "FAB Lab", link: "/" },
          ],
        },
        {
          title: "Software",
          items: [
            { label: "Code Kingdom", link: "/" },
            { label: "Factory Ai", link: "/" },
          ],
        },
      ],
    },
    Company: {
      title: "COMPANY",
      sections: [
        {
          title: "About",
          items: [
            { label: "Careers", link: "/" },
            { label: "News", link: "/" },
            { label: "About us", link: "/" },
          ],
        },
      ],
    },
    Partners: {
      title: "PARTNERS",
      sections: [
        {
          title: "GLOBAL PARTNERS",
          items: [
            { label: "Khamsa Group", link: "/" },
            { label: "DreamsLab", link: "/" },
            { label: "New Found Land", link: "/" },
          ],
        },
        {
          title: "LOCAL PARTNERS",
          items: [
            { label: "Chip Tree", link: "/" },
            { label: "Factory AI", link: "/" },
            { label: "Code Kingdom", link: "/" },
          ],
        },
        {
          title: "UNIVERSITY PARTNERS",
          items: [{ label: "Sunrise Rooster", link: "/" }],
        },
        {
          title: "STATEGIC PARTNERS",
          items: [{ label: "Loaka Cafe", link: "/" }],
        },
      ],
    },
    Resources: {
      title: "RESOURCES",
      sections: [
        {
          title: "Resources",
          items: [
            { label: "Blogs", link: "/" },
            { label: "Events", link: "/" },
            { label: "Videos", link: "/" },
          ],
        },
      ],
    },
  };

  export const newsItems = [
    {
      imageSrc: '/assets/images/product01.png',
      title: 'Picking Up',
      description: 'Efficiently pick up items with precision and ease.',
      link: '/features/picking-up',
      date: 'Feb 5, 2024',
      source: 'Tech News',
    },
    {
      imageSrc: '/assets/images/product02.png',
      title: 'Another News',
      description: 'This is another news item.',
      link: '/features/another-news',
      date: 'Feb 3, 2024',
      source: 'Company Updates',
    },
    {
      imageSrc: '/assets/images/product03.png',
      title: 'Yet Another News',
      description: 'This is yet another news item.',
      link: '/features/yet-another-news',
      date: 'Jan 30, 2024',
      source: 'Industry Trends',
    },
  ];
  
export const solutions = [
  {
    imageSrc: '/assets/images/product01.png',
    title: 'AI-Powered Automation',
    description: 'Businesses use AI to automate workflows, reduce costs, and increase efficiency.',
    link: '/solutions/ai-automation',
  },
  {
    imageSrc: '/assets/images/product02.png',
    title: 'Smart Logistics & Supply Chains',
    description: 'AI-driven logistics optimize routes, reducing delays and improving deliveries.',
    link: '/solutions/smart-logistics',
  },
  {
    imageSrc: '/assets/images/product03.png',
    title: 'Green Energy Revolution',
    description: 'The shift to renewable energy is transforming how we power the world.',
    link: '/solutions/green-energy',
  },
  {
    imageSrc: '/assets/images/product04.png',
    title: 'Robotics in Manufacturing',
    description: 'Advanced robotics enhance precision, efficiency, and production rates.',
    link: '/solutions/robotics',
  },
  {
    imageSrc: '/assets/images/product03.png',
    title: 'Blockchain for Secure Transactions',
    description: 'Decentralized networks ensure security and transparency in digital finance.',
    link: '/solutions/blockchain',
  },
  {
    imageSrc: '/assets/images/product02.png',
    title: 'Blockchain for Secure Transactions',
    description: 'Decentralized networks ensure security and transparency in digital finance.',
    link: '/solutions/blockchain',
  },
];

export const featuredResources = [
  {
    imageSrc: '/assets/images/product01.png',
    title: 'Resource Title 1',
    description: 'This is a description of the first resource.',
    link: '/resource-1',
    category: 'Blog',
  },
  {
    imageSrc: '/assets/images/product02.png',
    title: 'Resource Title 2',
    description: 'This is a description of the second resource.',
    link: '/resource-2',
    category: 'Video',
  
  },
  {
    imageSrc: '/assets/images/product03.png',
    title: 'Resource Title 2',
    description: 'This is a description of the second resource.',
    link: '/resource-2',
    category: 'Video',
  
  },
];

export const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Products", href: "/about" },
      { name: "Solutions", href: "/careers" },
      { name: "Industries", href: "/blog" },
      { name: "InnovationLabs", href: "/press" },
      { name: "Company", href: "/press" },
      { name: "Partners", href: "/press" },
      { name: "Resourses", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help-center" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Policy",
    links: [
      { name: "Help Center", href: "/help-center" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help-center" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
];

export const brands = [
  { src: "/assets/images/ford.png", alt: "Ford", width: 160, height: 80 },
  { src: "/assets/images/nasa.png", alt: "NASA", width: 110, height: 70 },
  { src: "/assets/images/tesla.png", alt: "Tesla", width: 140, height: 80 },
];

export const products = [
  {
    image: "/assets/images/product01.png",
    name: "Product 1",
    description: "High-performance robotic system.",
  },
  {
    image: "/assets/images/product02.png",
    name: "Product 2",
    description: "Advanced AI-driven technology.",
  },
  {
    image: "/assets/images/product03.png",
    name: "Product 3",
    description: "Precision engineering at its best.",
  },
  {
    image: "/assets/images/product04.png",
    name: "Product 4",
    description: "Next-gen automation solution.",
  },
  {
    image: "/assets/images/product01.png",
    name: "Product 5",
    description: "Innovative mechanical design.",
  },
  {
    image: "/assets/images/product02.png",
    name: "Product 5",
    description: "Innovative mechanical design.",
  },
  {
    image: "/assets/images/product03.png",
    name: "Product 5",
    description: "Innovative mechanical design.",
  },
  {
    image: "/assets/images/product04.png",
    name: "Product 5",
    description: "Innovative mechanical design.",
  },
];


// /data/innovationData.ts

export const innovationCards = [
  {
    title: "AUVx LAB",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "See in action →",
    imageSrc: "/assets/images/product01.png",
    imageAlt: "Innovation Lab showcasing robotics and automation technology",
    logoSrc: "/assets/images/aifarm.png",
    logoAlt: "AUVx Lab Logo",
  },
  {
    title: "AUVx LAB",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "See in action →",
    imageSrc: "/assets/images/product02.png",
    imageAlt: "Innovation Lab showcasing robotics and automation technology",
    logoSrc: "/assets/images/aifarm.png",
    logoAlt: "AUVx Lab Logo",
  },
  {
    title: "AUVx LAB",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "See in action →",
    imageSrc: "/assets/images/product03.png",
    imageAlt: "Innovation Lab showcasing robotics and automation technology",
    logoSrc: "/assets/images/aifarm.png",
    logoAlt: "AUVx Lab Logo",
  },
  {
    title: "AUVx LAB",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "See in action →",
    imageSrc: "/assets/images/product04.png",
    imageAlt: "Innovation Lab showcasing robotics and automation technology",
    logoSrc: "/assets/images/aifarm.png",
    logoAlt: "AUVx Lab Logo",
  },
  // Add more card objects here if needed
];

export const partnersData = [
  {
    name: "Partner 1",
    description: "Partner 1 is a leading company in the tech industry, providing innovative solutions.",
    image: "/assets/images/partner.jpg",
    link: "https://partner1.com",
  },
  {
    name: "Partner 2",
    description: "Partner 2 specializes in financial services, offering consulting and strategy.",
    image: "/assets/images/partner.jpg",
    link: "https://partner2.com",
  },
  {
    name: "Partner 3",
    description: "Partner 3 is a global brand known for its contributions to education and research.",
    image: "/assets/images/partner.jpg",
    link: "https://partner3.com",
  },
  {
    name: "Partner 1",
    description: "Partner 1 is a leading company in the tech industry, providing innovative solutions.",
    image: "/assets/images/partner.jpg",
    link: "https://partner1.com",
  },
  {
    name: "Partner 2",
    description: "Partner 2 specializes in financial services, offering consulting and strategy.",
    image: "/assets/images/partner.jpg",
    link: "https://partner2.com",
  },
  {
    name: "Partner 3",
    description: "Partner 3 is a global brand known for its contributions to education and research.",
    image: "/assets/images/partner.jpg",
    link: "https://partner3.com",
  },
];
