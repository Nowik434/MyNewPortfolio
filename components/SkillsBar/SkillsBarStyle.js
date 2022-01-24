import styled from 'styled-components';
import { device } from '../../components/breakpoints';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    background-color: #212121;
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 16;
    grid-row-end: 21;
    border-radius: 9px;
    box-sizing: border-box;
    @media ${device.mobile} {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(6,1fr);
    }
    @media ${device.laptop} {
        grid-row-start: 12;
        grid-row-end: 16;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(11,1fr);
    }
    /* @media ${device.laptopS} {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(6,1fr);
    } */
    
`;

export const Box1 = styled.div`
    background-color: #212121;
    border-radius: 9px;
    font-size: 80px;
    display: flex;
    justify-self: center;
    align-self: center;
    transition: all .3s ease;
    :hover {
        font-size: 90px;
        transition: all .3s ease;
    }
    @media ${device.laptop} {
        font-size: 60px;
        :hover {
        font-size: 70px;
        transition: all .3s ease;
    }
    }
`;

export const Box2 = styled.div`
    background-color: #212121;
    border-radius: 9px;
    font-size: 80px;
    display: flex;
    justify-self: center;
    align-self: center;
    transition: all .3s ease;
    :hover {
        font-size: 90px;
        transition: all .3s ease;
    }
    @media ${device.laptop} {
        font-size: 60px;
        :hover {
        font-size: 70px;
        transition: all .3s ease;
    }
    }
`;

export const Box3 = styled.div`
    background-color: #212121;
    border-radius: 9px;
    font-size: 80px;
    display: flex;
    justify-self: center;
    align-self: center;
    transition: all .3s ease;
    :hover {
        font-size: 90px;
        transition: all .3s ease;
    }
    @media ${device.laptop} {
        font-size: 60px;
        :hover {
        font-size: 70px;
        transition: all .3s ease;
    }
    }
`;

export const Box4 = styled.div`
    background-color: #212121;
    border-radius: 9px;
    font-size: 80px;
    display: flex;
    justify-self: center;
    align-self: center;
    transition: all .3s ease;
    :hover {
        font-size: 90px;
        transition: all .3s ease;
    }
    @media ${device.laptop} {
        font-size: 60px;
        :hover {
        font-size: 70px;
        transition: all .3s ease;
    }
    }
`;

export const Box5 = styled.div`
    background-color: #212121;
    border-radius: 9px;
    font-size: 80px;
    display: flex;
    justify-self: center;
    align-self: center;
    transition: all .3s ease;
    :hover {
        font-size: 90px;
        transition: all .3s ease;
    }
    @media ${device.laptop} {
        font-size: 60px;
        :hover {
        font-size: 70px;
        transition: all .3s ease;
    }
    }
`;

export const Box6 = styled.div`
    background-color: #212121;
    border-radius: 9px;
    font-size: 80px;
    display: flex;
    justify-self: center;
    align-self: center;
    transition: all .3s ease;
    :hover {
        font-size: 90px;
        transition: all .3s ease;
    }
    @media ${device.laptop} {
        font-size: 60px;
        :hover {
        font-size: 70px;
        transition: all .3s ease;
    }
    }
`;

export const Box7 = styled.div`
    background-color: #212121;
    border-radius: 9px;
    font-size: 80px;
    display: flex;
    justify-self: center;
    align-self: center;
    transition: all .3s ease;
    :hover {
        font-size: 90px;
        transition: all .3s ease;
    }
    @media ${device.laptop} {
        font-size: 60px;
        :hover {
        font-size: 70px;
        transition: all .3s ease;
    }
    }
`;

export const Box8 = styled.div`
    background-color: #212121;
    border-radius: 9px;
    font-size: 80px;
    display: flex;
    justify-self: center;
    align-self: center;
    transition: all .3s ease;
    :hover {
        font-size: 90px;
        transition: all .3s ease;
    }
    @media ${device.laptop} {
        font-size: 60px;
        :hover {
        font-size: 70px;
        transition: all .3s ease;
    }
    }
`;

export const Box9 = styled.div`
    background-color: #212121;
    border-radius: 9px;
    font-size: 80px;
    display: flex;
    justify-self: center;
    align-self: center;
    transition: all .3s ease;
    :hover {
        font-size: 90px;
        transition: all .3s ease;
    }
    @media ${device.laptop} {
        font-size: 60px;
        :hover {
        font-size: 70px;
        transition: all .3s ease;
    }
    }
`;

export const Box10 = styled.div`
    background-color: #212121;
    border-radius: 9px;
    font-size: 80px;
    display: flex;
    justify-self: center;
    align-self: center;
    transition: all .3s ease;
    :hover {
        font-size: 90px;
        transition: all .3s ease;
    }
    @media ${device.laptop} {
        font-size: 60px;
        :hover {
        font-size: 70px;
        transition: all .3s ease;
    }
    }
`;

export const Box11 = styled.div`
    background-color: #212121;
    border-radius: 9px;
    font-size: 80px;
    display: flex;
    justify-self: center;
    align-self: center;
    transition: all .3s ease;
    :hover {
        font-size: 90px;
        transition: all .3s ease;
    }
    @media ${device.laptop} {
        font-size: 60px;
        :hover {
        font-size: 70px;
        transition: all .3s ease;
    }
    }
`;