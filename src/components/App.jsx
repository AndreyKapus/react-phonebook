import React from "react";
import Form from "Form";
import Contacts from "Contacts";


class App extends React.Component  {
  state = {
    contacts: [{'name': 'nik'}, {"name": 'mak'}],
    name: ''
  };

  onSubmitHandler = data => {
    // console.log(data.name)
    // this.setState({contacts: [{name: data.name}], name: data.name})

    const human = {
      id: this.state.name,
      name: data.name,
    }

    this.setState(prevState => ({
      contacts: [human, ...prevState.contacts]
    }));
  }

  addContact = contact => {
    console.log(contact)
    // const human = {
    //   contact,
    // }

    // this.setState(prevState => ({
    //   contacts: [human, ...prevState.Contacts]
    // }));
  }

  render() {
    return(
      <>
      <Form onSubmit={this.onSubmitHandler} addContact={this.addContact}/>
      <Contacts props={this.state.contacts}/>
      </>
    )
  }

};

export default App
