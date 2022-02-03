import React from 'react';
import { Container, Div1 } from './HomePageStyle';
import Navigation from '../components/Navigation/Navigation'
import MainBar from '../components/MainBar/MainBar'
import SkillsBar from '../components/SkillsBar/SkillsBar'
import Footer from '../components/Footer/Footer';
import Map from '../components/Map/Map';
import { useRouter } from 'next/router';

const HomePage = () => {
    const router = useRouter();

    const theme = {
        mainBar: {
            gridRowStart: 1,
            gridRowEnd: 14,
            gridRowEndLaptop: 12,
            gridTemplateRows: 'repeat(2,1fr)',
            gridTemplateColumns: 'repeat(6,1fr)',
        },
        map: {
            gridColumnStart: 4,
            gridColumnEnd: 7,
            gridRowStart: 19,
            gridRowEnd: 22,
            gridRowStartLaptop: 16,
            gridRowEndLaptop: 18,
            gridRowStartMobile: 18,
            gridRowEndMobile: 25,
            gridColumnStartMobile: 1,
            gridColumnEndMobile: 7,
        },
        footer: {
            gridColumnStart: 1,
            gridColumnEnd: 4,
            gridColumnEndMobile: 7,
            gridRowStart: 19,
            gridRowEnd: 22,
            gridRowStartLaptop: 16,
            gridRowEndLaptop: 18,
            DisplayMobile: 'block',
        }
    };

    return (
        <Container>

            <Navigation />
            <MainBar theme={theme.mainBar} pathName={router.asPath} />
            <SkillsBar />
            <Map theme={theme.map} />
            <Footer theme={theme.footer} />
        </Container>
    );
}

export default HomePage;