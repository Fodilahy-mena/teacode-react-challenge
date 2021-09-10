import React from "react";
import styled from "styled-components";

function Contact({contact, toggleContactItem}) {

    return (
        <Item>
            {contact.avatar
            ?
            <img src={contact.avatar} alt={contact.first_name +"'s profile"}/>
            :
            <Icon>{contact.first_name.split('')[0]}{contact.last_name.split('')[0]}</Icon>
            }
            <div>
                <p>{contact.first_name} {contact.last_name}</p>
                <small>{contact.email}</small>
            </div>
            <CheckBoxContainer>
                <CheckBox type="checkbox" checked={contact.checked} onChange={() => {}} onClick={() => toggleContactItem(contact.id)}/>
            </CheckBoxContainer>
        </Item>
    )
}

const Item = styled.li`
    display: grid;
    grid-template-columns: auto auto 1fr;
    margin-left: 16px;
    margin-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    align-items: center;
    border-bottom: 3px solid hsl(0, 0%, 90%);

    & > img, & > span {
        margin-right: 16px;
        border: 3px solid hsl(0, 0%, 90%);
        border-radius: 50%;
        width: 50px;
        height: 50px;
    } 
`;

const CheckBoxContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;
const CheckBox = styled.input`
    position: relative;
    width: 25px;
    height: 25px;
    cursor: pointer;
`;

const Icon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export default Contact