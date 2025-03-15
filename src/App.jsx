import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PhishingScanner from "./pages/PhishingScanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordAnalyzer from "./pages/PasswordAnalyzer";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Chatboter from "./pages/Chatboter";
import ChatbotUI from "./features/chatbot/ChatbotUI"; // Correct import
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import EmailFraudDetection from "./pages/EmailFraudDetection";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-[#121212] min-h-screen text-[#E0E0E0] flex flex-col">
          <Navbar />
          <ChatbotUI /> {/* Integrated ChatbotUI */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/phishing-scanner" element={<PhishingScanner />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password-analyzer" element={<PasswordAnalyzer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features" element={<Features />} />
            <Route path="/chatboter" element={<Chatboter />} />
            <Route path="/email-fraud-detection" element={<EmailFraudDetection />} />

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
