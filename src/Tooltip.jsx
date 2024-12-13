import { useState } from "react";
import "./Tooltip.css"; // Create a separate CSS file for styling

// eslint-disable-next-line react/prop-types
const Tooltip = ({ position }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="tooltip-container">
      <button
        className="tooltip-button"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        Hover Over me!
      </button>
      {visible && (
        <div className={`tooltip-box tooltip-${position}`}>
          Thanks for hovering! I&apos;m a tooltip
        </div>
      )}
    </div>
  );
};

export default Tooltip;
