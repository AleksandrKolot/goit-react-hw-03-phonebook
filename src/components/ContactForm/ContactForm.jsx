import React, { Component } from 'react';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === '' || this.state.number.trim() === '') {
      alert('Fill all fields!');
      return;
    }
    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="text"
            name="number"
            value={number}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
