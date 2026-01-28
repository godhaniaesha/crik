import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/d_style.css";

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

const VerifyOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [mobileNo, setMobileNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if already logged in
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/profile');
      return;
    }

    // Get mobile number from localStorage
    const storedMobile = localStorage.getItem('mobileNo');
    if (!storedMobile) {
      navigate('/MobileLogin');
      return;
    }
    setMobileNo(storedMobile);
  }, [navigate]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError(""); // Clear error when user types

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const isOtpValid = otp.every((digit) => digit !== "");

  const handleVerify = async () => {
    if (!isOtpValid || !mobileNo) return;

    setLoading(true);
    setError("");

    const otpString = otp.join("");

    try {
      const response = await fetch(`${API_BASE_URL}/auth/verifyOtp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mobileNo: mobileNo,
          otp: otpString
        })
      });

      const data = await response.json();

      if (data.success && data.result?.token) {
        // Store token and user data
        localStorage.setItem('token', data.result.token);
        localStorage.setItem('user', JSON.stringify(data.result.user));
        
        // Clear mobile number from localStorage
        localStorage.removeItem('mobileNo');
        
        // Navigate to profile page
        navigate('/profile');
      } else {
        setError(data.message || "Invalid OTP. Please try again.");
        // Clear OTP on error
        setOtp(["", "", "", ""]);
        inputsRef.current[0]?.focus();
      }
    } catch (err) {
      console.error('Error verifying OTP:', err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!mobileNo) return;

    setResendLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/auth/sendOtp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mobileNo: mobileNo })
      });

      const data = await response.json();

      if (data.success) {
        if (!data.smsSent && data.otpInConsole) {
          console.log('OTP (Twilio failed):', data.otpInConsole);
          alert(`OTP resent. Check console: ${data.otpInConsole}`);
        } else {
          alert('OTP resent successfully!');
        }
        // Clear OTP inputs
        setOtp(["", "", "", ""]);
        inputsRef.current[0]?.focus();
      } else {
        setError(data.message || "Failed to resend OTP");
      }
    } catch (err) {
      console.error('Error resending OTP:', err);
      setError("Network error. Please try again.");
    } finally {
      setResendLoading(false);
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

              <h3>Verify OTP</h3>
              <p>Enter the 4-digit code sent to your mobile</p>
              {mobileNo && (
                <p style={{ fontSize: "12px", color: "#999", marginTop: "-10px" }}>
                  +91 {mobileNo}
                </p>
              )}

              {/* ERROR MESSAGE */}
              {error && (
                <div className="alert alert-danger" style={{ fontSize: "14px", padding: "8px 12px", marginTop: "12px", marginBottom: "12px" }}>
                  {error}
                </div>
              )}

              {/* OTP INPUTS */}
              <div className="d-flex gap-2 mt-3 mb-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputsRef.current[index] = el)}
                    type="text"
                    maxLength="1"
                    className="otp-input"
                    value={digit}
                    onChange={(e) =>
                      handleChange(e.target.value, index)
                    }
                    onKeyDown={(e) => {
                      handleBackspace(e, index);
                      if (e.key === 'Enter' && isOtpValid) {
                        handleVerify();
                      }
                    }}
                    disabled={loading}
                  />
                ))}
              </div>

              <button
                className="login-btn"
                disabled={!isOtpValid || loading}
                onClick={handleVerify}
                style={{
                  opacity: isOtpValid && !loading ? 1 : 0.5,
                  cursor: isOtpValid && !loading ? "pointer" : "not-allowed",
                }}
              >
                {loading ? "Verifying..." : "Verify"}
              </button>

              <p className="small-text mt-3">
                Didn't receive OTP?{" "}
                <button
                  onClick={handleResend}
                  disabled={resendLoading}
                  className="help-link text-decoration-none"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#007bff",
                    cursor: resendLoading ? "not-allowed" : "pointer",
                    textDecoration: "underline",
                    padding: 0
                  }}
                >
                  {resendLoading ? "Sending..." : "Resend"}
                </button>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;