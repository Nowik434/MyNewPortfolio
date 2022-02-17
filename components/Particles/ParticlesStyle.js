import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion"
import { device } from '../../components/breakpoints';

export const Container = styled(motion.div)`
    display: grid;
    background-color: #212121;
    grid-row: 4/7;
    grid-column: 1/7;
    border-radius: 9px;
    transition: all 0.2s ease-out;
    opacity: 1;
`;
