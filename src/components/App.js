import React, { useState, useEffect } from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList'
import {uuid} from 'uuidv4';

function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}])
  }

  const deleteContactHandler = (id) =>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(()=> {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
    console.log("Get items on load");
  }, []);

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    console.log("update local storage on add");
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact AddContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} DeleteContactHandler = {deleteContactHandler} />
    </div>
  );
};

export default App;
