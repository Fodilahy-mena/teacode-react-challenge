import React from "react";
import Contact from './Contact';
import styled from "styled-components";


function ConatctList({contacts, toggleContactItem}) {
    
    return (
        <List>
            {contacts.map(contact => <Contact key={contact.id} toggleContactItem={toggleContactItem} contact={contact}/>)}
        </List>
    )
}

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export default ConatctList