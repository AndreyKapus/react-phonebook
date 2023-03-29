import React from "react";
import Form from "Form";
import Contacts from "Contacts";
import Filter from "Filter/Filter";


class App extends React.Component  {
  state = {
    contacts: [{'name': 'nik', 'number': '09421324'}, {name: 'mak', "number": "0241412442"}],
    name: '',
    number: '',
    filter: ''
  };


  onSubmitHandler = data => {

    const human = {
      id: this.state.name,
      name: data.name,
      number: data.number,
    }

    this.setState(prevState => (
      {
      contacts: [...prevState.contacts, human]
    }));
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    })
    );}

  render() {


    const visibleContacts = this.state.contacts.filter(contact => {
      return contact.name.includes(this.state.filter)
    })

    return(
      <>
      <Form onSubmit={this.onSubmitHandler} addContact={this.addContact}/>
      <Filter value={this.filter} onChange={this.changeFilter}/>
      <Contacts props={visibleContacts} onDeleteContact={this.deleteContact}/>

      </>
    )
  }

};

export default App
