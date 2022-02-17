import styled from 'styled-components';
import { device } from '../../components/breakpoints';

export const Container = styled.div`
    background-color: #212121;
    grid-column: ${(props) => props.theme.gridColumn};
    grid-row: ${(props) => props.theme.gridRow};
    border-radius: 9px;
    @media ${device.laptop} {
        grid-row-start: ${(props) => props.theme.gridRowStartLaptop};
        grid-row-end: ${(props) => props.theme.gridRowEndLaptop};
    }
    @media ${device.mobile} {
        grid-row: ${(props) => props.theme.gridRowMobile};
        grid-column: ${(props) => props.theme.gridColumnMobile};
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