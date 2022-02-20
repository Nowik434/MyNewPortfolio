import styled from 'styled-components';

export const NavElement = styled.li`
    justify-self: center;
    cursor: pointer;
    list-style: none;
    padding: 8px 16px;
    border: 2px solid #ffffff14;
    border-radius: 25px;
    transition: border .2s ease;
    &:hover {
      border: 2px solid #d1e24140;
      transition: border .2s ease;
    }
`;