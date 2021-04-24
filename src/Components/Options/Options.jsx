import styles from './Options.module.css';

function Option ( { options, onLeaveFeedback } ){
return (
    <div>
{options.map(option => {
    return (<button 
    type="button" 
    key={option} 
    className={styles[option]} 
    onClick={() => onLeaveFeedback(option)}>
        {option}
    </button> )
})}
    </div>
)  
};

export default Option;