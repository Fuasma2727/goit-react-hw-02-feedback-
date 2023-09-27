import React, { Component } from 'react'

class Section extends Component {
  render() {
    const {title, children } = this.props;
    return (
        <div>
        <h1 style={{ fontSize: 40 }}>{title}</h1>
        {children}
      </div>
    )
  }
}

export default Section;