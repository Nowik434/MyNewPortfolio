import styled from 'styled-components';
import { device } from '../../components/breakpoints';

export const Container = styled.div`
    background-color: #212121;
    /* grid-column-start: 4;
    grid-column-end: 7;
    grid-row-start: 21;
    grid-row-end: 28; */
    grid-column-start: ${(props) => props.theme.gridColumnStart};
    grid-column-end: ${(props) => props.theme.gridColumnEnd};
    grid-row-start: ${(props) => props.theme.gridRowStart};
    grid-row-end: ${(props) => props.theme.gridRowEnd};
    border-radius: 9px;
    @media ${device.laptop} {
        grid-row-start: ${(props) => props.theme.gridRowStartLaptop};
        grid-row-end: ${(props) => props.theme.gridRowEndLaptop};
    }
    @media ${device.mobile} {
        grid-row-start: ${(props) => props.theme.gridRowStartMobile};
        grid-row-end: ${(props) => props.theme.gridRowEndMobile};
        grid-column-start: ${(props) => props.theme.gridColumnStartMobile};
        grid-column-end: ${(props) => props.theme.gridColumnEndMobile};
    }
`;

Container.defaultProps = {
    theme: {
        gridColumnStart: 4,
        gridColumnEnd: 7,
        gridRowStart: 21,
        gridRowEnd: 28,
    }
}

export const RegularMap = styled.div`
    border-radius: 9px;
`;