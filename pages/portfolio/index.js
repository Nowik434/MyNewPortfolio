import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import MainBar from '../../components/MainBar/MainBar';
import SkillsBar from '../../components/SkillsBar/SkillsBar';
import Projects from '../../components/Projects/index';
import { useRouter } from 'next/router';

const MyPortfolio = () => {
    const router = useRouter();

    const theme = {
        mainBar: {
            gridRow: '2/3',
        },
    }

    return (
        <>
            <Navigation />
            <MainBar theme={theme.mainBar} pathName={router.asPath} />
            <SkillsBar />
            <Projects />
        </>
    );
}

export default MyPortfolio;