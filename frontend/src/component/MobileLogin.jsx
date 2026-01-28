import React, { useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/d_style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendOTP } from "../store/slices/authSlice";


const MobileLogin = () => {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);


  const handleChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, "");

    // limit to 10 digits
    if (value.length > 10) return;

    setMobile(value);
  };

  const isValid = mobile.length === 10;
  
  const handleContinue = async () => {
    if (isValid) {
      try {
        const result = await dispatch(sendOTP(mobile)).unwrap();
        if (result.success) {
          // Store mobile number in localStorage for OTP verification
          localStorage.setItem('mobileNo', mobile);
          navigate("/verify-otp");
        }
      } catch (err) {
        console.error("Error sending OTP:", err);
        // Error is already stored in Redux state
      }
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
                <div className="alert alert-danger" role="alert">
                  {error.message || "Failed to send OTP. Please try again."}
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
                We’ll send an OTP to verify your number
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MobileLogin;
