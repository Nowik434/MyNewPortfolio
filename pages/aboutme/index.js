import React from 'react';
import { Container, Div1 } from './AboutMeStyle';
import Navigation from '../../components/Navigation/Navigation'
import MainBar from '../../components/MainBar/MainBar'
import Footer from '../../components/Footer/Footer';
import { useRouter } from 'next/router';

const AboutMe = () => {
    const router = useRouter();

    const theme = {
        mainBar: {
            transition: 'all 2s',
            transform: true,
            gridRowEnd: 28,
        },
        footer: {
            gridTemplateColumns: '1fr',
            gridColumnStart: 1,
            gridColumnEnd: 2,
            gridRowStart: 14,
            gridRowStartLaptop: 12,
            gridRowEnd: 28,
            DisplayMobile: 'none',
        }
    };

    return (
        <Container>
            <Navigation />
            <MainBar pathName={router.asPath} theme={theme.mainBar} />
            <Footer pathName={router.asPath} theme={theme.footer} animate={{ opacity: 1 }} />
        </Container>
    );
}

export default AboutMe;