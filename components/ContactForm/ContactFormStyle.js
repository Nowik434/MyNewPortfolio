import styled from 'styled-components';
import { device } from '../../components/breakpoints';

export const Form = styled.form`
    display: grid;
    padding: ${(props) => props.theme.padding};
    text-align: center;
    width: 100%;
    opacity: ${(props) => props.theme.opacity};
    @media ${device.laptop} {
        padding: 15px;
    }
    @media ${device.mobile} {
        margin: 22px;
        width: auto;
    }   
`;

Form.defaultProps = {
    theme: {
        opacity: 1,
        padding: '33px',
    }
}

export const EmailInput = styled.input`
    height: 52px;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0;
    @media ${device.laptop} {
        height: 35px;
    }
`;

export const Textarea = styled.input`
    height: 52px;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0;
    @media ${device.laptop} {
        height: 35px;
    }
`;

export const SubmitButton = styled.button`
    height: 40px;
    text-align: center;
    margin-top: 25px;
    background-color: #d1e241;
    border-radius: 5px;
    @media ${device.laptop} {
        height: 35px;
    }
`;

export const Title = styled.h3`
    font-size: ${(props) => props.theme.fontSize};
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