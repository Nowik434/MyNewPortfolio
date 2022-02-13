import React from 'react';
import { useForm, ValidationError } from "@formspree/react";
import { Container, Div1, Div2, EmailInput, Textarea, SubmitButton, Form, Title } from '../../pagesStyle/ContactStyle';
import Navigation from '../../components/Navigation/Navigation';
import Map from '../../components/Map/Map';
import { useRouter } from 'next/router';
import ContactForm from '../../components/ContactForm/ContactForm';
import Image from 'next/image'
import Chat from '../../assets/Chat_SVG.svg'

const Contact = () => {
    const router = useRouter();
    const [state, handleSubmit] = useForm("xpzbanpg");
    if (state.succeeded) {
        return <p>Dziękuję za przesłanie wiadomości!</p>;
    }

    const theme = {
        Div1: {
            opacity: 0,
        },
        contactForm: {
            opacity: 1,
            fontSize: '40px',
            padding: '14px',
            // Emailinput: {
            //     height: '177px',
            //     background: '#0000001f',
            //     border: 'none',
            //     borderBottom: 'none',
            // },
            // Textarea: {
            //     height: '177px',
            //     background: '#0000001f',
            //     border: 'none',
            //     borderBottom: 'none',
            // },
        },
        map: {
            gridColumnStart: 1,
            gridColumnEnd: 2,
            gridColumnEndMobile: 7,
            gridRowStart: 14,
            gridRowStartMobile: 16,
            gridRowEnd: 29,
            gridRowStartLaptop: 12,
            gridRowEndLaptop: 23,
        }
    };

    return (
        <Container>
            <Navigation theme={theme.Div1} />
            <Div1>
                {/* <ContactForm pathName={router.pathname} theme={theme.contactForm} /> */}
                <Form onSubmit={handleSubmit}>
                    <Title>Napisz do mnie</Title>
                    <EmailInput id="email" type="email" name="email" placeholder="Adres e-mail" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <Textarea id="message" name="message" placeholder="Wiadomość" />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    <SubmitButton type="submit" disabled={state.submitting}>
                        Wyślij
                    </SubmitButton>
                    <ValidationError errors={state.errors} />
                </Form>
                <Div2>
                    <Image src={Chat} alt="" width={'470px'} height={'465px'} />
                </Div2>
            </Div1>
            <Map theme={theme.map} animate={{ opacity: 1 }} />
        </Container>
    );
}

export default Contact;