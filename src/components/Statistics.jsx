import React, { Component } from 'react';

class Statistics extends Component {
render(){
  const {good, neutral, bad, total, positivePercentage}=this.props;

  return(
    <div>
    <h2 style={{ fontSize: 30 }}>Estadísticas</h2>
    <p style={{ fontSize: 20 }}>Opiniones Buenas: {good}</p>
    <p style={{ fontSize: 20 }}>Opiniones Neutrales: {neutral}</p>
    <p style={{ fontSize: 20 }}>Opiniones Malas: {bad}</p>
    <p style={{ fontSize: 20 }}>Total: {total}</p>
    <p style={{ fontSize: 20 }}>Positive Feedback: {positivePercentage}%</p>
  </div>
  );
}
}
export default Statistics;
 