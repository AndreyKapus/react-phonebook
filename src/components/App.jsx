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



  handleIncrement = () => {
    const option = Object.keys(this.state);
    console.log(option)
    this.setState(prevState => ({
      good: prevState.value + 1
    }))
    console.log(this.state)
  };


  render() {
    return (
      <div>
        <Feeddback  onIncrement={this.handleIncrement}/>

        <div>
    <h2>Please leave feedback</h2>
      <div>
        <button type="button" onClick={this.handleIncrement}>Good</button>
        <button type="button" onClick={this.handleIncrement}>Natural</button>
        <button type="button" onClick={this.handleIncrement}>Bad</button>
      </div>
    </div>

        <h3>Statistics</h3>
        <div>
          <div>Good: {this.state.good}</div>
          <div>Natural: {this.state.natural}</div>
          <div>Bad: {this.state.bad}</div>
        </div>
      </div>
    );
  }
};

export default App
