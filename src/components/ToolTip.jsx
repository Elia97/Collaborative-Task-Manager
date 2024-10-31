import { useState } from "react";
import PropTypes from "prop-types";

const ToolTip = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative size-6"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="absolute bottom-full -left-full mb-1 px-2.5 py-1.5 bg-black text-white text-xs rounded-full">
          {text}
        </div>
      )}
    </div>
  );
};

ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default ToolTip;
