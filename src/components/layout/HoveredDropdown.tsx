import React from "react";

interface SectionItem {
  label: string;
  link: string;
}

interface Section {
  title: string;
  items: SectionItem[];
}

interface DropdownProps {
  title: string;
  sections?: Section[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, sections = [] }) => {
  return (
    <div className="dropdown flex flex-row items-start justify-center space-x-16  p-6 bg-gray-100 shadow-md h-auto">
      {/* Title Section */}
      <div className="sticky font-bold text-xl text-gray-900 space-x-10 mt-12">
        {title}
      </div>

      {/* Dynamic Sections */}
      {sections.length > 0 ? (
        sections.map((section, index) => (
          <div key={index} className="space-y-4 relative">
            {/* Section Title (Sticky) */}
            <div className="font-bold text-gray-900 sticky top-6  z-20">
              {section.title}
            </div>

            {/* Scrollable Items */}
            {section.items.length > 0 && (
              <div className="overflow-y-auto max-h-64">
                <ul className="space-y-4 font-medium text-gray-500">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.link}
                        className="text-gray-700 hover:text-yellow-600 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-center py-12">No sections available</p>
      )}
    </div>
  );
};

export default Dropdown;