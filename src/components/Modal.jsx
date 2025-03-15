import PropTypes from "prop-types";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, title, children, actionText, onAction }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-[#121212] text-[#E0E0E0] p-6 rounded-2xl shadow-lg border border-[#00FF88] w-[90%] max-w-md relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#E0E0E0] hover:text-[#6A0DAD] transition"
          >
            <X size={24} />
          </button>
          <h2 className="text-xl font-semibold text-[#00FF88]">{title}</h2>
          <p className="mt-2 text-sm">{children}</p>
          {actionText && (
            <button
              onClick={onAction}
              className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-[#00FF88] to-[#00AEEF] text-black font-medium rounded-lg shadow-md hover:from-[#6A0DAD] hover:to-[#00AEEF] transition-all duration-300"
            >
              {actionText}
            </button>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  actionText: PropTypes.string,
  onAction: PropTypes.func,
};

export default Modal;
