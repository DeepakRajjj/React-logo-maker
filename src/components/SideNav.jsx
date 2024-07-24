// SideNav.jsx
import React, { useState } from 'react';
import { PencilRuler, Shield, Image } from 'lucide-react';

const SideNav = ({ setSelectedIndex }) => {
  const menuList = [
    {
      id: 1,
      name: 'Icon',
      icon: PencilRuler,
    },
    {
      id: 2,
      name: 'Background',
      icon: Image,
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: Shield,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleMenuItemClick = (index) => {
    setActiveIndex(index);
    setSelectedIndex(index); // Update the selected index in the parent component
  };

  return (
    <div className="border shadow-sm h-screen">
      {menuList.map((menu, index) => (
        <h2
          onClick={() => handleMenuItemClick(index)} // Call handleMenuItemClick when clicked
          className={`p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer flex items-center gap-2 hover:bg-primary hover:text-white ${activeIndex === index && 'bg-primary text-white'}`}
          key={index}
        >
          <menu.icon className="mr-2" />
          {menu.name}
        </h2>
      ))}
    </div>
  );
};

export default SideNav;
