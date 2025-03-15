import PropTypes from "prop-types";


const Button = ({ variant, size, children, icon: Icon, iconPosition, className, ...props }) => {
  const baseStyles =
    "flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none";

  const variants = {
    primary: "bg-[#00FF88] text-[#121212] hover:bg-[#00AEEF] hover:text-white",
    secondary: "bg-[#00AEEF] text-white hover:bg-[#00FF88] hover:text-[#121212]",
    warning: "bg-[#FFC107] text-[#121212] hover:bg-yellow-500",
    danger: "bg-[#FF3B30] text-white hover:bg-red-500",
    gradient: "bg-gradient-to-r from-[#00FF88] to-[#00AEEF] text-[#121212] hover:opacity-90",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
    className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`}

      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="mr-2" size={18} />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="ml-2" size={18} />}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "warning", "danger", "gradient"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  children: PropTypes.node.isRequired,
  icon: PropTypes.elementType,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  size: "md",
  icon: null,
  iconPosition: "left",
  className: "",
};

export default Button;
