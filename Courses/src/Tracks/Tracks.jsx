import React, { useState, useEffect } from 'react';
import FrontEndLogo from '../assets/images/web-development.png'
import BackEndLogo from '../assets/images/servers.png'
import GameLogo from '../assets/images/console.png'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


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

function Tracks() {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    const title = {
        color:'#287FEB',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '62.5px',
        marginTop: '200px',
        marginBottom: '25px',
        textAlign: 'center',
    };

    const trackTitle = {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '25px',
        textAlign: 'center',
    };

    const trackParagraph = {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '13px',
        textAlign: 'center',
    };

    const imageWrapper = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px', // Optional
    };

    const colStyle = {
        backgroundColor: '#FFFF ',
        borderRadius: '20px',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow here
    };

    const Logo = {
        width: '50px',
        height: '50px',
    };


    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '550px',
        display: 'flex',
        flexDirection: 'column',
    }));

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll(".section-load-left").forEach(dataLoad => {
                if (isInView(dataLoad)) {
                    dataLoad.classList.add("section-load-left--visible");
                } else {
                    dataLoad.classList.remove("section-load-left--visible");
                }
            });
        };

        const isInView = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.bottom > 0 &&
                rect.top < (window.innerHeight - 120 || document.documentElement.clientHeight - 120)
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
            <div id="Tracks">
                <h1 className="section-load-left" style={title}>Tracks</h1>
            </div>
            <div style={{backgroundColor:'white ', padding:'100px 0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
            <Box className="section-load-left" sx={{ flexGrow: 1 }} style={{margin:isSmallScreen ?'0 10px':'0 100px'}}>
            <Grid container spacing={4}>
                <Grid item lg={4} md={6} sm={12}>
                <Item style={colStyle}>
                <div style={imageWrapper}>
                        <img style={Logo} src={FrontEndLogo} alt="Frontend Logo" />
                </div>
                <h4 style={trackTitle}>Data Science</h4>
                <p style={trackParagraph}>
                    I like to code things from scratch, and enjoy bringing ideas to life in the browser
                </p>
                </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item style={colStyle}>
                <div style={imageWrapper}>
                    <img style={Logo} src={BackEndLogo} alt="Backend Logo" />
                </div>
                <h4 style={trackTitle}>Core Science</h4>
                <p style={trackParagraph}>
                    I enjoy building robust and scalable backend systems to support dynamic and interactive web applications
                </p>           
                </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item style={colStyle}>
                    <div style={imageWrapper}>
                        <img style={Logo} src={GameLogo} alt="Game Logo" />
                    </div>
                    <h4 style={trackTitle}>Game Development</h4>
                    <p style={trackParagraph}>
                        I have experience in creating interactive games and simulations, bringing virtual worlds to life.
                    </p>
                </Item>
                </Grid>
            </Grid>
            </Box>
            </div>                      
        </>
    );
}

export default Tracks;
