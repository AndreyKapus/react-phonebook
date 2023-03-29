import React from "react";

class Form extends React.Component {
  initialState = {
    name: '',
    number: '',
  }

  state = {
    name: '',
    number: '',
  }

  handleInputChange = event => {
    // const inputCurrentValue = event.currentTarget.value
    // this.setState({name: inputCurrentValue})

    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const contact =
      {name: this.state.name, number: this.state.number}

    // console.log(contact)

    this.props.onSubmit(contact);
    this.setState({name: '', number: ''})
  }



  render() {
    const {name, number} = this.state.name

    return(
      <form onSubmit={this.handleSubmit}>
        <label style={{fontFamily: 'Consolas', fontWeight: '500', color: '#008F11'}}>
        Name
        <input
          type="text"
          value={name}
          onChange={this.handleInputChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
/>
        </label>
        <label>
        <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
/>
        </label>
        <button type="submit">Add contact</button>
      </form>
    )
  }
}

export default Form
