import React from "react";
import Feeddback from "components/Feedback/Feedback";
import Statistics from "./Statistics/Statistics";

// const { Component } = require("react")


class App extends React.Component  {
  state = {
    good: 0,
    natural: 0,
    bad: 0,
  };

  handleIncrement = (key) => {
    this.setState(prevState => ({
        [key]: prevState[key] + 1
      })
  )}

  countTotalFeedback = () => {
    const {good, natural, bad} = this.state;

    const total = good + natural + bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;

    const parcentage = (good / total * 100).toFixed();
    return parcentage
  }

  localSrorageSave = () => {
    localStorage.setItem("this.state", this.state)
  }

  render() {
    return (
      <div>
        <div>
    <h2>Please leave feedback</h2>
    <Feeddback  props={this.state} handleIncrement={this.handleIncrement}/>
    </div>

        <h3>Statistics</h3>
        <div>
          <div>Good: {this.state.good}</div>
          <div>Natural: {this.state.natural}</div>
          <div>Bad: {this.state.bad}</div>
          <div>Total: {this.countTotalFeedback()}</div>

        </div>
      </div>
    );
  }
};

export default App
