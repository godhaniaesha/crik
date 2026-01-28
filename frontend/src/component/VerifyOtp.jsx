import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/d_style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyOTP, sendOTP } from "../store/slices/authSlice";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);
  const mobileNo = localStorage.getItem('mobileNo') || '';

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    const otpCode = otp.join('');
    if (otpCode.length === 6 && mobileNo) {
      try {
        const result = await dispatch(verifyOTP({ mobileNo, otp: otpCode })).unwrap();
        if (result.success) {
          // Redirect to main page or dashboard
          navigate("/main");
        }
      } catch (err) {
        console.error("Error verifying OTP:", err);
        // Error is already stored in Redux state
      }
    }
  };

  const handleResend = async () => {
    if (mobileNo) {
      try {
        await dispatch(sendOTP(mobileNo)).unwrap();
        // Reset OTP inputs
        setOtp(["", "", "", "", "", ""]);
        inputsRef.current[0]?.focus();
      } catch (err) {
        console.error("Error resending OTP:", err);
      }
    }
  };

  const isOtpValid = otp.every((digit) => digit !== "");

  // Redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/main");
    }
  }, [isAuthenticated, navigate]);

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
              <p>Enter the 6-digit code sent to your mobile</p>

              {/* ERROR MESSAGE */}
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error.message || "Invalid OTP. Please try again."}
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
                      if (e.key === "Enter" && isOtpValid) {
                        handleVerify();
                      }
                    }}
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
                Didn’t receive OTP?{" "}
                <a 
                  href="#" 
                  className="help-link text-decoration-none"
                  onClick={(e) => {
                    e.preventDefault();
                    handleResend();
                  }}
                >
                  Resend
                </a>
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
