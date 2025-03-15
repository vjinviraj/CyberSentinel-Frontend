import PropTypes from "prop-types";

const InputField = ({ label, placeholder, type, value, onChange, error, success }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-offWhite text-sm font-medium mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-3 rounded-lg bg-deepCharcoal text-offWhite border-2 transition-all duration-300 outline-none
          ${error ? "border-alertRed focus:border-alertRed" : success ? "border-neonGreen focus:border-neonGreen" : "border-cyberBlue focus:border-neonGreen"}
          placeholder:text-gray-400
        `}
      />
      {error && <p className="text-alertRed text-sm mt-1">{error}</p>}
      {success && <p className="text-neonGreen text-sm mt-1">{success}</p>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  success: PropTypes.string,
};

InputField.defaultProps = {
  type: "text",
  placeholder: "Enter text...",
  error: "",
  success: "",
};

export default InputField;
