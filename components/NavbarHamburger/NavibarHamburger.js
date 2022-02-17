import React from 'react';
import { useRouter } from 'next/router'
import { StyledBurger, StyledMenu, NavItem, NavLink } from './NavibarHamburgerStyle';
import ActiveLink from '../ActiveLink/ActiveLink';


const NavibarHamburger = (props) => {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);


    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <StyledMenu open={open}>
                <NavItem>
                    <ActiveLink onClick={() => (router.push('/'), setOpen(!open))} activeClassName="active" href="/">
                        <NavLink>
                            Strona Główna
                        </NavLink>
                    </ActiveLink>
                    <ActiveLink onClick={() => (router.push('/aboutme'), setOpen(!open))} activeClassName="active" href="/aboutme">
                        <NavLink>
                            O Mnie
                        </NavLink>
                    </ActiveLink>
                    <ActiveLink onClick={() => (router.push('/technology'), setOpen(!open))} activeClassName="active" href="/technology">
                        <NavLink>
                            Technologie
                        </NavLink>
                    </ActiveLink>
                    <ActiveLink onClick={() => (router.push('/portfolio'), setOpen(!open))} activeClassName="active" href="/portfolio">
                        <NavLink>
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