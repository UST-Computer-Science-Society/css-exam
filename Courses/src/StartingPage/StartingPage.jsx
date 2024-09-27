import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';

// Function to determine if the screen width is below 600px
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
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const [isHovered, setIsHovered] = useState(null); // For hover state
    const [selectedButton, setSelectedButton] = useState(null); // For selected button state

    // Define grid areas based on screen size
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(1, 1fr)',
        gridTemplateAreas: isSmallScreen ? `"profile" "text"` : `"text profile"`,
        gap: '16px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: '240px',
    };

    const introStyle = {
        color: '#287FEB',
        fontSize: '30px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        padding: '250px 0 0',
    };

    const nameStyle = {
        color: '#287FEB',
        fontSize: '40px',
        fontFamily: 'Anton, sans-serif',
        fontWeight: 900,
        fontStyle: 'normal',
    };

    const buttonStyle = (index) => ({
        backgroundColor: selectedButton === index ? '#D25E00' : (isHovered === index ? '#5F73E4' : '#6973DB'),
        border: 'none',
        borderRadius: '10px',
        color: '#fff',
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        width: '139.5px',
        height: '48px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: isHovered === index ? '0px 8px 15px rgba(0, 0, 0, 0.2)' : 'none', // Shadow effect on hover
    });

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

    // Handle button hover state
    const handleHover = (index) => setIsHovered(index);
    const handleLeave = () => setIsHovered(null);

    // Handle button click for selected state
    const handleClick = (index) => {
        if (selectedButton === index) {
            setSelectedButton(null); // Deselect if already selected
        } else {
            setSelectedButton(index); // Select button
            
            // After 0.5s, deselect the button
            setTimeout(() => {
                setSelectedButton(null);
            }, 500);
        }
    };
    

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll('.section-load-down').forEach((dataLoad) => {
                if (isInView(dataLoad)) {
                    dataLoad.classList.add('section-load-down--visible');
                } else {
                    dataLoad.classList.remove('section-load-down--visible');
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

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check in case the elements are already in view

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="section-load-down" style={gridStyle}>
                <div>
                    <p style={introStyle}>
                        <h2 style={nameStyle}>Need to find your<br />Specialization?<br /></h2>
                        <h6 style={{ color: 'black', margin: '30px 20px', fontFamily: 'Nunito', fontWeight: '800' }}>
                            Find which specialization fits you the best!
                        </h6>
                    </p>
                    <div style={buttonContainerStyle}>
                        {['#Tracks', '#Subjects', '#LatestPage'].map((link, index) => (
                            <Nav.Link href={link} key={index}>
                                <button
                                    style={buttonStyle(index)}
                                    onMouseEnter={() => handleHover(index)}
                                    onMouseLeave={handleLeave}
                                    onClick={() => handleClick(index)}
                                >
                                    <a href={link} style={linkStyle}>
                                        {link.replace('#', '')}
                                    </a>
                                </button>
                            </Nav.Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default StartingPage;
