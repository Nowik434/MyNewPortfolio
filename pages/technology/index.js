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

    return (
        <Container>
            <Navigation />
            <MainBar pathName={router.asPath} />
            <SkillsBar />
            <ParticlesBar />
        </Container>
    );
}

export default AboutMe;