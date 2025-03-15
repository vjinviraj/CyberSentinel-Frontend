import { useState } from "react";
import { X, Send, MessageSquare } from "lucide-react";
import { fetchCybersecurityResponse } from "./ChatbotService";


const ChatbotUI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    const botReply = await fetchCybersecurityResponse(input);
    setMessages((prev) => [...prev, userMessage, { text: botReply, sender: "bot" }]);

    setLoading(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 bg-[#00AEEF] p-3 rounded-full shadow-lg hover:bg-[#00FF88] transition"
        onClick={() => setOpen(!open)}
      >
        <MessageSquare size={24} color="black" />
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="fixed bottom-16 right-6 w-80 bg-[#121212] border border-[#00AEEF] rounded-lg shadow-xl">
          <div className="flex justify-between items-center p-3 bg-[#1A1A1A] border-b border-[#00AEEF]">
            <h2 className="text-[#00FF88] font-bold">Cybersecurity Chatbot</h2>
            <X className="text-[#FF3B30] cursor-pointer" onClick={() => setOpen(false)} />
          </div>

          <div className="h-64 overflow-y-auto p-3">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 my-1 rounded-lg ${msg.sender === "user" ? "bg-[#00AEEF] text-black" : "bg-[#1A1A1A] text-[#E0E0E0]"}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="text-[#6A0DAD]">Thinking...</div>}
          </div>

          <div className="flex p-3 border-t border-[#00AEEF]">
            <input
              type="text"
              className="flex-1 p-2 bg-[#1A1A1A] text-[#E0E0E0] border border-[#00AEEF] rounded-l-lg focus:outline-none"
              placeholder="Ask about cybersecurity..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage} className="bg-[#00FF88] text-black px-4 rounded-r-lg hover:bg-[#00AEEF] transition">
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotUI;