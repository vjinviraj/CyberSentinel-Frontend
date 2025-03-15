import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/dashboard"); // Redirect to dashboard on success
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212] text-[#E0E0E0] p-6">
      <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#00FF88]">Login</h2>
        <p className="text-center text-[#E0E0E0] mt-2">Access your CyberSentinel account</p>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mt-4">
            <label className="block text-[#E0E0E0]">Email</label>
            <input
              type="email"
              className="w-full p-3 mt-1 text-black rounded-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-[#E0E0E0]">Password</label>
            <input
              type="password"
              className="w-full p-3 mt-1 text-black rounded-lg"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full py-3 bg-gradient-to-r from-[#00FF88] to-[#00AEEF] text-black rounded-lg shadow-md hover:from-[#6A0DAD] hover:to-[#00AEEF] transition-all"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#00AEEF] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
