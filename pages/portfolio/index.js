import React from 'react';
import { Container, Div1 } from '../../pagesStyle/PortfolioStyle';
import Navigation from '../../components/Navigation/Navigation';
import MainBar from '../../components/MainBar/MainBar';
import SkillsBar from '../../components/SkillsBar/SkillsBar';
import Projects from '../../components/Projects/index';
import Footer from '../../components/Footer/Footer';
import Map from '../../components/Map/Map';
import { useRouter } from 'next/router';

const MyPortfolio = () => {
    const router = useRouter();

    const theme = {
        mainBar: {
            gridRowEnd: 14,
            gridRowEndLaptop: 12,
        },
    }

    return (
        <Container>
            <Navigation />
            <MainBar theme={theme.mainBar} pathName={router.asPath} />
            <SkillsBar />
            <Projects />
        </Container>
    );
}

export default MyPortfolio;