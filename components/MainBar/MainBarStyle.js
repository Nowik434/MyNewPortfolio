import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion"
import { device } from '../../components/breakpoints';

export const Container = styled(motion.div)`
    grid-column: 2/7;
    grid-row: ${(props) => props.theme.gridRow};
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    background-color: #212121;
    border-radius: 9px;
    transition: all 0.2s ease-out;
    opacity: 0;
    @media ${device.laptop} {
        /* grid-row-end: ${(props) => props.theme.gridRowEndLaptop}; */
    }
    @media ${device.mobile} {
        grid-column-start: 1;
        /* grid-row-end: ${(props) => props.theme.gridRowEndMobile}; */
        display: block;
    }
`;

Container.defaultProps = {
    theme: {
        gridRowEnd: 16,
    }
}

export const Div1 = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    padding: 50px;
    @media ${device.laptop} {
        padding: 40px;
    }
`;

export const Div2 = styled.div`
    position:relative;
    right: 0;
    grid-column-start: 2;
    grid-column-end: 2;
    max-height: 420px;
    overflow: hidden;
    align-self: center;
    @media ${device.mobile} {
        display: none;
    }
`;

export const Title = styled.h1`
    color: #D5E242;
    font-size: 60px;
    @media ${device.laptop} {
        font-size: 50px;
    }
    @media ${device.mobile} {
        font-size: 30px;
        text-align: center;
    }
`;

export const Subtitle = styled.h1`
    color: #E0E0E0;
    font-size: 26px;
    font-weight: bold;
    @media ${device.laptop} {
        font-size: 20px;
    }
`;
