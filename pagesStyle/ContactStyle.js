import styled from 'styled-components';
import { device } from '../components/breakpoints';

export const Container = styled.div`
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    column-gap: 30px;
    row-gap: 30px;
`;

export const Div1 = styled.div`
    grid-row-start: 1;
    grid-row-end: 29;
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
    @media ${device.mobile} {
        grid-row-end: 16;
        grid-column-start: 1;
        grid-template-columns: 1fr;
    }
`;

export const Div2 = styled.div`
    margin: 50px;
    align-self: center;
`;


export const Form = styled.form`
    display: grid;
    padding: 33px;
    text-align: center;
    width: 100%;
    opacity: 1;
    @media ${device.laptop} {
        padding: 15px;
    }
    @media ${device.mobile} {
        margin: 22px;
        width: auto;
    }   
`;

export const EmailInput = styled.input`
    height: 50px;
    background: #0000001f;
    border: none;
    border-bottom: none;
    padding: 10px;
    @media ${device.laptop} {
        height: 35px;
    }
`;

export const Textarea = styled.input`
    height: 180px;
    background: #0000001f;
    border: none;
    border-bottom: none;
    padding: 10px;
    @media ${device.laptop} {
        height: 35px;
    }
`;

export const SubmitButton = styled.button`
    height: 40px;
    text-align: center;
    margin-top: 25px;
    background-color: #d1e241;
    border: 0px;
    border-radius: 5px;
    @media ${device.laptop} {
        height: 35px;
    }
`;

export const Title = styled.h3`
    font-size: 40px;
    color: #d1e241;
    @media ${device.laptop} {
        margin: 5px;
    }
`;

Title.defaultProps = {
    theme: {
        fontSize: '14px',
    }
}