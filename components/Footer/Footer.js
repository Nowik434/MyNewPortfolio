import React from 'react';
import { Container, Div } from './FooterStyle';
import ContactForm from "../ContactForm/ContactForm";


const Footer = ({ theme, pathName }) => {
    return (
        <Container theme={theme} animate={{ opacity: 1 }}>
            {pathName !== '/aboutme' ? (
                <Div>
                    <a href="https://github.com/Nowik434">
                        <img alt="github skills" align="center" src="https://github-readme-stats.vercel.app/api?username=nowik434&show_icons=true&bg_color=212121&icon_color=d1e241&text_color=d1e241&border_color=212121&title_color=d1e241" />
                    </a>
                </Div>
            ) : null}
            <ContactForm />
        </Container>
    );
}

export default Footer;