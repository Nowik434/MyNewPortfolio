import React from 'react';
import { Container, Div1 } from './AboutMeStyle';
import Navigation from '../../components/Navigation/Navigation'
import MainBar from '../../components/MainBar/MainBar'
import SkillsBar from '../../components/SkillsBar/SkillsBar'
import Footer from '../../components/Footer/Footer';
import Map from '../../components/Map/Map';
import { useRouter } from 'next/router';
import ParticlesBar from '../../components/Particles/index';

const AboutMe = () => {
    const router = useRouter();

    const theme = {
        mainBar: {
            transition: 'all 2s',
            transform: true,
            gridRowStart: 2,
            gridRowEnd: 14,
            gridRowEndMobile: 12,
        },
    };

    return (
        <Container>
            <Navigation />
            <MainBar pathName={router.asPath} theme={theme.mainBar} />
            <SkillsBar />
            <ParticlesBar />
        </Container>
    );
}

export default AboutMe;