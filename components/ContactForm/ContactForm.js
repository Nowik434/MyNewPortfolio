import { useForm, ValidationError } from "@formspree/react";
import { EmailInput, Textarea, SubmitButton, Form, Title } from './ContactFormStyle';

export default function ContactForm(props) {
    const [state, handleSubmit] = useForm("xpzbanpg");
    // console.log(props)
    if (state.succeeded) {
        return <p>Dziękuję za przesłanie wiadomości!</p>;
    }

    return (
        <>
            <Form onSubmit={handleSubmit} theme={props.theme}>
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
        </>
    );
}