import React from 'react';
import { useRouter } from 'next/router'
import { Container, NavItem, NavElement, NavLink } from './NavigationStyle';
import ActiveLink from '../ActiveLink/ActiveLink';
import { device } from '../../components/breakpoints';

const Navigation = () => {
    const router = useRouter();
    console.log(device.mobile)

    return (
        <Container>
            <NavItem>
                <ActiveLink onClick={() => router.push('/')} activeClassName="active" href="/">
                    <NavLink>
                        Strona Główna
                    </NavLink>
                </ActiveLink>
                <ActiveLink onClick={() => router.push('/aboutme')} activeClassName="active" href="/aboutme">
                    <NavLink>
                        O Mnie
                    </NavLink>
                </ActiveLink>
                <ActiveLink onClick={() => router.push('/technology')} activeClassName="active" href="/technology">
                    <NavLink>
                        Technologie
                    </NavLink>
                </ActiveLink>
                <ActiveLink onClick={() => router.push('/portfolio')} activeClassName="active" href="/portfolio">
                    <NavLink>
                        Portfolio
                    </NavLink>
                </ActiveLink>
                <ActiveLink onClick={() => router.push('/contact')} activeClassName="active" href="/contact">
                    <NavLink>
                        Kontakt
                    </NavLink>
                </ActiveLink>
            </NavItem>
        </Container>
    );
}

export default Navigation;