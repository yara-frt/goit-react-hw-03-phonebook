import React, { Component } from 'react';
import Form from './Form/Form';
import Contact from './Contact/Contact';
import { nanoid } from 'nanoid';
import css from './App.module.css'
import Filter from './Filter/Filter';


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  addContact = data => {
    const { name, number } = data;

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    }

    if (!this.state.contacts.find(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }))
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }
  
  render() {
    const { contacts, filter } = this.state;

  
    const lowerFilter = filter.toLocaleLowerCase()
    const visibleContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerFilter))

    return(
        <div
          style={{
            height: '100vh',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            // fontSize: 40,
            color: '#010101'
          }}
      >
        <h1 className={css.title}>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        
        <Filter
          value={filter}
          onChange={this.changeFilter}
        />
        <h2 className={css.subTitle}>Contacts</h2>
        <Contact contacts={visibleContacts} onDeleteContact={this.deleteContact} />
        </div>
      );
    }
};


export default App;