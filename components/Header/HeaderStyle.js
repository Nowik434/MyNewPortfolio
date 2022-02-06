
import styled from 'styled-components';
import { device } from '../../components/breakpoints';

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
    display: flex;
    padding: 5px 30px 5px;
    @media ${device.mobile} {
        padding: 12px 5px;
    }
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
    @media ${device.mobile} {
        display: none;
    }
`;

export const HeaderSocialLink = styled.div`
    
`;



