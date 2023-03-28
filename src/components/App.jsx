import React from "react";
import Form from "Form";
import Contacts from "Contacts";


class App extends React.Component  {
  state = {
    contacts: [{'name': 'nik'}, {"name": 'mak'}],
    name: ''
  };

  onSubmitHandler = data => {
    this.setState({contacts: [{name: data.name}], name: data.name})

  }

  render() {
    return(
      <>
      <Form onSubmit={this.onSubmitHandler}/>
      <Contacts props={this.state.contacts}/>
      </>
    )
  }

};

export default App
