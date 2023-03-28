import React from "react";

class Form extends React.Component {
  render() {
    return(
      <form>
        <label>
        <input
          type="text"
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
