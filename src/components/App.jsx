import Feeddback from "Feedback/Feedback";

const { Component } = require("react")


class App extends Component  {
  state = {
    good: 0,
    natural: 0,
    bad: 0,
  };

  handleIncrement() {

  };


  render() {
    return (
      <div>
        <Feeddback state={this.state}/>
      </div>
    );
  }
};

export default App
