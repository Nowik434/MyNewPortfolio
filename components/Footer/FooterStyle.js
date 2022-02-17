import styled from 'styled-components';
import { motion } from "framer-motion";
import { device } from '../../components/breakpoints';

export const Container = styled(motion.div)`
    display: inline-flex;
    grid-template-columns: ${(props) => props.theme.gridTemplateColumns};
    background-color: #212121;
    grid-column: ${(props) => props.theme.gridColumn};
    grid-row: ${(props) => props.theme.gridRow};
    border-radius: 9px;
    opacity: 0;
    @media ${device.laptop} {
        grid-row-start: ${(props) => props.theme.gridRowStartLaptop};
        grid-row-end: ${(props) => props.theme.gridRowEndLaptop};
    }
    @media ${device.mobile} {
        grid-column: ${(props) => props.theme.gridColumnMobile};
        grid-row: ${(props) => props.theme.gridRowMobile};
        display: ${(props) => props.theme.DisplayMobile};
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
        @media ${device.mobile} {
            width: 100%;
        }
    }   
`;