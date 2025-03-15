import { Link } from "react-router-dom";
import { ShieldCheck, MailWarning, KeyRound, Bot } from "lucide-react";

const features = [
  {
    title: "Password Analyzer",
    description: "Check if your password has been breached and analyze its strength.",
    icon: <KeyRound size={40} className="text-[#00FF88]" />,
    link: "/password-analyzer",
  },
  {
    title: "Phishing Detector",
    description: "Detect and prevent phishing attacks by analyzing suspicious links.",
    icon: <ShieldCheck size={40} className="text-[#00AEEF]" />,
    link: "/phishing-scanner",
  },
  {
    title: "Email Fraud Detector",
    description: "Identify fraudulent emails and detect potential scams.",
    icon: <MailWarning size={40} className="text-[#FF3B30]" />,
    link: "/email-fraud-detection",
  },
  {
    title: "AI Chatbot",
    description: "Chat with an advanced AI assistant for security insights.",
    icon: <Bot size={40} className="text-[#00FF88]" />,
    link: "/chatboter",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold text-[#00FF88] mb-12 text-center">
        Our Features
      </h1>

      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.link}
            className="group relative bg-[#1A1A1A] p-8 rounded-2xl shadow-lg border 
                       border-[#00AEEF] hover:border-[#00FF88] transition duration-300 
                       hover:scale-105 flex flex-col items-center text-center"
          >
            {/* Floating icon */}
            <div className="p-4 rounded-full bg-[#00AEEF] shadow-md group-hover:bg-[#00FF88] 
                            transition mb-4">
              {feature.icon}
            </div>

            <h2 className="text-xl font-semibold">{feature.title}</h2>
            <p className="mt-2 text-[#E0E0E0] opacity-75">{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Features;
