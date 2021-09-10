import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <HeaderStyled>
            <h1>Contacts</h1>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    // align-items: center;
    display: flex;
    justify-content: center;
    background: rgb(99,176,208);
    background: linear-gradient(90deg, rgba(99,176,208,1) 0%, rgba(87,196,129,1) 100%);
    padding-top: 16px;
    padding-bottom: 16px;
    h1 {
        font-size: 20px;
        color: #FFFFFF;
        margin: 0;
    }
`;
export default Header

