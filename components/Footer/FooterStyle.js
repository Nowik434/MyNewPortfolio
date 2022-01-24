import styled from 'styled-components';
import { motion } from "framer-motion";
import { device } from '../../components/breakpoints';

export const Container = styled(motion.div)`
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    grid-template-columns: ${(props) => props.theme.gridTemplateColumns};
    background-color: #212121;
    /* grid-column-start: 1;
    grid-column-end: 4; */
    grid-column-start: ${(props) => props.theme.gridColumnStart};
    grid-column-end: ${(props) => props.theme.gridColumnEnd};
    /* grid-row-start: 21;
    grid-row-end: 28; */
    grid-row-start: ${(props) => props.theme.gridRowStart};
    grid-row-end: ${(props) => props.theme.gridRowEnd};
    border-radius: 9px;
    opacity: 0;
    @media ${device.laptop} {
        grid-row-start: ${(props) => props.theme.gridRowStart};
        grid-row-end: ${(props) => props.theme.gridRowEnd};
    }
`;

Container.defaultProps = {
    theme: {
        gridTemplateColumns: '1fr 1fr',
        gridColumnStart: 1,
        gridColumnEnd: 4,
        gridRowStart: 21,
        gridRowEnd: 28,
    }
}

export const Div = styled.div`
    align-self: center;
    img {
        @media ${device.laptop} {
        width: 350px;
    }
    }      
`;