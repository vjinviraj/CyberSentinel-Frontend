import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#121212] text-[#E0E0E0] py-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left - Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-[#00FF88]">CyberSentinel</h1>
          <p className="text-sm text-gray-400 mt-2">
            Stay protected with real-time security insights.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold text-[#00AEEF]">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-[#00FF88] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00FF88] transition">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00FF88] transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00FF88] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Social Media */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-[#00AEEF] hover:text-[#00FF88] transition">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-[#00AEEF] hover:text-[#00FF88] transition">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-[#00AEEF] hover:text-[#00FF88] transition">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-[#00AEEF] hover:text-[#00FF88] transition">
            <Github size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CyberSentinel. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
