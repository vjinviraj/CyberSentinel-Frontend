import { useEffect } from "react";
import { X } from "lucide-react";

const ToastNotification = ({ message, type = "info", onClose }) => {
  // Define color styles based on toast type
  const toastStyles = {
    success: "bg-[#00FF88] text-black", // Neon Green
    error: "bg-[#FF3B30] text-white",  // Alert Red
    warning: "bg-[#FFC107] text-black", // Warning Yellow
    info: "bg-[#00AEEF] text-white",   // Cyber Blue
  };

  // Auto close toast after 3 seconds
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 right-5 px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 
      ${toastStyles[type]} animate-slide-in`}
    >
      <span className="font-semibold">{message}</span>
      <button onClick={onClose} className="text-white">
        <X size={18} />
      </button>
    </div>
  );
};

export default ToastNotification;
