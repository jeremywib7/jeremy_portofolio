import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    })

    const onUpdateActiveLink = (path: string) => {
        setActiveLink(path);
        console.log(path);
    }

    return (
        <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    React-Bootstrap
                    <img src={''} alt={"Logo"}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className={"navbar-toggler-icon"}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" onClick={() => {
                            onUpdateActiveLink('home')
                        }}
                                  className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'}>Home</Nav.Link>
                        <Nav.Link href="#skills" onClick={() => {
                            onUpdateActiveLink('skills')
                        }}
                                  className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'}>Skills</Nav.Link>
                        <Nav.Link href="#projects" onClick={() => {
                            onUpdateActiveLink('projects')
                        }}
                                  className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'}>Projects</Nav.Link>
                    </Nav>
                    <span className={"navbar-text"}>
                         <div className={"social-icon"}>
                             <a href=""><img src="" alt=""/></a>
                             <a href=""><img src="" alt=""/></a>
                             <a href=""><img src="" alt=""/></a>
                        </div>
                        <button className={'vvd'} onClick={() => console.log('connect')}>
                            <span>Let's connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
