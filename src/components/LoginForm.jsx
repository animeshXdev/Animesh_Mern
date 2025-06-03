// LoginForm.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const generateOTP = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

  const sendOTP = async () => {
    setError("");
    setSuccessMsg("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSending(true);

    const otpCode = generateOTP();
    setSentOtp(otpCode);

    const currentTime = new Date();
    const expiryTime = new Date(currentTime.getTime() + 15 * 60000);
    const expiryString = expiryTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const message = `Your OTP for portfolio login is: ${otpCode}`;
    const templateParams = {
      to_email: email,
      message,
      time: expiryString,
    };

    try {
      await emailjs.send(
        "service_03jkwcc",
        "template_a17nisw",
        templateParams,
        "BaFswMHyviXUIlHws"
      );
      setSuccessMsg("OTP sent to your email.");
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send OTP. Please try again.");
    }

    setIsSending(false);
  };

  const verifyOTP = () => {
    setError("");
    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    setIsVerifying(true);

    setTimeout(() => {
      if (otp === sentOtp) {
        setSuccessMsg("Login successful!");
        onLoginSuccess();
      } else {
        setError("Invalid OTP. Please try again.");
      }
      setIsVerifying(false);
    }, 1500);
  };

  const Spinner = () => (
    <svg
      className="animate-spin h-5 w-5 text-black"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  );

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4">
      <div className="bg-zinc-900 w-full max-w-md p-6 rounded-2xl shadow-lg border border-emerald-600">
        <h2 className="text-2xl font-semibold text-center mb-6 text-emerald-400">
          🔐 Login to Access Portfolio
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter your Gmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg text-black focus:outline-none"
            disabled={isSending || isVerifying}
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={!isSending && { scale: 1.02 }}
            onClick={sendOTP}
            disabled={!email || isSending || isVerifying}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              !email || isSending || isVerifying
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-emerald-500 hover:bg-emerald-600 text-black"
            } flex justify-center items-center gap-2`}
            style={{ minHeight: "44px", minWidth: "140px" }}
          >
            {isSending ? (
              <>
                <Spinner />
                <span
                  style={{
                    minWidth: "70px",
                    display: "inline-block",
                    textAlign: "center",
                  }}
                >
                  Sending...
                </span>
              </>
            ) : (
              <span
                style={{
                  minWidth: "70px",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                Get OTP
              </span>
            )}
          </motion.button>

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-3 rounded-lg text-black focus:outline-none"
            disabled={isSending || isVerifying}
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={!isVerifying && { scale: 1.02 }}
            onClick={verifyOTP}
            disabled={!otp || isSending || isVerifying}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              !otp || isSending || isVerifying
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-emerald-500 hover:bg-emerald-600 text-black"
            } flex justify-center items-center gap-2`}
            style={{ minHeight: "44px", minWidth: "140px" }}
          >
            {isVerifying ? (
              <>
                <Spinner />
                <span
                  style={{
                    minWidth: "80px",
                    display: "inline-block",
                    textAlign: "center",
                  }}
                >
                  Verifying...
                </span>
              </>
            ) : (
              <span
                style={{
                  minWidth: "80px",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                Verify OTP
              </span>
            )}
          </motion.button>

          {error && (
            <p className="text-red-500 font-medium text-sm text-center">{error}</p>
          )}
          {successMsg && (
            <p className="text-emerald-400 font-medium text-sm text-center">
              {successMsg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
