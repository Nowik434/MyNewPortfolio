import React from 'react';
import { Container, Div1 } from './PortfolioStyle';
import Navigation from '../../components/Navigation/Navigation';
import MainBar from '../../components/MainBar/MainBar';
import SkillsBar from '../../components/SkillsBar/SkillsBar';
import Projects from '../../components/Projects/index';
import Footer from '../../components/Footer/Footer';
import Map from '../../components/Map/Map';
import { useRouter } from 'next/router';

const Portfolio = () => {
    const router = useRouter();

    return (
        <Container>
            <Navigation />
            <MainBar pathName={router.asPath} />
            <SkillsBar />
            <Projects />
        </Container>
    );
}

export default Portfolio;