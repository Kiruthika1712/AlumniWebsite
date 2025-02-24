import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./AuthForm.css";
import authImage from "E:/alumni/src/assets/authImage.png"; // Update actual path

const AuthForm = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [showFinalStep, setShowFinalStep] = useState(false); // Final step state
  const [verificationCode, setVerificationCode] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    alumniID: "",
    fullname: "",
    startYear: "",
    endYear: "",
    regNo: "",
    dob: "",
    recoveryEmail: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  const yearRegex = /^(19|20)\d{2}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const alumniIDRegex = /^\d{6}$/;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
  
    // Common Validation (Email)
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
  
    // Validate only login fields if on login page
    if (isLogin) {
      if (!formData.password.trim()) {
        newErrors.password = "Password is required";
      }
      return newErrors; // Stop further validation for login
    }
  
    // Role-Specific Validation (Only for registration)
    if (!userType) {
      newErrors.userType = "Please select a user type";
      return newErrors; // Stop if no userType is selected
    }
  
    // Alumni Validation
    if (userType === "alumni") {
      if (!formData.alumniID.trim()) {
        newErrors.alumniID = "Alumni ID is required";
      } else if (!alumniIDRegex.test(formData.alumniID)) {
        newErrors.alumniID = "Alumni ID must be 6 digits long";
      }
  
      if (!formData.fullname.trim()) {
        newErrors.fullname = "Full Name is required";
      }
  
      if (!formData.startYear.trim() || !yearRegex.test(formData.startYear)) {
        newErrors.startYear = "Enter a valid start year (e.g., 2018)";
      }
  
      if (!formData.endYear.trim() || !yearRegex.test(formData.endYear)) {
        newErrors.endYear = "Enter a valid end year (e.g., 2023)";
      } else if (parseInt(formData.endYear) < parseInt(formData.startYear)) {
        newErrors.endYear = "End year cannot be earlier than start year";
      }
    }
  
    // Student Validation
    if (userType === "student") {
      if (!formData.regNo.trim()) {
        newErrors.regNo = "Registration No. is required";
      }
  
      if (!formData.fullname.trim()) {
        newErrors.fullname = "Full Name (as in cert) is required";
      }
  
      if (!formData.dob.trim()) {
        newErrors.dob = "Date of Birth is required";
      }
    }
  
    // Faculty Validation
    if (userType === "faculty") {
      if (!formData.regNo.trim()) {
        newErrors.regNo = "PU ID is required";
      }
  
      if (!formData.fullname.trim()) {
        newErrors.fullname = "Full Name (as in cert) is required";
      }
  
      if (!formData.dob.trim()) {
        newErrors.dob = "Date of Birth is required";
      }
    }
  
    return newErrors;
  };
  

  const handleLoginSubmit = () => {
    let newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuccessMessage("✅ Login Successful!");
    setTimeout(() => {
      setSuccessMessage("");
      onClose();
      navigate(-1);
    }, 1500);
  };

  const handleRegisterSubmit = () => {
    let newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setShowVerification(true); // Proceed to verification step
  };

  const handleVerificationSubmit = () => {
    if (verificationCode !== "123456") {
      setErrors({ verificationCode: "Incorrect verification code" });
    } else {
      setShowVerification(false);
      setShowFinalStep(true); // Proceed to the final step
    }
  };

  const handleFinalStepSubmit = () => {
    let newErrors = {};

    if (!formData.recoveryEmail.trim() || !emailRegex.test(formData.recoveryEmail)) {
      newErrors.recoveryEmail = "Enter a valid recovery email";
    }

    if (!formData.password.trim() || !passwordRegex.test(formData.password)) {
      newErrors.password = "Password must contain 6+ chars, 1 uppercase, 1 number, 1 symbol";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuccessMessage("✅ Registration Completed!");
    setTimeout(() => {
      setSuccessMessage("");
      onClose();
      navigate(-1);
    }, 1500);
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-container" onClick={(e) => e.stopPropagation()}>
        <div className="auth-image">
          <img src={authImage} alt="Auth" />
        </div>

        <div className="auth-form">
          {successMessage ? (
            <div className="success-message">{successMessage}</div>
          ) : showVerification ? (
            <>
              <h2>Verify Your Email</h2>
              <input
                type="text"
                placeholder="Enter verification code"
                className="input-field"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              {errors.verificationCode && <p className="error-text">{errors.verificationCode}</p>}
              <button className="auth-button" onClick={handleVerificationSubmit}>
                Submit Code
              </button>
            </>
          ) : showFinalStep ? (
            <>
              <h2>Complete Registration</h2>

              <input type="text" className="input-field" value={formData.email} readOnly />

              <input
                type="email"
                placeholder="Recovery Email"
                name="recoveryEmail"
                className="input-field"
                value={formData.recoveryEmail}
                onChange={handleInputChange}
              />
              {errors.recoveryEmail && <p className="error-text">{errors.recoveryEmail}</p>}

              <input
                type="password"
                placeholder="New Password"
                name="password"
                className="input-field"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <p className="error-text">{errors.password}</p>}

              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                className="input-field"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

              <button className="auth-button" onClick={handleFinalStepSubmit}>
                Complete Registration
              </button>
            </>
          ) : (
            <>
              <h2>{isLogin ? "Welcome Back!" : "Register"}</h2>
              <div className="toggle-container">
                <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
                <label className="switch">
                  <input type="checkbox" checked={!isLogin} onChange={() => setIsLogin(!isLogin)} />
                  <span className="slider round"></span>
                </label>
              </div>

              {isLogin ? (
                <>
                  <input
                    type="email"
                    placeholder="Username (Email)"
                    name="email"
                    className="input-field"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}

                  <div className="password-input">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      className="input-field"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  {errors.password && <p className="error-text">{errors.password}</p>}

                  <button className="auth-button" onClick={handleLoginSubmit}>
                    LOG IN
                  </button>
                </>
              ) : (
                <>
                  <select
                    name="userType"
                    className="input-field"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                  >
                    <option value="">Select Role</option>
                    <option value="alumni">Alumni</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                  </select>
                  {errors.userType && <p className="error-text">{errors.userType}</p>}

                  {userType === "alumni" && (
                    <>
                      <input
                        type="text"
                        placeholder="Alumni ID"
                        name="alumniID"
                        className="input-field"
                        onChange={handleInputChange}
                      />
                      {errors.alumniID && <p className="error-text">{errors.alumniID}</p>}

                      <input
                        type="text"
                        placeholder="Full Name (as in cert)"
                        name="fullname"
                        className="input-field"
                        onChange={handleInputChange}
                      />
                      {errors.fullname && <p className="error-text">{errors.fullname}</p>}

                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Start Year"
                          name="startYear"
                          className="input-field half-width"
                          onChange={handleInputChange}
                        />
                        {errors.startYear && <p className="error-text">{errors.startYear}</p>}

                        <input
                          type="text"
                          placeholder="End Year"
                          name="endYear"
                          className="input-field half-width"
                          onChange={handleInputChange}
                        />
                        {errors.endYear && <p className="error-text">{errors.endYear}</p>}
                      </div>

                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="input-field"
                        onChange={handleInputChange}
                      />
                      {errors.email && <p className="error-text">{errors.email}</p>}
                    </>
                  )}

                  {userType === "student" && (
                    <>
                      <input
                        type="text"
                        placeholder="Reg No."
                        name="regNo" // ✅ Matches formData.regNo
                        className="input-field"
                        onChange={handleInputChange}
                      />
                      {errors.regNo && <p className="error-text">{errors.regNo}</p>}

                      <input
                        type="text"
                        placeholder="Full Name (as in cert)"
                        name="fullname"
                        className="input-field"
                        onChange={handleInputChange}
                      />
                      {errors.fullname && <p className="error-text">{errors.fullname}</p>}

                      <input
                        type="date"
                        placeholder="Date of Birth"
                        name="dob"
                        className="input-field"
                        onChange={handleInputChange}
                      />
                      {errors.dob && <p className="error-text">{errors.dob}</p>}

                      <input
                        type="email"
                        placeholder="Email for news/reminders"
                        name="email"
                        className="input-field"
                        onChange={handleInputChange}
                      />
                      {errors.email && <p className="error-text">{errors.email}</p>}
                    </>
                  )}

                  {userType === "faculty" && (
                    <>
                      <input
                        type="text"
                        placeholder="PU ID"
                        name="regNo" // ✅ Matches formData.regNo
                        className="input-field"
                        onChange={handleInputChange}
                      />
                      {errors.regNo && <p className="error-text">{errors.regNo}</p>}

                      <input
                        type="text"
                        placeholder="Full Name (as in cert)"
                        name="fullname"
                        className="input-field"
                        onChange={handleInputChange}
                      />
                      {errors.fullname && <p className="error-text">{errors.fullname}</p>}

                      <input
                        type="date"
                        placeholder="Date of Birth"
                        name="dob"
                        className="input-field"
                        onChange={handleInputChange}
                      />
                      {errors.dob && <p className="error-text">{errors.dob}</p>}

                      <input
                        type="email"
                        placeholder="Email for news/reminders"
                        name="email"
                        className="input-field"
                        onChange={handleInputChange}
                      />
                      {errors.email && <p className="error-text">{errors.email}</p>}
                    </>
                  )}

                  <button className="auth-button" onClick={handleRegisterSubmit}>
                    NEXT
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
