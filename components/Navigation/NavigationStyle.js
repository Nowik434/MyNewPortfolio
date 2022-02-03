
import styled from 'styled-components';
import { device } from '../../components/breakpoints';

export const Container = styled.div`
    background-color: #212121;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 14;
    border-radius: 9px;
    @media ${device.laptop} {
        grid-row-end: 12;
    }
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

export const NavElement = styled.li`
    justify-self: center;
    color: red;
    list-style: none;
    padding: 8px 16px;
    border: 2px solid #ffffff14;
    border-radius: 25px;
`;

export const NavLink = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 1.5px;
    @media ${device.laptop} {
        font-size: 17px;
    }
`;