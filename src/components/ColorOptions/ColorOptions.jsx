import "./ColorOptions.css";
import PropTypes from 'prop-types';

const ColorOptions = ({ colorOptions, onColorSelect }) => {
  return (
    <div className="color-options">
      {colorOptions.map((color, index) => (
        <button
          key={index}
          className="color-option"
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
          data-testid="colorOption"
        />
      ))}
    </div>
  );
}
ColorOptions.propTypes = {
  colorOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onColorSelect: PropTypes.func.isRequired,
};

export default ColorOptions;
