import styles from './Statistic.module.css';
import PropTypes from 'prop-types';

function Statistic({ good, neutral, bad, total, positivePercent }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p></p>
    </div>
  );
}

export default Statistic;
