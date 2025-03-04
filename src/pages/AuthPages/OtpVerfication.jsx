import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(180); // 3 minutes in seconds
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  const navigate = useNavigate();
  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Timer countdown effect
  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // Handle input change
  const handleChange = (e, index) => {
    const { value } = e.target;

    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    // Only take the last character if multiple characters are pasted/entered
    newOtp[index] = value.substr(value.length - 1);
    setOtp(newOtp);

    // If input is filled, move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    // Clear error when user types
    setError("");
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // If current field is empty and backspace is pressed, focus on previous field
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");

    // Filter out non-digit characters
    const digits = pastedData.replace(/\D/g, "").split("").slice(0, 6);

    if (digits.length) {
      // Fill OTP fields with pasted digits
      const newOtp = [...otp];
      digits.forEach((digit, index) => {
        if (index < 6) newOtp[index] = digit;
      });
      setOtp(newOtp);

      // Focus on the next empty field or the last field
      const nextEmptyIndex = newOtp.findIndex((val) => val === "");
      if (nextEmptyIndex !== -1) {
        inputRefs.current[nextEmptyIndex].focus();
      } else {
        inputRefs.current[5].focus();
      }
    }
  };

  // Submit OTP
  const handleSubmit = () => {
    // Validate all fields are filled
    if (otp.some((digit) => digit === "")) {
      setError("Please enter complete verification code");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Success, redirect or show success message
    }, 1000);
    navigate("/change-password");
  };

  // Resend OTP
  const handleResendOtp = () => {
    if (timer > 0) return;

    // Reset timer
    setTimer(180);

    // Simulate API call to resend OTP
    // Implementation would go here
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <img
          src="/images/logo.png"
          alt="StudioSphere 360"
          className="w-32 h-32 mx-auto mb-6"
        />
      </div>

      <div className="text-center mb-6">
        <p className="text-white text-sm">
          Our team already sent you an email in your email
          <br />
          example@gmail.com to access back your account
        </p>
      </div>

      <div className="text-center mb-4">
        <p className="text-white text-xl font-medium">{formatTime(timer)}</p>
      </div>

      <div className="flex justify-center space-x-3 mb-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={index === 0 ? handlePaste : null}
            maxLength={1}
            className="w-12 h-12 text-center text-lg font-bold rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>

      {error && (
        <p className="text-center text-red-400 text-sm mb-4">{error}</p>
      )}

      <div className="w-full mb-4">
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full text-black flex justify-center py-3 px-4 border border-transparent rounded-[100px] shadow-sm text-lg font-medium text-white bg-[#8bb0e8] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Verifying..." : "Continue"}
        </button>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-[#9f9f9f]">
          Didn't receive verification code?{" "}
          <button
            onClick={handleResendOtp}
            disabled={timer > 0}
            className={`text-white font-medium ${
              timer > 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
}
