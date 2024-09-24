import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';

// Function to determine if the screen width is below 900px
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const handleChange = () => setMatches(mediaQueryList.matches);

        mediaQueryList.addListener(handleChange);
        return () => mediaQueryList.removeListener(handleChange);
    }, [query]);

    return matches;
};

const StartingPage = () => {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');
    const [isHovered, setIsHovered] = useState(false);

    // Define grid areas based on screen size
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(1, 1fr)',
        gridTemplateAreas: isSmallScreen ? 
            `"profile" "text"` : 
            `"text profile"`,
        gap: '16px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    };

    const introStyle = {
        color: '#287FEB',
        fontSize: '30px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        padding: '250px 0 0'
    };

    const nameStyle = {
        color: '#287FEB',
        fontSize: '40px',
        fontFamily: 'Anton", sans-serif',
        fontWeight: '900',
        fontStyle: 'normal',
    };

    const buttonStyle = {
        backgroundColor: '#6973DB',
        border: 'none',
        borderRadius: '10px',
        color: '#fff',
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        width: '139.5px',
        height: '48px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        width: '100%',
        height: '100%',
        lineHeight: '48px',
    };

    const buttonContainerStyle = {
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        marginTop: '20px',
    };

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll(".section-load-down").forEach(dataLoad => {
                if (isInView(dataLoad)) {
                    dataLoad.classList.add("section-load-down--visible");
                } else {
                    dataLoad.classList.remove("section-load-down--visible");
                }
            });
        };

        const isInView = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.bottom > 0 &&
                rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
            );
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check in case the elements are already in view

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
<>
    <div className="section-load-down" style={gridStyle}>
        <div>
            <p style={introStyle}>
                Need to find your<br/><span style={nameStyle}>Specialization?</span><br/>
                <span style={{color:'black',fontSize:'20px'}}>Find which specialization fits you the best!</span>
            </p>
            <div style={buttonContainerStyle}>
                <Nav.Link href='#Tracks'>
                    <button style={buttonStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <a href="#Tracks" style={linkStyle}>#tracks</a>
                    </button>
                </Nav.Link>
                <Nav.Link href='#Subjects'>
                    <button style={buttonStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <a href="#Subjects" style={linkStyle}>#subjects</a>
                    </button>
                </Nav.Link>
                <Nav.Link href='#Latestpage'>
                    <button style={buttonStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <a href="#Latestpage" style={linkStyle}>#latestpage</a>
                    </button>
                </Nav.Link>
            </div>
        </div>
    </div>
</>

    );
};

export default StartingPage;
