import React, { Component } from 'react'

class FeedbackOptions extends Component {
  render() {
    const {options, onLeaveFeedback} = this.props;
    return (
        <div className='buttons' style={{ display: 'flex', columnGap: 20 }}>
        {options.map((option) => (
          <button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    )
  }

}

export default FeedbackOptions;