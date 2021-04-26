import styles from './Options.module.css';

function Options({ options, onLeaveFeedback }) {
  return (
    <div className={styles.controls}>
      {options.map((option, index) => {
        return (
          <button
            key={`${index + 1}`}
            className={styles.button}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
export default Options;
