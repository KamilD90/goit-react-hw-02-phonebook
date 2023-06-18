import { Component } from 'react';
// import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
      name: '',
      number: '',
    };
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  handleSubmit = event => {
    event.preventDefault();
    // const form = event.currentTarget;
    // const name = form.elements.name.value;
    // const number = form.elements.number.value;
    this.props.onSubmit({ ...this.state });
  };

  //zmiana stanu powoduje re-renderowanie
  render() {
    const name = this.state.name;

    return (
      <form onSubmit={this.handleSubmit}>
        <label for="name">Imię:</label>
        <input
          id="name"
          value={name}
          onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore        d'Artagnan"
          required
        />
        <label for="number">Numer telefonu:</label>
        <input
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Dodaj do kontaktów</button>
      </form>
    );
  }
}

export default Form;
