import PropTypes from "prop-types";
import "./ColorDisplay.css";

const ColorDisplay = ({ targetColor }) => {
  return (
    <div
      data-testid="colorBox"
      className="color-display"
      style={{ backgroundColor: targetColor }}
    >
    </div>
  );
};

ColorDisplay.propTypes = {
  targetColor: PropTypes.string.isRequired,
};

export default ColorDisplay;
