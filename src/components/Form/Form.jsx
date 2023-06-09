import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css'

class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({[name]: value });
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    }

    render() {
        return (
            <form className={css.boxForm} onSubmit={this.handleSubmit}>
                <label className={css.label}>
                    Name
                    <input 
                    className={css.input}
                    type="text"
                    name='name'
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.handleChange} />
                </label>
                <label className={css.label}>
                    Number
                    <input
                    className={css.input}
                    type="tel"
                    name='number'
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.handleChange} />
                </label>
                <button className={css.btn} type='submit'>Add contact</button>
            </form>
        )
    };
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;