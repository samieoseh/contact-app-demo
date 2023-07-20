import React, {useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid';

import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

import './App.css';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuid(), ...contact}]);
    console.log(contacts)
  }

  const removeContactHandler = (id) => {
    const newContactsList = contacts.filter((contact) => {
      return contact.id !== id
    })

    setContacts(newContactsList)
  }

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
