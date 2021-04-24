import styles from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercent }) {
  return (
    <div>
      <p className="styles.input">Good: {good}</p>
      <p className="styles.input">Neutral: {neutral}</p>
      <p className="styles.input">Bad: {bad}</p>
      <p className="styles.input">Total: {total}</p>
      <p className="styles.input">PositivePercent: {positivePercent}%</p>
    </div>
  );
}



export default Statistics;
