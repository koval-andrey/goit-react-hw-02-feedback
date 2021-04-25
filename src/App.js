
import { Component } from 'react';
import React from 'react';
import styles from './App.module.css';
import Statistics from './Components/Statistics';
import Options from './Components/Options';
import Notification from './Components/Notification';
import Section from './Components/Section'


class App extends Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  addFeedback = prop => {
    this.setState(prevState => {
      return { [prop]: prevState[prop] + 1 };
    });
  };

countPercentage = () => {
    const { good } = this.state;
    return (good * 100) / this.countTotal();
  };

  render() {
    const {good, neutral, bad}=this.state;
    const total = this.countTotal();
  return (
    <div className={styles.App}>
    <Section title="Please leave Feedback">

      <Options
        options={this.state}
        onLeaveFeedback={this.addFeedback}
      />
    </Section>
    {total !== 0 ? (
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    ) : (
      <Notification message="No feedback given." />
    )}
  </div>
);
}
}

export default App;
