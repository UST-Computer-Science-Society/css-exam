import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const navStyle = {
    padding: '21px 20.5px 0',
    fontSize: '13px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
};

const navLinkStyle = {
    padding: '0 20px',
    textDecoration: 'none',
    color: '#287FEB',  // Set the links to blue
};

const navBrandStyle = {
    color: '#287FEB',  // Set the brand to blue
    fontWeight: 700, // Bold the brand name
};

const navCollapseStyle = {
    flexGrow: 1,
    justifyContent: 'center',
    textAlign: 'center',
};

const navStyleMobile = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
};

// Define styles for the navbar when scrolling up or down
const fixedNavbarStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    transition: 'top 0.3s ease',
    zIndex: 1000,
    backgroundColor: '#fff', // Set the background to white
};

const hiddenNavbarStyle = {
    ...fixedNavbarStyle,
    top: '-60px',
};

function Header() {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > lastScrollTop) {
                setIsScrollingUp(false);
                if (isNavbarOpen) {
                    setIsScrollingUp(true);
                }
            } else {
                setIsScrollingUp(true);
            }

            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop, isNavbarOpen]);

    const handleToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <>
            <Navbar expand="lg" bg="light" className="bg-body-tertiary" style={isScrollingUp ? fixedNavbarStyle : hiddenNavbarStyle}>
                <Container>
                    {/* Left: Brand Name in blue */}
                    <Navbar.Brand href="#home" style={navBrandStyle}>CSS</Navbar.Brand>
                    
                    {/* Mobile Toggle */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                    
                    {/* Nav Links with mobile styles and larger screen alignment */}
                    <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-lg-between ${isNavbarOpen ? 'show' : ''}`} style={isNavbarOpen ? navStyleMobile : {}}>
                        {/* Right on large screens, centered on mobile */}
                        <Nav className={`d-flex flex-lg-row align-items-lg-center ${isNavbarOpen ? '' : 'justify-content-lg-end'}`} style={isNavbarOpen ? {} : navCollapseStyle}>
                            <Nav.Link href="/" style={{ ...navStyle, ...navLinkStyle }}>Home</Nav.Link>
                            <Nav.Link href="#Skill" style={{ ...navStyle, ...navLinkStyle }}>About</Nav.Link>
                            <Nav.Link href="#Projects" style={{ ...navStyle, ...navLinkStyle }}>Community</Nav.Link>
                            <Nav.Link href="#Contacts" style={{ ...navStyle, ...navLinkStyle }}>News & Events</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
