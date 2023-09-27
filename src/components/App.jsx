import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';



class App extends Component {
state = {
good:0,
neutral:0,
bad:0,

};
handleFeedbackClick = (feedback) => {
  this.setState((prevState) => ({
    [feedback]: prevState[feedback] + 1,
  }));
};
getTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
};

getPositivePercentage = () => {
  const { good } = this.state;
  const total = this.getTotalFeedback();
  return total > 0 ? ((good * 100) / total).toFixed(0) : 0;
};

render(){
const {good, neutral, bad} = this.state;

return(
  <div
  style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101',
  }}
>
<div className='App'>
<Section title='Please leave Feedback'>
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.handleFeedbackClick}
            />
          </Section>
{(this.state.good + this.state.neutral + this.state.bad) < 1 ? (
        <p>"There is no Feedback"</p>
      ) : (
       
          <Section title='Statistics'>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.getTotalFeedback()}
              positivePercentage={this.getPositivePercentage()}
            />
          </Section>
       
      
      )}
       </div>
      </div>       
);
};
}

export default App;