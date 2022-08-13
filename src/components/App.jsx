import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Feedback } from './App.styled'
import Statistics from './Statistics/Statistics';
import FeedBackOptions from './FeedBackOptions/FeedbackOptions';
import Section from "./Section/Section";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  handleButtonClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    })
    )
  };
 
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total > 0 ? Math.round(100 / total * good) : 0;
  }

  render() {
    const keys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <Feedback>
        <Section title="Please leave feedback">
          <FeedBackOptions
          options={keys}
          onLeaveFeedback={this.handleButtonClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>

        <GlobalStyle/>
       
      </Feedback>
    )
};
}
