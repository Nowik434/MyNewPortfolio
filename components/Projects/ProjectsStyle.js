import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";
import { device } from '../../components/breakpoints';

export const Container = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    background-color: #212121;
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 19;
    grid-row-end: 29;
    border-radius: 9px;
    transition: all 0.2s ease-out;
    opacity: 0;
    @media ${device.laptop} {
        grid-row-start: 16;
        grid-row-end: 22;
    }
    @media ${device.mobile} {
        display: block;
    }
`;

export const Div1 = styled.div`
    position: relative;
    grid-column-start: 1;
    grid-column-end: 1;
    margin: 50px;
    align-self: center;
`;

export const Div2 = styled.div`
    position: relative;
    grid-column-start: 2;
    grid-column-end: 2;
    margin: 50px;
    align-self: center;
`;

export const Div3 = styled.div`
    position: relative;
    grid-column-start: 3;
    grid-column-end: 3;
    margin: 50px;
    align-self: center;
`;

export const Div4 = styled.div`
    position: relative;
    grid-column-start: 4;
    grid-column-end: 4;
    margin: 50px;
    align-self: center;
`;

export const Div5 = styled.div`
    position: relative;
    grid-column-start: 5;
    grid-column-end: 5;
    margin: 50px;
    align-self: center;
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    z-index: 126;
    display: block;
`;

export const Subtitle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(33 33 33 / 64%);
    transition: all .5s;
    width: 100%;
    height: 100%;
    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: center;
    :hover {
        opacity: .5;
        transition: all .5s;
    }
`;