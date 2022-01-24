import React from 'react';
import { Container, Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8, Box9, Box10, Box11 } from './SkillsBarStyle';

const SkillsBar = () => {
    return (
        <Container>
            <Box1>
                <i class="devicon-nextjs-original-wordmark"></i>
            </Box1>
            <Box2>
                <i class="devicon-javascript-plain colored"></i>
            </Box2>
            <Box3>
                <i class="devicon-react-original-wordmark colored"></i>
            </Box3>
            <Box4>
                <i class="devicon-firebase-plain-wordmark colored"></i>
            </Box4>
            <Box5>
                <i class="devicon-html5-plain-wordmark colored"></i>
            </Box5>
            <Box6>
                <i class="devicon-css3-plain-wordmark colored"></i>
            </Box6>
            <Box7>
                <i class="devicon-bootstrap-plain colored"></i>
            </Box7>
            <Box8>
                <i class="devicon-sass-original colored"></i>
            </Box8>
            <Box9>
                <i class="devicon-gatsby-plain-wordmark colored"></i>
            </Box9>
            <Box10>
                <i class="devicon-redux-original colored"></i>
            </Box10>
            <Box11>
                <i class="devicon-photoshop-line colored"></i>
            </Box11>
        </Container>
    );
}

export default SkillsBar;