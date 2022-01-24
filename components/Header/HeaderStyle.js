
import styled from 'styled-components';

export const Container = styled.header`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    background-color: #212121;
    height: 75px;
    width: '100%';
    position: relative;
    top: 0px;
    left: 0px;
    mix-blend-mode: normal;
`;

export const Div1 = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
`;

export const Div2 = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
`;

export const Div3 = styled.div`
    align-self: center;
    grid-column-start: 3;
    grid-column-end: 5;
    justify-self: center;
`;

export const Div4 = styled.div`
    align-self: center;
    grid-column-start: 6;
    grid-column-end: 6;
    justify-self: center;
`;

export const HeaderSocialLink = styled.div`
    
`;

export const ContactButton = styled.button`
    /* height: 40px; */
    text-align: center;
    width: 160px;
    background-color: #d1e241;
    border-radius: 5px;
    list-style-type: none;
    text-decoration: none;
`;

export const ButtonText = styled.p`
    color:  #212121;
    text-transform: uppercase;
    font-weight: 600;
`;


