import React from 'react';
import { Container, Div1, Div2, Title, Subtitle } from './MainBarStyle';
import Image from 'next/image';
import image from '../../assets/pn.png'

const MainBar = (props) => {

    return (
        <Container href={props.pathName} theme={props.theme} animate={{ opacity: 1 }}>
            {props.pathName === '/' ? (
                <>
                    <Div1>
                        <Title>Paweł / Front End Developer</Title>
                        <Subtitle>Jestem programistą hobbystą. Zajmuję się tworzeniem aplikacji od 4 lat, głównie z wykorzystaniem biblioteki React</Subtitle>
                    </Div1>
                    <Div2>
                        <Image
                            src={image}
                            alt="Zdjęcie profilowe"
                            layout="fill"
                            objectFit="contain"
                            width={100}
                            className="profileImage"
                        />
                    </Div2>
                </>
            ) : null}

            {props.pathName === '/technology' ? (
                <>
                    <Div1>
                        <Title>Wykorzystywane technologie</Title>
                        <Subtitle>Projekty tworzę głównie z wykorzystaniem biblioteki React i frameworka Next.js. </Subtitle>
                    </Div1>
                    <Div2>
                        {/* <Image
                            src={image}
                            alt="Zdjęcie profilowe"
                            layout="fill"
                            objectFit="contain"
                            width={100}
                            className="profileImage"
                        /> */}
                    </Div2>
                </>
            ) : null}

            {props.pathName === '/aboutme' ? (
                <>
                    <Div1>
                        <Title>O Mnie</Title>
                        <Subtitle>Projekty tworzę głównie z wykorzystaniem biblioteki React i frameworka Next.js. </Subtitle>
                    </Div1>
                    <Div2>
                        {/* <Image
                            src={image}
                            alt="Zdjęcie profilowe"
                            layout="fill"
                            objectFit="contain"
                            width={100}
                            className="profileImage"
                        /> */}
                    </Div2>
                </>
            ) : null}

            {props.pathName === '/portfolio' ? (
                <>
                    <Div1>
                        <Title>Moje projekty</Title>
                        <Subtitle>Ostatnie projekty</Subtitle>
                    </Div1>
                    <Div2>
                        {/* <Image
                            src={image}
                            alt="Zdjęcie profilowe"
                            layout="fill"
                            objectFit="contain"
                            width={100}
                            className="profileImage"
                        /> */}
                    </Div2>
                </>
            ) : null}

        </Container>
    );
}

export default MainBar;