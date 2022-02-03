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
    grid-column-start: 1;
    grid-column-end: 1;
    padding: 50px;
    align-self: center;
`;

export const Div2 = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    padding: 50px;
    align-self: center;
`;

export const Div3 = styled.div`
    grid-column-start: 3;
    grid-column-end: 3;
    padding: 50px;
    align-self: center;
`;

export const Div4 = styled.div`
    grid-column-start: 4;
    grid-column-end: 4;
    padding: 50px;
    align-self: center;
`;

export const Div5 = styled.div`
    grid-column-start: 5;
    grid-column-end: 5;
    padding: 50px;
    align-self: center;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    z-index: 126;
    display: block;
    &:after {
        content: "";
        background: rgba(228,132,0,0.9);
        width: 100%;
        height: 100%;
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        opacity: 1;
    }
`;

// export const Image = styled.div`
//     background-image: url(${(props) => props.bgImage});
//     width: 100%;
//     height: 100%;
//     z-index: 126;
//     display: block;
//     position: relative;
//     :hover {
//         opacity: .5;
//     }
// `;