
import { Component } from 'react';
import React from 'react';
import styles from './App.module.css';
import Statistics from './Components/Statistics';
import Options from './Components/Options';
import Notification from './Components/Notification'


class App extends Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  countTotal = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  addFeedback = prop => {
    this.setState(prevState => {
      return { [prop]: prevState[prop] + 1 };
    });
  };

countPercentage = () => {
    const { good = 0 } = this.state;
    const total = this.countTotal();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const {good, neutral, bad, total, options}=this.state;
  return (
    <div className="styles.App">
      <h2 className="styles.title"> Please leave feedback</h2> 
      <Options
            options={options}
            onLeaveFeedback={this.addFeedback}
          />
          {total !== 0 ? (<div>
          <h3> Statisuics: </h3>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPercentage()}
              options ={options}
            />
            </div>) : (
          <Notification message="No feedback given." />)}
          
    </div>
  );
}
}

export default App;
