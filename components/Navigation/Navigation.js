import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../assets/pnlogo.png'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import { Container, NavItem, NavElement, NavLink } from './NavigationStyle';
import ActiveLink from '../ActiveLink/ActiveLink';

const Navigation = () => {
    const router = useRouter();

    return (
        <Container>
            <NavItem>
                <ActiveLink activeClassName="active" href="/">
                    <NavLink onClick={() => router.push('/')}>
                        Strona Główna
                    </NavLink>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/aboutme">
                    <NavLink onClick={() => router.push('/aboutme')}>
                        O Mnie
                    </NavLink>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/technology">
                    <NavLink onClick={() => router.push('/technology')}>
                        Technologie
                    </NavLink>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/portfolio">
                    <NavLink onClick={() => router.push('/portfolio')}>
                        Portfolio
                    </NavLink>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/contact">
                    <NavLink onClick={() => router.push('/contact')}>
                        Kontakt
                    </NavLink>
                </ActiveLink>
            </NavItem>
        </Container>
    );
}

export default Navigation;