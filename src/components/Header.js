import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {
    NavLink,
    Link
  } from "react-router-dom";

import Logo from '../assets/images/logo.png';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="/"><img src={Logo} alt="logo" /></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" exact  activeclassname="active" to="/">Home</NavLink>
                        <NavLink className="nav-link" exact  activeclassname="active" to="/nft-marketplace">Nft Marketplace</NavLink>
                        <Link className="nav-link" to="/">DEFI</Link>
                        <Link className="nav-link" to="/">CRICKET 360</Link>
                        <Link className="nav-link" to="/">CoMMUNITY</Link>
                        <Link className="nav-link" to="/">FAQ</Link>
                        <Link className="nav-link" to="/">SUPPORT</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="btn btn-transparent" href="./">SIGN IN</Nav.Link>
                        <Nav.Link className="btn btn-shadow btn-primary" href="./">SIGN UP</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;