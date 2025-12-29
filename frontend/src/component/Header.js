import React, { useState } from 'react';
import { FaHome, FaSearch, FaSignOutAlt, FaUser, } from 'react-icons/fa';
import { PiPopcorn } from 'react-icons/pi';
import { MdOutlineSchedule } from 'react-icons/md';
import { RiMovie2Line } from 'react-icons/ri';
import '../style/z_style.css'; // Corrected import path

export default function Header() {
  const [activeItem, setActiveItem] = useState('Home');

  const menuItems = [
    { name: 'HOME', icon: <FaHome />, path: '/' },
    { name: 'SEARCH', icon: <FaSearch />, path: '/search' },
    { name: 'SCHEDULE', icon: <MdOutlineSchedule />, path: '/schedule' },
    { name: 'SERIES', icon: <RiMovie2Line />, path: '/series' },
    { name: 'MY SPACE', icon: <FaUser />, path: '/profile' },

  ];

  return (
    <div className="z_header">
      <div className="z_logo">
        logo
      </div>
      <div className="z_menu">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`z_menu-item ${activeItem === item.name ? 'z_active' : ''}`}
            onClick={() => setActiveItem(item.name)}
          >
            <div className='d-flex justify-content-center align-items-center'>{item.icon}</div>
            <span className="z_menu-item-name">{item.name}</span>
          </div>
        ))}
      </div>
      {/* LOGOUT */}
      <div className="z_logout">
        <div className="z_menu-item z_logout-item">
          <div className='d-flex justify-content-center align-items-center py-2'><FaSignOutAlt /></div>
          <span className="z_menu-item-name">LOG OUT</span>
        </div>
      </div>
    </div>
  );
}
