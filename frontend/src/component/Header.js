import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaHome, FaSearch, FaSignOutAlt, FaUser } from "react-icons/fa";
import { MdOutlineSchedule } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";

import "../style/z_style.css";

export default function Header() {
  const [activeItem, setActiveItem] = useState("HOME");
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();


  const menuItems = [
    { name: "HOME", icon: <FaHome />, path: "/main" },
    { name: "SEARCH", icon: <FaSearch />, path: "/search" },
    { name: "SCHEDULE", icon: <MdOutlineSchedule />, path: "/schedule" },
    { name: "SERIES", icon: <RiMovie2Line />, path: "/series" },
    { name: "MY SPACE", icon: <FaUser />, path: "/profile" },
  ];

  const handleNavigation = (item) => {
    setActiveItem(item.name);
    setMenuOpen(false); // close menu on click
    navigate(item.path);
  };


  return (
    <div className="z_header">
      {/* LOGO */}
      <div className="z_logo" onClick={() => navigate("/")}>
        LOGO
      </div>

      {/* MENU */}
      <div className="z_menu">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`z_menu-item ${activeItem === item.name ? "z_active" : ""
              }`}
            onClick={() => handleNavigation(item)}
          >
            <div className="d-flex justify-content-center align-items-center">
              {item.icon}
            </div>
            <span className="z_menu-item-name">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* LOGOUT */}
      <div className="z_logout">
        <div
          className="z_menu-item z_logout-item"
          onClick={() => setShowLogoutDialog(true)}
        >
          <div className="d-flex justify-content-center align-items-center py-2">
            <FaSignOutAlt />
          </div>
          <span className="z_menu-item-name">LOG OUT</span>
        </div>
      </div>

      {showLogoutDialog && (
        <div className="z_logout_overlay">
          <div className="z_logout_dialog">

            {/* VECTOR ICON */}
            <div className="z_logout_icon">
              <FaSignOutAlt />
            </div>

            <h5>Confirm Logout</h5>
            <p>Are you sure you want to log out?</p>

            <div className="z_logout_actions">
              <button
                className="z_btn_cancel"
                onClick={() => setShowLogoutDialog(false)}
              >
                Cancel
              </button>

              <button
                className="z_btn_logout"
                onClick={() => navigate("/login")}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}