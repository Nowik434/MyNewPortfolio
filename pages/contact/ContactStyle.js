import styled from 'styled-components';
import { device } from '../../components/breakpoints';

export const Container = styled.div`
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    column-gap: 30px;
    row-gap: 30px;
`;

// Container.defaultProps = {
//     theme: {
//         contactForm: {
//             opacity: 1,
//             padding: '120px'
//         },
//     }
// }


export const Div1 = styled.div`
    grid-row-start: 1;
    grid-row-end: 32;
    transition: 'all 2s';
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    background-color: #212121;
    grid-column-start: 2;
    grid-column-end: 7;
    border-radius: 9px;
    transition: all 0.2s ease-out;
    opacity: 1;
    @media ${device.laptop} {
        grid-row-start: 1;
        grid-row-end: 23;
    }
`;
