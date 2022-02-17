import React from 'react';
import { Container, Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8, Box9, Box10, Box11 } from './SkillsBarStyle';

const SkillsBar = () => {
    return (
        <Container>
            <Box1>
                <i className="devicon-nextjs-original-wordmark"></i>
            </Box1>
            <Box2>
                <i className="devicon-javascript-plain colored"></i>
            </Box2>
            <Box3>
                <i className="devicon-react-original-wordmark colored"></i>
            </Box3>
            <Box4>
                <i className="devicon-firebase-plain-wordmark colored"></i>
            </Box4>
            <Box5>
                <i className="devicon-html5-plain-wordmark colored"></i>
            </Box5>
            <Box6>
                <i className="devicon-css3-plain-wordmark colored"></i>
            </Box6>
            <Box7>
                <i className="devicon-bootstrap-plain colored"></i>
            </Box7>
            <Box8>
                <i className="devicon-sass-original colored"></i>
            </Box8>
            <Box9>
                <i className="devicon-gatsby-plain-wordmark colored"></i>
            </Box9>
            <Box10>
                <i className="devicon-redux-original colored"></i>
            </Box10>
            <Box11>
                <i className="devicon-photoshop-line colored"></i>
            </Box11>
        </Container>
    );
}

export default SkillsBar;