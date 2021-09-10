import React from "react";
import styled from "styled-components";

function SearchContact({searchContactName, handleSearch}) {
    return (
        <Form>
            <Label>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </Label>
            <Input value={searchContactName} type="search" autoComplete="off" name='search' onChange={(e) => handleSearch(e.target.value)}/>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;
    margin-top: 8px;
    label > svg {
        width: 20px;
        height: 20px;
        margin-left: 16px;
        margin-right: 16px;
    }
`;

const Label = styled.label``;

const Input = styled.input`
    width: 100%;
    padding-block: 8px;
    border: none;
    background-color: transparent;
`

export default SearchContact;