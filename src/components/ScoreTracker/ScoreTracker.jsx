import "./ScoreTracker.css";
import PropTypes from "prop-types";

const ScoreTracker = ({ score }) => {
  return (
    <div data-testid="score" className="score">
      <h2>Score= {score}</h2>
    </div>
  );
};

ScoreTracker.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreTracker;
