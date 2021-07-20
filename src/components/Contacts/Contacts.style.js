import styled from "@emotion/styled";

export const Container = styled.div`
border-style: dotted;
    display: inline-block;
    padding-left: 15px;
    padding-right: 30px;
`;

export const ContactList = styled.ul`
display: inline-block;
list-style-type: decimal;
font-size: x-large;
`;

export const Item = styled.li`
display: flex;
align-items: center;
margin-right: 15px;
`;

export const TextP = styled.p`
font-size: x-large;
margin-right: 20px;
`;

export const NameSpan = styled.span`
font-weight: bold;
font-family: sans-serif;
`;

export const DelBtn = styled.button`
background-color: red;
border-radius: 45%;
width: 60px;
height: 30px;

cursor: pointer;
`;