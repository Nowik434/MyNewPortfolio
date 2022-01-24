import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion"
import { device } from '../../components/breakpoints';

export const Container = styled(motion.div)`
    display: grid;
    background-color: #212121;
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 21;
    grid-row-end: 32;
    border-radius: 9px;
    transition: all 0.2s ease-out;
    opacity: 1;
    @media ${device.laptop} {
        grid-row-start: 16;
        grid-row-end: 23;
    }
`;
