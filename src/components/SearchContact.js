import React from "react";
import styled from "styled-components";

function SearchContact({searchContactName, handleSearch}) {
    return (
        <Form>
            <Input value={searchContactName} type="search" autoComplete="off" name='search' onChange={(e) => handleSearch(e.target.value)}/>
        </Form>
    )
}

const Form = styled.form`

`;

const Input = styled.input`
    width: 100%;
`

export default SearchContact;