import { useState } from "react";
import { X, Send } from "lucide-react";

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

const Chatboter = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const cybersecurityKeywords = [
    // Basic Greetings & User Phrases
    "hello", "hi", "hey", "good morning", "good afternoon", "good evening",
    "who are you", "what can you do", "help", "how does this work", 
    "explain", "tell me about yourself",
  
    // Cybersecurity Topics
    "phishing", "malware", "ransomware", "firewall", "hacking", "encryption",
    "cyber attack", "DDoS", "data breach", "password security", "social engineering",
    "two-factor authentication", "cybersecurity", "zero-day", "exploit", "network security",
    "cyber threat", "VPN", "dark web", "ethical hacking", "penetration testing",
    "brute force attack", "SQL injection", "cross-site scripting", "botnet", "spyware",
    "adware", "trojan", "keylogger", "backdoor", "rootkit", "security breach",
    "identity theft", "social engineering attack", "cybercrime", "digital forensics",
    "blockchain security", "IoT security", "ransomware attack", "cyber law",
    "cyber insurance", "SOC (Security Operations Center)", "SIEM (Security Information and Event Management)", 
    "cloud security", "zero trust", "bug bounty", "cryptography", "public key infrastructure (PKI)", 
    "dark net", "cyber hygiene", "endpoint security", "biometric authentication",
    "password manager", "AI in cybersecurity", "ethical hacking", "black hat hacker",
    "white hat hacker", "gray hat hacker", "SOC analyst", "penetration tester",
    "threat intelligence", "incident response", "SOC2 compliance", "GDPR", "data privacy laws",
    "MITRE ATT&CK framework", "NIST cybersecurity framework", "CISA alerts",
    "risk assessment", "cyber resilience", "supply chain attacks", "zero-click exploits",
    "hardware security", "firmware attacks", "digital footprint", "deepfake scams",
    "mobile security", "banking trojans", "social media scams", "email spoofing",
    "whaling attack", "business email compromise (BEC)", "cybersecurity awareness training",
    "ransomware-as-a-service", "insider threats", "deep web", "surface web",
    "anti-virus", "SOC maturity model", "ICS/SCADA security", "AI-driven cyberattacks",
    "voice phishing (vishing)", "SMS phishing (smishing)", "browser hijacking"
  ];

  const isCybersecurityRelated = (text) => {
    return cybersecurityKeywords.some((keyword) => text.toLowerCase().includes(keyword));
  };

  const formatResponse = (text) => {
    if (!text) return "";
    text = text.replace(/\n/g, "<br>");
    text = text.replace(/(\d+)\.\s(.+?)(?=<br>|$)/g, "<ol><li>$2</li></ol>");
    text = text.replace(/[-*]\s(.+?)(?=<br>|$)/g, "<ul><li>$1</li></ul>");
    text = text.replace(/(.*?):<br>/g, "<h3>$1</h3>");
    text = text.replace(
      /\b(Cybersecurity|Phishing|Ransomware|Firewall|Encryption|DDoS|MFA)\b/g,
      "<strong>$1</strong>"
    );
    return text;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    if (!isCybersecurityRelated(input)) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "user" },
        { text: "⚠️ I can only answer cybersecurity-related questions.", sender: "bot" }
      ]);
      setInput("");
      return;
    }

    setMessages((prevMessages) => [...prevMessages, { text: input, sender: "user" }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}?key=${import.meta.env.VITE_GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `You are a cybersecurity AI. Keep responses professional.
            User: ${input}` }] }]
        })
      });

      const data = await response.json();
      let botResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't understand that.";
      botResponse = formatResponse(botResponse);

      setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: "bot", formatted: true }]);
    } catch (error) {
      console.error("Chatbot API Error:", error);
      setMessages((prevMessages) => [...prevMessages, { text: "Error fetching response. Please try again.", sender: "bot" }]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center text-[#E0E0E0]">
      <div className="w-full max-w-2xl bg-[#1A1A1A] p-4 rounded-t-lg shadow-lg border-b border-[#00AEEF] flex justify-between items-center">
        <h2 className="text-lg font-bold text-[#00FF88]">CyberSentinel AI Chat</h2>
        <X className="text-[#FF3B30] cursor-pointer hover:text-[#FFC107] transition" size={24} />
      </div>

      <div className="w-full max-w-2xl h-[400px] overflow-y-auto p-4 bg-[#121212] border border-[#00AEEF] rounded-b-lg shadow-lg space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-[#00AEEF] text-black self-end" : "bg-[#1A1A1A] text-[#E0E0E0]"}`}
          >
            {msg.formatted ? <div dangerouslySetInnerHTML={{ __html: msg.text }} /> : msg.text}
          </div>
        ))}
        {loading && <div className="text-[#6A0DAD]">Thinking...</div>}
      </div>

      <div className="w-full max-w-2xl flex mt-4">
        <input
          type="text"
          className="flex-1 p-3 bg-[#1A1A1A] text-[#E0E0E0] border border-[#00AEEF] rounded-l-lg focus:outline-none"
          placeholder="Ask about cybersecurity..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="bg-[#00FF88] text-black px-6 rounded-r-lg hover:bg-[#00AEEF] transition flex items-center"
          disabled={loading}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chatboter;