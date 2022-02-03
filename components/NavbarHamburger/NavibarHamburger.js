import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../assets/pnlogo.png'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import { StyledBurger, StyledMenu, NavItem, NavLink } from './NavibarHamburgerStyle';
import ActiveLink from '../ActiveLink/ActiveLink';


const NavibarHamburger = () => {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    // const node = React.useRef();

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <StyledMenu open={open}>
                <NavItem>
                    <ActiveLink activeClassName="active" href="/">
                        <NavLink onClick={() => (router.push('/'), setOpen(!open))}>
                            Strona Główna
                    </NavLink>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/aboutme">
                        <NavLink onClick={() => (router.push('/aboutme'), setOpen(!open))}>
                            O Mnie
                    </NavLink>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/technology">
                        <NavLink onClick={() => (router.push('/technology'), setOpen(!open))}>
                            Technologie
                    </NavLink>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/portfolio">
                        <NavLink onClick={() => (router.push('/portfolio'), setOpen(!open))}>
                            Portfolio
                    </NavLink>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/contact">
                        <NavLink onClick={() => (router.push('/contact'), setOpen(!open))}>
                            Kontakt
                    </NavLink>
                    </ActiveLink>
                </NavItem>
            </StyledMenu>
        </>
    );
}

export default NavibarHamburger;