import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react'; // Import icons from lucide-react

const CustomDropdown = ({ title, items, icon: IconComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative min-w-[202px]  w-full mb-4">
      {/* Dropdown Button */}
      <button
        onClick={handleToggle}
        className={`w-full flex items-center justify-between px-4 py-2 ${isOpen ? 'rounded-t-lg' : 'rounded-lg'} bg-red-gradient text-white font-orbitron text-sm shadow-md hover:from-red-700 hover:to-purple-700 transition-all duration-300`}
      >
        <span className="flex items-center text-nowrap gap-2">
          {IconComponent && <IconComponent size={16} />}
          {selectedItem || title}
        </span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[28px] z-10 w-full mt-2 rounded-b-lg bg-black text-white shadow-lg">
          <ul className="p-0 m-0">
            {items.map((item, index) => (
              <li

                key={index}
                onClick={() => handleSelect(item)}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center justify-between"
              >
                <span className='whitespace-nowrap'>{item}</span>
                {selectedItem === item && <Check size={16} />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;