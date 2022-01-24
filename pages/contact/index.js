import React from 'react';
import { Container, Div1 } from './ContactStyle';
import Navigation from '../../components/Navigation/Navigation';
import Map from '../../components/Map/Map';
import { useRouter } from 'next/router';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = () => {
    const router = useRouter();

    const theme = {
        Div1: {
            opacity: 0,
        },
        contactForm: {
            opacity: 1,
            padding: '120px',
            fontSize: '40px',
        },
        map: {
            gridColumnStart: 1,
            gridColumnEnd: 2,
            gridRowStart: 12,
            gridRowEnd: 23,
        }
    };

    return (
        <Container>
            <Navigation theme={theme.Div1} />
            <Div1>
                <ContactForm pathName={router.pathname} theme={theme.contactForm} />
            </Div1>
            <Map theme={theme.map} animate={{ opacity: 1 }} />
        </Container>
    );
}

export default Contact;