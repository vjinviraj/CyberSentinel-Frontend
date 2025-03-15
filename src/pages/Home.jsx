import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaLock, FaEye } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import techGif from "../assets/tech.gif";

const Home = () => {
  const [modalContent, setModalContent] = useState(null);

  // Info for each card
  const cardDetails = {
    "Phishing Protection": {
      description: "Detect and block phishing attempts in real-time to keep you safe from online threats.",
      icon: <FaShieldAlt className="text-4xl text-[#00FF88]" />,
    },
    "Secure Passwords": {
      description: "Analyze and strengthen your passwords against cyber threats to ensure your accounts remain safe.",
      icon: <FaLock className="text-4xl text-[#00FF88]" />,
    },
    "Threat Intelligence": {
      description: "Stay updated on the latest cyber threats and vulnerabilities to protect yourself proactively.",
      icon: <FaEye className="text-4xl text-[#00FF88]" />,
    },
  };

  // Handle click event
  const handleCardClick = (title) => {
    setModalContent(cardDetails[title]);
  };

  // Close modal
  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="relative min-h-screen flex flex-col text-[#E0E0E0]">
      {/* Background GIF */}
      <div className="absolute inset-0">
        <img src={techGif} alt="Cybersecurity Animation" className="w-full h-full object-cover opacity-50 blur-sm" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <div className="h-screen flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#00FF88] mb-6 drop-shadow-lg">
            Welcome to CyberSentinel
          </h1>

          <div className="flex gap-4">
            <Link to="/dashboard" className="px-6 py-3 text-black bg-gradient-to-r from-[#00FF88] to-[#00AEEF] rounded-lg shadow-lg hover:from-[#6A0DAD] hover:to-[#00AEEF] transition-all">
              Go to Dashboard
            </Link>

            <Link to="/phishing-scanner" className="px-6 py-3 text-black bg-gradient-to-r from-[#00FF88] to-[#FF3B30] rounded-lg shadow-lg hover:from-[#6A0DAD] hover:to-[#00AEEF] transition-all">
              Phishing Scanner
            </Link>
          </div>
        </div>

        {/* Features Section (Cards) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-16">
          {/* Card 1 */}
          <div
            className="bg-[#121212] p-6 rounded-lg border border-[#00FF88] cursor-pointer hover:shadow-lg transition-all"
            onClick={() => handleCardClick("Phishing Protection")}
          >
            <div className="text-[#00FF88] flex items-center space-x-2">
              <FaShieldAlt className="text-2xl" />
              <h3 className="font-bold text-lg">Phishing Protection</h3>
            </div>
            <p className="text-[#E0E0E0] mt-2">Detect and block phishing attempts in real-time.</p>
            <button className="mt-4 bg-[#00AEEF] text-black px-4 py-2 rounded">
              Learn More
            </button>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#121212] p-6 rounded-lg border border-[#00FF88] cursor-pointer hover:shadow-lg transition-all"
            onClick={() => handleCardClick("Secure Passwords")}
          >
            <div className="text-[#00FF88] flex items-center space-x-2">
              <FaLock className="text-2xl" />
              <h3 className="font-bold text-lg">Secure Passwords</h3>
            </div>
            <p className="text-[#E0E0E0] mt-2">Analyze and strengthen your passwords against cyber threats.</p>
            <button className="mt-4 bg-[#00AEEF] text-black px-4 py-2 rounded">
              Check Now
            </button>
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#121212] p-6 rounded-lg border border-[#00FF88] cursor-pointer hover:shadow-lg transition-all"
            onClick={() => handleCardClick("Threat Intelligence")}
          >
            <div className="text-[#00FF88] flex items-center space-x-2">
              <FaEye className="text-2xl" />
              <h3 className="font-bold text-lg">Threat Intelligence</h3>
            </div>
            <p className="text-[#E0E0E0] mt-2">Stay updated on the latest cyber threats and vulnerabilities.</p>
            <button className="mt-4 bg-[#00AEEF] text-black px-4 py-2 rounded">
              Explore
            </button>
          </div>
        </section>

        {/* Modal */}
        {modalContent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-[#121212] p-6 rounded-lg border border-[#00FF88] text-center max-w-sm">
              <div className="mb-4">{modalContent.icon}</div>
              <h2 className="text-2xl font-bold text-[#00FF88]">Feature Details</h2>
              <p className="text-[#E0E0E0] mt-3">{modalContent.description}</p>
              <button
                onClick={closeModal}
                className="mt-4 bg-[#FF3B30] text-black px-4 py-2 rounded hover:bg-[#FFC107] transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default Home;
