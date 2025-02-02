import "./GameStatus.css";
import PropTypes from 'prop-types';

const GameStatus = ({ status }) => {
  let statusClass = '';
  if (status === 'Correct!') {
    statusClass = 'correct';
  } else if (status === 'Wrong! Try again.') {
    statusClass = 'wrong';
  }
  return (
    <div data-testid="gameStatus" className={`game-status ${statusClass}`}>
      {status}
    </div>
  );
};

GameStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default GameStatus;