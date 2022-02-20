
import styled from 'styled-components';
import { device } from '../../components/breakpoints';

export const Container = styled.div`
    background-color: #212121;
    grid-column: 1/2;
    grid-row: 2/3;
    border-radius: 9px;
    @media ${device.mobile} {
        display: none;
    }
`;

export const NavItem = styled.ul`
    display: grid;
    height: 100%;
    align-items: center;
    justify-self: center;
    padding: 0;
    margin: 0;
`;


export const NavLink = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 1.5px;
    @media ${device.laptop} {
        font-size: 17px;
        text-align: center;
    }
`;