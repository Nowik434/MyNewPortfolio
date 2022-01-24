import React from 'react';
import { Container, Div1, Div2, Div3, Div4, Div5, Title, Subtitle, Image } from './ProjectsStyle';


const MainBar = (props) => {
    console.log("main bar props", props.pathName)
    return (
        <Container href={props.pathName} theme={props.theme} animate={{ opacity: 1 }}>
            <Div1>
                <Image
                    src="/images/projektyvcc.png"
                    alt="vcc"
                />
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

export default MainBar;