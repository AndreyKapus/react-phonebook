import React from "react";
import Form from "Form";
import Contacts from "Contacts";


class App extends React.Component  {
  state = {
    contacts: [{'name': 'nik', 'number': '09421324'}, {name: 'mak', "number": "0241412442"}],
    name: '',
    number: '',
  };

  onSubmitHandler = data => {
    // console.log(data.name)
    // this.setState({contacts: [{name: data.name}], name: data.name})

    const human = {
      id: this.state.name,
      name: data.name,
      number: data.number,
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, human]
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
