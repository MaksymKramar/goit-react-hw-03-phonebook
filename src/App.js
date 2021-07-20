import React, { Component } from 'react';

import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import Section from './components/Section/Section';

import { v4 as unId } from 'uuid';
import './App.css';


export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],  
    filter: '',
  }
  
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  };

  checkName=((contact,contacts)=>contacts.find(cont => cont.name.toLowerCase().includes(contact.name.toLowerCase())));
  
  addContact = (e) => {
    const { contacts } = this.state;
    const contact = {
      id: unId(),
      name: e.name,
      number:e.number
    };

    this.checkName(contact, contacts)
      ? alert(`${contact.name} is already in your list`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts], }));        
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };;

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
     
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  

  render() {
    const { filter,} = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className='mainContainer'>
        <Section title='Phonebook'>
          <Form onSubmit={this.addContact} />
        </Section>        
        <Section title='Contacts'>
          <Filter value={filter} onChange={this.changeFilter}></Filter>
        <Contacts contacts={visibleContacts} onDeleteContact={this.deleteContact}></Contacts>
        </Section>
      </div>
    )
  }
}

export default App

