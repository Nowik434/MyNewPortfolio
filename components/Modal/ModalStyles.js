import styled from 'styled-components';
import { device } from '../../components/breakpoints';

export const ContactButton = styled.button`
    border: 0px;
    text-align: center;
    width: 160px;
    background-color: #d1e241;
    border-radius: 5px;
    list-style-type: none;
    text-decoration: none;
`;

export const ButtonText = styled.p`
    color:  #212121;
    text-transform: uppercase;
    font-weight: 600;
`;


export const ReactModal = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #212121bd;
    z-index: 3;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
    opacity: 1;
    transition: opacity 0.5s;
    /* @media ${device.laptop} {
        padding: 15px;
    }
    @media ${device.mobile} {
        margin: 22px;
        width: auto;
    }    */
`;

export const ModalDialogue = styled.div`
    max-width: 600px;
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ddd;
    padding: 15px;
    background-color: #212121;
    box-shadow: 0px 0px 0px 3px rgba(0,0,0,0.1);
    border-radius: 4px;
    z-index: 10;
`;

export const CloseButton = styled.div`
    font-size: 35px;
    background: none;
    outline: none;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 0;
    position: absolute;
    right: 24px;
    top: 24px;
    transition: transform 0.25s ease-in-out;
    :hover {
        transform: rotate(90deg);
    }
`;