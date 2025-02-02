import PropTypes from "prop-types";
const ColorDisplay = ({ targetColor }) => {
  return (
    <div
      data-testid="colorBox"
      style={{
        width: "300px",
        height: "250px",
        backgroundColor: targetColor,
        border: "2px solid #afafaf",
        margin: "10px auto",
        borderRadius:"20px",
      }}
    >
    </div>
  );
};
ColorDisplay.propTypes = {
  targetColor: PropTypes.string.isRequired,
};

export default ColorDisplay;
