import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../style/z_style.css';

export default function SubscriptionSettings() {
  const navigate = useNavigate();

  return (
    <div className="z_sett_container">
      <div className="z_sett_sub_header">
        <button className="z_sett_back_btn" onClick={() => navigate('/profile')}>
          <FaArrowLeft />
        </button>
        <h2 className="z_sett_sub_title">Subscription & Purchases</h2>
      </div>
      <div className="z_sett_sub_content">
        <p>Currently No Active Plan</p>
      </div>
    </div>
  );
}
