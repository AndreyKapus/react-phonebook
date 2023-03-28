import React from "react";

class Form extends React.Component {
  initialState = {
    name: ''
  }

  state = {
    name: '',
  }

  handleInputChange = event => {
    const inputCurrentValue = event.currentTarget.value
    this.setState({name: inputCurrentValue})
  }

  handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name: this.state.name
    }
    
    this.props.onSubmit(contact);
    this.reset()
  }

reset = () => {
  this.setState(this.initialState)
}

  render() {
    const {name} = this.state.name

    return(
      <form onSubmit={this.handleSubmit}>
        <label>
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
        <button type="submit">Add contact</button>
      </form>
    )
  }
}

export default Form
