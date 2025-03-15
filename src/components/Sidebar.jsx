import { useState, useEffect } from "react";
import { Home, Shield, Bell, Settings, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <Home />, link: "/dashboard" },
    { name: "Security Alerts", icon: <Bell />, link: "/alerts" },
    { name: "Threat Detection", icon: <Shield />, link: "/threats" },
    { name: "Settings", icon: <Settings />, link: "/settings" },
  ];

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".sidebar") && !event.target.closest(".sidebar-toggle")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sidebar-toggle fixed top-5 left-5 z-[100] p-2 bg-[#00AEEF] text-white rounded-lg shadow-md hover:bg-[#6A0DAD] transition-all"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for better visibility */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`sidebar fixed top-0 left-0 h-full w-64 bg-[#121212] shadow-xl border-r border-[#00AEEF] z-[100]
         transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="p-5 flex items-center justify-between text-[#00FF88] font-bold text-lg">
          CyberSentinel
          <button onClick={() => setIsOpen(false)} className="text-[#FF3B30]">
            <X size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-5">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-center gap-3 px-6 py-3 text-[#E0E0E0] hover:bg-[#6A0DAD] transition-all duration-200"
            >
              {item.icon} <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
