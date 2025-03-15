import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await signup(email, password);
      navigate("/dashboard"); // Redirect to dashboard after signup
    } catch (err) {
      setError("Failed to create an account. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#121212]">
      <div className="w-full max-w-md bg-[#1A1A1A] p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-[#00FF88] text-center mb-6">Sign Up</h2>

        {error && <p className="text-[#FF3B30] text-sm text-center">{error}</p>}

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="text-[#E0E0E0] block mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 bg-[#121212] text-[#E0E0E0] border border-[#00AEEF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF88]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="text-[#E0E0E0] block mb-2">Password</label>
            <input
              type="password"
              className="w-full p-3 bg-[#121212] text-[#E0E0E0] border border-[#00AEEF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF88]"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-[#E0E0E0] block mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full p-3 bg-[#121212] text-[#E0E0E0] border border-[#00AEEF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF88]"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-[#00FF88] to-[#00AEEF] text-black font-bold rounded-lg hover:from-[#6A0DAD] hover:to-[#00AEEF] transition-all"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-[#E0E0E0] text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#00AEEF] hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;