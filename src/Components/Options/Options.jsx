import styles from './Options.module.css';

function Options({ options, onLeaveFeedback }) {
    return (
      <>
        {options.map(option => {
          return (
            <button
              key={option}
              className={styles[option]}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </>
    );
  }
export default Options;