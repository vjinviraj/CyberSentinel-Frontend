import PropTypes from "prop-types";

const Card = ({ title, description, icon: Icon, actionText, onAction }) => {
  return (
    <div className="bg-[#121212] text-[#E0E0E0] p-6 rounded-2xl shadow-lg border border-[#00FF88] transition-transform transform hover:scale-105 hover:border-[#6A0DAD]">
      {Icon && <Icon className="text-[#00AEEF] w-10 h-10 mb-4" />}
      <h3 className="text-xl font-semibold text-[#00FF88]">{title}</h3>
      <p className="text-sm text-[#E0E0E0] mt-2">{description}</p>
      {actionText && (
        <button
          onClick={onAction}
          className="mt-4 px-4 py-2 bg-gradient-to-r from-[#00FF88] to-[#00AEEF] text-black font-medium rounded-lg shadow-md hover:from-[#6A0DAD] hover:to-[#00AEEF] transition-all duration-300"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType, 
  actionText: PropTypes.string,
  onAction: PropTypes.func,
};

export default Card;
