import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const [email, setEmail] = useState(""); // To store email input
  const [otp, setOtp] = useState(""); // To store OTP input
  const [otpSent, setOtpSent] = useState(false); // To control OTP field visibility
  const [error, setError] = useState(""); // To handle email validation errors
  const [resendTimer, setResendTimer] = useState(30); // Timer for "Resend OTP"
  const [canResend, setCanResend] = useState(false); // Control "Resend OTP" button visibility
  const navigate = useNavigate(); // Hook to navigate to another page

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle sending OTP
  const handleSendOtp = async () => {
    if (!validateEmail(email)) {
      setError("Invalid email format. Please enter a valid email.");
      return;
    }
    setError(""); 


    
    // Simulate sending OTP
    try {
      console.log("OTP sent to:", email);
      alert("Mock OTP sent successfully! Use '123456' to verify.");
      setOtpSent(true); // Show OTP field
      setResendTimer(30); // Reset timer
      setCanResend(false); // Disable "Resend OTP"
      startResendTimer(); // Start the resend timer
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("An error occurred while sending OTP. Please try again.");
    }
  };


  // Start resend timer
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

  // Handle verifying OTP
  const handleVerifyOtp = async () => {
    if (otp === "123456") {
      console.log("OTP verified successfully!");
      alert("OTP verified successfully!");

      navigate("/SignUp1"); 
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleKeyPress = (e, type) => {
    if (e.key === "Enter") {
      if (type === "email" && !otpSent) {
        handleSendOtp();
      } else if (type === "otp" && otpSent && !canResend) {
        handleVerifyOtp();
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-primary">
          Registration
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e, "email")} 
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary ${
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
            className="w-full px-4 py-2 mb-4 text-white bg-primary rounded-md hover:bg-primary-hover"
          >
            Send OTP
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
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e, "otp")} // Trigger Verify OTP on Enter key
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
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
              onClick={handleSendOtp}
              className={`w-full px-4 py-2 text-white rounded-md ${
                canResend
                  ? "bg-primary hover:bg-primary-hover cursor-pointer"
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
