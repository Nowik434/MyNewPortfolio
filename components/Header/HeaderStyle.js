
import styled from 'styled-components';
import { device } from '../../components/breakpoints';

export const Container = styled.header`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-template-rows: 1fr;
    grid-column: 1/7;
    grid-row: 1/1;
    position: absolute;
    width: 100%;
    min-height: 78px;
    background-color: #212121;
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



