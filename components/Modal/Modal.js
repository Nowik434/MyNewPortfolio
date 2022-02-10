import React, { useState } from 'react';
import { ContactButton, ButtonText, ReactModal, ModalDialogue, CloseButton } from './ModalStyles';
import ContactForm from '../ContactForm/ContactForm';

const Modal = () => {
    const [modalActive, setModalActive] = useState(false)

    const theme = {
        ContactForm: {
            padding: 0,
        },
    }
    return (
        <ContactButton>
            <ButtonText onClick={() => setModalActive(!modalActive)}>Skontaktuj się</ButtonText>
            {modalActive &&
                <ReactModal>
                    <ModalDialogue>
                        <CloseButton
                            onClick={() => setModalActive(false)}
                            className="btn btn-sm btn-secondary btn-close"
                        >
                            x
                        </CloseButton>
                        <ContactForm theme={theme.ContactForm} />
                    </ModalDialogue>
                </ReactModal>
            }
        </ContactButton>
    );
}

export default Modal;