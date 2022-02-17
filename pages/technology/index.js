import React from 'react';
import Navigation from '../../components/Navigation/Navigation'
import MainBar from '../../components/MainBar/MainBar'
import SkillsBar from '../../components/SkillsBar/SkillsBar'
import { useRouter } from 'next/router';
import ParticlesBar from '../../components/Particles/index';

const AboutMe = () => {
    const router = useRouter();

    const theme = {
        mainBar: {
            transition: 'all 2s',
            transform: true,
            gridRow: '2/3',
        },
    };

    return (
        <>
            <Navigation />
            <MainBar pathName={router.asPath} theme={theme.mainBar} />
            <SkillsBar />
            <ParticlesBar />
        </>
    );
}

export default AboutMe;