import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    // Placeholder for OpenAI API call
    const botMessage = { text: "This is a sample response from the AI.", sender: "bot" };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <div
        className="fixed bottom-5 right-5 bg-[#00AEEF] text-black p-4 rounded-full shadow-lg cursor-pointer hover:bg-[#00FF88] transition z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={28} />
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-16 right-5 w-80 bg-[#121212] text-[#E0E0E0] rounded-lg shadow-xl border border-[#00AEEF] z-50">
          {/* Chat Header */}
          <div className="flex justify-between items-center bg-[#1A1A1A] p-3 rounded-t-lg">
            <span className="font-bold text-[#00FF88]">Cyber Sentinel Chatbot</span>
            <X
              className="cursor-pointer text-[#FF3B30] hover:text-[#FFC107] transition"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Chat Messages */}
          <div className="p-3 h-64 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-[#00AEEF] text-black self-end"
                    : "bg-[#1A1A1A] text-[#E0E0E0]"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-3 bg-[#1A1A1A] rounded-b-lg flex">
            <input
              type="text"
              className="w-full p-2 bg-[#121212] text-[#E0E0E0] border border-[#00AEEF] rounded-lg focus:outline-none"
              placeholder="Ask about cybersecurity..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-[#00FF88] text-black px-4 py-2 rounded-lg hover:bg-[#00AEEF] transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
