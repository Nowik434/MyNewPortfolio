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
        // map: {
        //     gridColumnStart: 4,
        //     gridColumnEnd: 7,
        //     gridRowStart: 22,
        //     gridRowEnd: 23,
        // },
        // footer: {
        //     gridColumnStart: 1,
        //     gridColumnEnd: 4,
        //     gridRowStart: 22,
        //     gridRowEnd: 23,
        // }
    };

    return (
        <Container>
            <Navigation />
            <MainBar pathName={router.asPath} />
            <SkillsBar />
            <Map theme={theme.map} />
            <Footer theme={theme.footer} />
        </Container>
    );
}

export default HomePage;