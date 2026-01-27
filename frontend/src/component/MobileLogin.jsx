import React, { useState, useEffect } from "react";
import { FaMobileAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/d_style.css";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

const MobileLogin = () => {
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/profile');
    }
  }, [navigate]);

  const handleChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, "");

    // limit to 10 digits
    if (value.length > 10) return;

    setMobile(value);
    setError(""); // Clear error when user types
  };

  const isValid = mobile.length === 10;

  const handleContinue = async () => {
    if (!isValid) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/auth/sendOtp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mobileNo: mobile })
      });

      const data = await response.json();

      if (data.success) {
        // Store mobile number for OTP verification
        localStorage.setItem('mobileNo', mobile);
        
        // If OTP is in console (Twilio failed), show it
        if (!data.smsSent && data.otpInConsole) {
          console.log('OTP (Twilio failed):', data.otpInConsole);
          alert(`OTP sent to console: ${data.otpInConsole}`);
        }
        
        navigate("/verify-otp");
      } else {
        setError(data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error('Error sending OTP:', err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="curved-login-page">
      <div className="curved-card">
        <div className="curved-row">

          {/* LEFT */}
          <div className="curved-left"></div>

          {/* RIGHT */}
          <div className="curved-right">
            <div className="login-form">
              <h3>Welcome Back</h3>
              <p>Login using your mobile number</p>

              <label className="form-label text-light">
                Mobile Number <span style={{ color: "red" }}>*</span>
              </label>

              <div className="input-wrapper mb-3">
                <span className="country-code">+91</span>
                <FaMobileAlt className="me-2 text-secondary" />
                <input
                  type="tel"
                  className="mobile-input"
                  placeholder="00000 00000"
                  value={mobile}
                  inputMode="numeric"
                  onChange={handleChange}
                />
              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <div className="alert alert-danger" style={{ fontSize: "14px", padding: "8px 12px", marginBottom: "12px" }}>
                  {error}
                </div>
              )}

              {/* BUTTON */}
              <button
                className="login-btn"
                disabled={!isValid || loading}
                onClick={handleContinue}
                style={{
                  opacity: isValid && !loading ? 1 : 0.5,
                  cursor: isValid && !loading ? "pointer" : "not-allowed",
                }}
              >
                {loading ? "Sending..." : "Continue"}
              </button>

              <p style={{ marginTop: "14px", fontSize: "13px" }}>
                We'll send an OTP to verify your number
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MobileLogin;
