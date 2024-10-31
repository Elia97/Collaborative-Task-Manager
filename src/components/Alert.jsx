import PropTypes from "prop-types";
import { X } from "lucide-react";

const Alert = ({ message, visible, icon, onClose }) => {
  return (
    <div
      className={`fixed bottom-8 z-50 flex items-center justify-between w-full max-w-xs p-4 mb-4 rounded-lg shadow-lg bg-zinc-50 transition-transform ${
        visible
          ? "transform translate-y-0"
          : "transform translate-y-20 opacity-0"
      }`}
      role="alert"
    >
      {icon}
      {message}
      <button type="button" aria-label="Close" onClick={onClose}>
        <X />
      </button>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  icon: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
