import React from 'react';
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
            gridRow: '2/3',
            gridTemplateRows: 'repeat(2,1fr)',
            gridTemplateColumns: 'repeat(6,1fr)',
        },
        map: {
            gridColumn: '4/7',
            gridColumnMobile: '1/7',
            gridRow: '4/7',
            gridRowMobile: '5/7',
        },
        footer: {
            gridColumn: '1/4',
            gridColumnMobile: '1/7',
            gridRow: '4/7',
            gridRowMobile: '4/5',
            DisplayMobile: 'block',
        }
    };

    return (
        <>
            <Navigation />
            <MainBar theme={theme.mainBar} pathName={router.asPath} />
            <SkillsBar />
            <Map theme={theme.map} />
            <Footer theme={theme.footer} />
        </>
    );
}

export default HomePage;