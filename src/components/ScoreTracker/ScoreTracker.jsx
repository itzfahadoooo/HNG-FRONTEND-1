import "./ScoreTracker.css";
import PropTypes from "prop-types";

const ScoreTracker = ({ score }) => {
  return (
    <div  className="score">
      <h2 data-testid="score">Score= {score}</h2>
    </div>
  );
};

ScoreTracker.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreTracker;
