import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaShieldAlt, FaBug, FaKey, FaGlobe, FaExclamationTriangle } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] flex flex-col items-center p-6 pt-32">
      <h1 className="text-4xl font-bold text-[#00FF88] mb-8 text-center">
        Good Evening, {currentUser?.email}! 👋
      </h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl text-center">
        <div className="p-6 bg-[#1A1A1A] rounded-2xl shadow-lg hover:shadow-xl transition-all">
          <FaShieldAlt className="text-[#00AEEF] text-5xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold">Phishing Attacks</h2>
          <p className="text-[#00FF88] text-lg font-bold">+320</p>
        </div>

        <div className="p-6 bg-[#1A1A1A] rounded-2xl shadow-lg hover:shadow-xl transition-all">
          <FaBug className="text-[#FFC107] text-5xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold">Email Fraud Cases</h2>
          <p className="text-[#FFC107] text-lg font-bold">+120</p>
        </div>

        <div className="p-6 bg-[#1A1A1A] rounded-2xl shadow-lg hover:shadow-xl transition-all">
          <FaKey className="text-[#FF3B30] text-5xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold">Leaked Passwords</h2>
          <p className="text-[#FF3B30] text-lg font-bold">+75</p>
        </div>

        <div className="p-6 bg-[#1A1A1A] rounded-2xl shadow-lg hover:shadow-xl transition-all">
          <FaGlobe className="text-[#6A0DAD] text-5xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold">Dark Web Alerts</h2>
          <p className="text-[#6A0DAD] text-lg font-bold">+42</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mt-10">
        {/* Threats Overview Chart */}
        <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Threats Overview</h2>
          <Bar
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [
                {
                  label: "Threats Detected",
                  backgroundColor: "#00FF88",
                  data: [30, 5, 45, 30, 20, 10],
                },
              ],
            }}
          />
        </div>

        {/* New Security Alerts Section */}
        <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaExclamationTriangle className="text-[#FF3B30] text-3xl mr-2" />
            Recent Security Alerts
          </h2>
          <ul className="text-[#E0E0E0] space-y-3">
            <li className="border-b border-gray-700 pb-2">
              🔥 New Phishing Scam Detected – Be cautious of fake emails from "Bank Support".
            </li>
            <li className="border-b border-gray-700 pb-2">
              🔓 Leaked Database – 500,000 credentials exposed on the dark web.
            </li>
            <li className="border-b border-gray-700 pb-2">
              🐛 Zero-Day Vulnerability Found – Urgent software update required for Windows users.
            </li>
            <li>
              ⚠️ Suspicious Login Attempt – Unusual access detected on your account from Russia.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
