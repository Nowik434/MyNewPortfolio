import React from 'react';
import { Container, Div1, Div2, Div3, Div4, Div5, Title, Subtitle, ProjectImage, } from './ProjectsStyle';
import search from '../../assets/search.svg'
import Image from 'next/image'


const PortfolioBar = (props) => {
    return (
        <Container href={props.pathName} theme={props.theme} animate={{ opacity: 1 }}>
            <Div1>
                <ProjectImage
                    src="/images/projektyvcc.png"
                    alt="vcc"
                />
                <Subtitle>
                    <Image src={search} alt="Search" width={'70px'} height={'65px'} />
                </Subtitle>
            </Div1>
            <Div2>
            </Div2>
            <Div3>
            </Div3>
            <Div4>
            </Div4>
            <Div5>
            </Div5>
        </Container>
    );
}

export default PortfolioBar;