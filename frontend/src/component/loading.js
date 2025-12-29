import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/x_style.css';

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/getstart');
    }, 2000);
  }, [navigate]);

  return (
    <div className="x_loader_container">
      {/* <div className="x_loader_circle"></div> */}
      <h1 className="x_loader_text">CRICK<span style={{ color: '#FF4444' }}>.</span>LIVE</h1>
    </div>
  );
}

