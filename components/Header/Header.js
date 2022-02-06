import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../assets/pnlogo.png'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import { Container, Div1, Div2, Div3, Div4, HeaderSocialLink, ContactButton, ButtonText } from './HeaderStyle';
import NavbarHamburger from '../../components/NavbarHamburger/NavibarHamburger';

const Header = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, [])

    return (
        <Container>
            <Div1>
                <Link href="/" >
                    <a >
                        <Image src={logo} alt="" width={'70px'} height={'65px'} />
                    </a>
                </Link>
            </Div1>
            <Div2>

            </Div2>
            <Div3>
                <li style={{ display: 'inline-flex', 'grid-column-gap': '10px' }}>
                    <HeaderSocialLink>
                        <a href="/" style={{ listStyleType: 'none' }}>
                            <Image src={github} alt="" width={'40px'} height={'40px'} style={{ color: 'red' }} />
                        </a>
                    </HeaderSocialLink>
                    <HeaderSocialLink>
                        <a href="/" style={{ listStyleType: 'none' }}>
                            <Image src={linkedin} alt="" width={'40px'} height={'40px'} />
                        </a>
                    </HeaderSocialLink>
                </li>
            </Div3>
            <Div4>
                <ContactButton>
                    <a href="/" style={{ listStyleType: 'none', position: 'relative', 'text-decoration': 'none' }}>
                        <ButtonText>Skontaktuj się</ButtonText>
                    </a>
                </ContactButton>
            </Div4>
            {isLoaded ? <NavbarHamburger /> : null}
        </Container>
    );
}

export default Header;