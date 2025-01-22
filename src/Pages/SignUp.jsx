import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendOtp = async () => {
    if (!validateEmail(email)) {
      setError("Invalid email format. Please enter a valid email.");
      return;
    }
    setError("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/emailv/", {
        email,
      });
      if (response.status === 201) {
        alert("OTP sent successfully!");
        setOtpSent(true);
        setResendTimer(30);
        setCanResend(false);
        startResendTimer();
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("An error occurred while sending OTP. Please try again.");
    }
  };

  const startResendTimer = () => {
    const timerInterval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev === 1) {
          clearInterval(timerInterval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/otpv/${email}/`,
        { otp }
      );

      if (response.status === 200) {
        alert("OTP verified successfully!");
        navigate("/SignUp1", { state: { email } });
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert(error.response?.data?.message || "Invalid OTP. Please try again.");
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/resend/", {
        email,
      });
      if (response.status === 201) {
        alert("OTP resent successfully!");
        setResendTimer(30);
        setCanResend(false);
        startResendTimer();
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      alert(
        error.response?.data?.message || "Failed to resend OTP. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-primary">
          Registration
        </h2>

        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        {!otpSent && (
          <button
            type="button"
            onClick={handleSendOtp}
            className={`w-full px-4 py-2 mb-4 text-white rounded-md bg-primary ${
              otpSent ? "cursor-not-allowed" : "hover:bg-primary-hover"
            }`}
            disabled={otpSent}
          >
            {otpSent ? "Processing..." : "Send OTP"}
          </button>
        )}

        {otpSent && (
          <>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-gray-700">
                Enter OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm"
                required
              />
            </div>

            <button
              type="button"
              onClick={handleVerifyOtp}
              className="w-full px-4 py-2 mb-4 text-white bg-primary rounded-md hover:bg-primary-hover"
            >
              Verify OTP
            </button>

            <button
              type="button"
              onClick={handleResendOtp}
              className={`w-full px-4 py-2 text-white rounded-md ${
                canResend
                  ? "bg-primary hover:bg-primary-hover"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!canResend}
            >
              {canResend ? "Resend OTP" : `Resend OTP in ${resendTimer}s`}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default OTPVerification;
