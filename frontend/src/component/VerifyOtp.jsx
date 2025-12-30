import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/d_style.css";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(["", "", "",""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

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
                    onKeyDown={(e) =>
                      handleBackspace(e, index)
                    }
                  />
                ))}
              </div>

              <button
                className="login-btn"
                disabled={!isOtpValid}
                style={{
                  opacity: isOtpValid ? 1 : 0.5,
                  cursor: isOtpValid ? "pointer" : "not-allowed",
                }}
              >
                Verify
              </button>

              <p className="small-text mt-3">
                Didn’t receive OTP?{" "}
                <a href="#" className="help-link text-decoration-none">
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
