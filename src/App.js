import React, { useEffect, useState } from "react";
import './App.css';
import SearchContact from "./components/SearchContact";
import Header from './components/Header';
import ConatctList from './components/ContactList';
const ENDPOINT = `https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json`;
function App() {
  const [contacts, setContacts] = useState([]);
  const [searchContactName, setsearchContactName] = useState('');
  // const [selectedContacts, setSelectedContacts] = useState([]);
    async function fetchData() {
        const response = await fetch(ENDPOINT);
        const data = await response.json();
        const sortedDataByLastName = data.sort((a, b) => a.last_name < b.last_name ? -1 : (a.last_name > b.last_name ? 1 : 0));
        const addCheckedPropToData = sortedDataByLastName.map(obj => ({ ...obj, checked: false }));
        setContacts(addCheckedPropToData);
    }

    const toggleContactItem = conatctItemId => {
        const updatedContacts = contacts.map(contact => {
          return contact.id === conatctItemId
            ? { ...contact, checked: !contact.checked }
            : contact;
        });
        const checkedContacts = updatedContacts.filter(contact => contact.checked);
        setContacts(updatedContacts);
        // setSelectedContacts(checkedContacts);
        console.log(checkedContacts.map(contact => contact.id));
    };

    function handleSearch(inputValue) {
      setsearchContactName(inputValue);
    }

    useEffect(() => {
        fetchData();
    }, []);

  const filteredContactsByName = contacts.filter(contact => contact.first_name.toLocaleLowerCase().includes(searchContactName.toLocaleLowerCase()) || contact.last_name.toLocaleLowerCase().includes(searchContactName.toLocaleLowerCase()));
  return (
    <div className="App">
      <Header/>
      <main>
        <SearchContact searchContactName={searchContactName} handleSearch={handleSearch}/>
        <ConatctList contacts={filteredContactsByName} toggleContactItem={toggleContactItem}/>
      </main>
    </div>
  );
}

export default App;
