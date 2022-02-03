
import styled from 'styled-components';
import { device } from '../breakpoints';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #212121;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  height: 100%;
  text-align: left;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    /* padding: 2rem 0; */
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

export const StyledBurger = styled.button`
  position: fixed;
  top: 3%;
  right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 1px;
  z-index: 10;
  display: none;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  @media ${device.mobile} {
        display: flex;
    }   
`


export const NavItem = styled.ul`
    display: grid;
    height: 100%;
    align-items: center;
    justify-self: center;
    padding: 0;
    margin: 0;
    @media ${device.mobile} {
      height: 60%;
      text-transform: uppercase;
    }   
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