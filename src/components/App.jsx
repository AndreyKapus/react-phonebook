import React from "react";
import Feeddback from "components/Feedback/Feedback";
import Statistics from "./Statistics/Statistics";

// const { Component } = require("react")


class App extends React.Component  {
  state = {
    good: 5,
    natural: 0,
    bad: 0,
  };



  // handleIncrement = () => {
  //   // const option = Object.keys(this.state);
  //   // console.log(option)

  //   this.setState(prevState => ({
  //       good: prevState.good + 1
  //     })
  // )}


  render() {
    return (
      <div>
        <Feeddback  />

        <div>
    <h2>Please leave feedback</h2>
      <div>
        <button type="button" onClick={() => this.setState(prevState => ({
        good: prevState.good + 1
      })
  )}>Good</button>
        <button type="button" onClick={() => this.setState(prevState => ({
        natural: prevState.natural + 1
      })
  )}>Natural</button>
        <button type="button" onClick={() => this.setState(prevState => ({
        bad: prevState.bad + 1
      })
  )}>Bad</button>
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
