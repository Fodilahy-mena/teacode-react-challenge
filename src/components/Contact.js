import React from "react";
import styled from "styled-components";

function Contact({contact}) {
    return (
        <Item>
            <img src={contact.avatar} alt={contact.first_name +"'s profile"}/>
            <div>
                <p>{contact.first_name} {contact.last_name}</p>
                <span></span>
            </div>
        </Item>
    )
}

const Item = styled.li`

`;

export default Contact