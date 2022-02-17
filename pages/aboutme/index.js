import React from 'react';
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
            gridRow: '2/7',
        },
        footer: {
            gridTemplateColumns: '1fr',
            gridColumn: '1/2',
            gridRow: '3/7',
            DisplayMobile: 'none',
        }
    };

    return (
        <>
            <Navigation />
            <MainBar pathName={router.asPath} theme={theme.mainBar} />
            <Footer pathName={router.asPath} theme={theme.footer} animate={{ opacity: 1 }} />
        </>
    );
}

export default AboutMe;