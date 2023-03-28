import React from "react";
import Form from "Form";


class App extends React.Component  {
  state = {
    contacts: [],
    name: ''
  };

  onSubmitHandler = data => {
    this.setState({name: data.name})
  }

  render() {
    return(
      <>
      <Form onSubmit={this.onSubmitHandler}/>
      <div>Name: {this.state.name}</div>
      </>
    )
  }

};

export default App
