import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaEdit, FaCrown, FaVideo, FaBell, FaQuestionCircle, FaUser, FaChevronRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/z_style.css';

export default function MySpace() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('Enter you nickname');
  const [isEditing, setIsEditing] = useState(false);
  const uid = '1423903002';

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleNicknameBlur = () => {
    setIsEditing(false);
    if (!nickname.trim()) {
      setNickname('Enter you nickname');
    }
  };

  const handleNicknameKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNicknameBlur();
    }
  };

  const handleNicknameClick = () => {
    setIsEditing(true);
    if (nickname === 'Enter you nickname') {
      setNickname('');
    }
  };

  const settingsItems = [
    {
      id: 'subscription',
      icon: <FaCrown />,
      title: 'Subscription & Purchases',
      subtitle: 'Currently No Active Plan',
      path: '/settings/subscription'
    },
    {
      id: 'streaming',
      icon: <FaVideo />,
      title: 'Streaming Quality',
      subtitle: 'Video Settings',
      path: '/settings/streaming'
    },
    {
      id: 'notifications',
      icon: <FaBell />,
      title: 'Notifications',
      subtitle: 'preferences for alerts',
      path: '/settings/notifications'
    },
    {
      id: 'help',
      icon: <FaQuestionCircle />,
      title: 'Help & Support',
      subtitle: 'FAQs, Contact us',
      path: '/settings/help',
      badge: '24'
    },
    {
      id: 'about',
      icon: <FaUser />,
      title: 'About',
      subtitle: 'App Version, Terms',
      path: '/settings/about'
    }
  ];

  const handleSettingsClick = (path) => {
    navigate(path);
  };

  return (
    <div className="z_sett_container">
      {/* Header */}
      <div className="z_sett_header">
        <div className="z_sett_header_left">
          <h1 className="z_sett_logo">CRICK.LIVE</h1>
        </div>
        <div className="z_sett_header_right">
          <FaSearch className="z_sett_search_icon" />
        </div>
      </div>

      {/* User Profile Section */}
      <div className="z_sett_profile_card">
        <div className="z_sett_profile_content">
          <div className="z_sett_profile_left">
            <div className="z_sett_avatar">
              <FaUser className="z_sett_avatar_icon" />
            </div>
            <div className="z_sett_profile_info">
              <div className="z_sett_uid">UID : {uid}</div>
              {isEditing ? (
                <input
                  type="text"
                  className="z_sett_nickname_input"
                  value={nickname}
                  onChange={handleNicknameChange}
                  onBlur={handleNicknameBlur}
                  onKeyPress={handleNicknameKeyPress}
                  autoFocus
                />
              ) : (
                <div className="z_sett_nickname" onClick={handleNicknameClick}>
                  {nickname}
                </div>
              )}
            </div>
          </div>
          <div className="z_sett_profile_right">
            <FaEdit size={30} className="z_sett_edit_icon" onClick={() => navigate('/account-settings')} />
          </div>
        </div>
      </div>

      {/* Settings List */}
      <div className="z_sett_list">
        {settingsItems.map((item) => (
          <div
            key={item.id}
            className="z_sett_item"
            onClick={() => handleSettingsClick(item.path)}
          >
            <div className="z_sett_item_left">
              <div className="z_sett_item_icon">
                {item.icon}
              </div>
              <div className="z_sett_item_text">
                <div className="z_sett_item_title">{item.title}</div>
                <div className="z_sett_item_subtitle">{item.subtitle}</div>
              </div>
            </div>
            <div className="z_sett_item_right">
              {item.badge && (
                <span className="z_sett_badge">{item.badge}</span>
              )}
              <FaChevronRight className="z_sett_arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}