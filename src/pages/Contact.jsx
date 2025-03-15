import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setMessage("");
  };

  // Team Members List
  const teamMembers = [
    { name: "Viraj Singh", email: "viraj@example.com", phone: "+91 98765 43210" },
    { name: "Chetan Sharma", email: "chetan@example.com", phone: "+91 87654 32109" },
    { name: "Devansh Tiwari", email: "devansh@example.com", phone: "+91 76543 21098" },
    { name: "Pratham Varma", email: "pratham@example.com", phone: "+91 65432 10987" },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] flex flex-col items-center px-6 pt-24">
      <h1 className="text-4xl font-bold text-[#00FF88] mb-4">Contact Us</h1>
      <p className="text-lg text-[#E0E0E0] mb-8 text-center max-w-2xl">
        Reach out to our cybersecurity team for any inquiries.
      </p>

      {/* Team Contact Section */}
      <div className="w-full max-w-3xl bg-[#1A1A1A] p-6 rounded-lg shadow-lg space-y-6">
        <h2 className="text-2xl font-semibold text-[#00AEEF]">Our Team</h2>

        {teamMembers.map((member, index) => (
          <div key={index} className="border-b border-[#00AEEF] pb-4 last:border-none">
            <h3 className="text-xl text-[#00FF88]">{member.name}</h3>
            <p className="text-[#00AEEF]">Email: {member.email}</p>
            <p className="text-[#00AEEF]">Phone: {member.phone}</p>
          </div>
        ))}
      </div>

      {/* GitHub & Contact */}
      <div className="w-full max-w-3xl mt-6 p-6 bg-[#1A1A1A] rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-[#00AEEF]">Connect With Us</h2>
        <p className="mt-2 text-[#E0E0E0]">Check our GitHub for the latest updates.</p>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-lg text-[#00FF88] hover:text-[#00AEEF] transition"
        >
          GitHub: github.com/yourgithub
        </a>
        <p className="mt-4 text-[#E0E0E0]">
          📞 Contact Number: <span className="text-[#00FF88]">+91 98765 43210</span>
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl mt-6 p-6 bg-[#1A1A1A] rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#00AEEF]">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <textarea
            className="w-full p-3 rounded-md bg-[#121212] text-[#E0E0E0] border border-[#00AEEF] focus:outline-none focus:ring-2 focus:ring-[#00FF88]"
            placeholder="Write your message here..."
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 bg-[#00FF88] text-black rounded-lg hover:bg-[#00AEEF] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
