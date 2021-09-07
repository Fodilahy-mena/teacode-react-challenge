import React, { useEffect, useState } from "react";
import Contact from './Contact';
import styled from "styled-components";

const ENDPOINT = `https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json`;

function ConatctList() {
    const [contacts, setContacts] = useState([]);
    const newContacts = contacts?.map(obj => ({ ...obj, checked: false }));

    async function fetchData() {
        const response = await fetch(ENDPOINT);
        const data = await response.json();
        const sortedDataByLastName = data.sort((a, b) => a.last_name < b.last_name ? -1 : (a.last_name > b.last_name ? 1 : 0));
        setContacts(sortedDataByLastName);
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(newContacts)
    return (
        <List>
            {newContacts.map(contact => <Contact key={contact.id} contact={contact}/>)}
        </List>
    )
}

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export default ConatctList