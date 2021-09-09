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
                <span></span>
            </div>
            <CheckBoxContainer>
                <CheckBox type="checkbox" checked={contact.checked} onChange={() => {}} onClick={() => toggleContactItem(contact.id)}/>
                {/* <CheckMark/> */}
            </CheckBoxContainer>
        </Item>
    )
}

const Item = styled.li`
    display: flex;
    padding-top: 8px;
    padding-bottom: 8px;
    flex-direction: row;
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
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
//     &:hover input ~ span {
//         background-color: #ccc;
//     }
//     input:checked ~ span {
//         background-color: #2196F3;
//     }
//     span:after {
//     content: "";
//     position: absolute;
//     display: none;
//     }
//     input:checked ~ span:after {
//         display: block;
//     }
//     span:after {
//     left: 9px;
//     top: 5px;
//     width: 5px;
//     height: 10px;
//     border: solid white;
//     border-width: 0 3px 3px 0;
//     -webkit-transform: rotate(45deg);
//     -ms-transform: rotate(45deg);
//     transform: rotate(45deg);
// }
`;
const CheckBox = styled.input`
    // position: absolute;
    // opacity: 0;
    // cursor: pointer;
    // height: 0;
    // width: 0;
`;

const CheckMark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    // height: 25px;
    // width: 25px;
    // background-color: #eee;
`;

const Icon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export default Contact