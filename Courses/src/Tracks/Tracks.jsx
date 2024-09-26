import React, { useState, useEffect } from 'react';
import Core from '../assets/images/core.jpg';
import Data from '../assets/images/datascience.jpg';
import Game from '../assets/images/gamedev.jpg';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// Custom Hook for media queries
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

// Styled components
const Container = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '100px 0',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Shadow on hover
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  height: '550px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Shadow on item hover
  },
}));

const StyledButton = styled('button')(({ theme, selected }) => ({
  backgroundColor: selected ? '#D25E00' : '#6973DB',
  border: 'none',
  borderRadius: '10px',
  color: '#fff',
  fontSize: '14px',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 600,
  width: '100%',
  maxWidth: '139.5px',
  height: '48px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  marginTop: 'auto',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Default shadow
  '&:hover': {
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)', // Shadow on button hover
  },
}));

function Tracks() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const [selectedButton, setSelectedButton] = useState(null); // State to track selected button
  const [hoveredButton, setHoveredButton] = useState(null); // State to track hovered button

  const title = {
    color: '#287FEB',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '62.5px',
    marginTop: '100px',
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
    marginBottom: '20px',
  };

  const Logo = {
    borderRadius: '5%',
    width: '100%',
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName); // Set the selected button
  };

  const linkMoreBtn = {
    display: 'flex',
    justifyContent: 'center',
  };

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.section-load-left').forEach((dataLoad) => {
        if (isInView(dataLoad)) {
          dataLoad.classList.add('section-load-left--visible');
        } else {
          dataLoad.classList.remove('section-load-left--visible');
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

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the elements are already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id="Tracks">
        <h1 className="section-load-left" style={title}>Tracks</h1>
      </div>
      <Container>
        <Box className="section-load-left" sx={{ flexGrow: 1 }} style={{ margin: isSmallScreen ? '0 10px' : '0 50px' }}>
          <Grid container spacing={4}>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <Item>
                <div style={imageWrapper}>
                  <img style={Logo} src={Core} alt="Core" />
                </div>
                <h4 style={trackTitle}>Data Science</h4>
                <p style={trackParagraph}>
                  Data Science involves collecting, analyzing, and interpreting large
                  sets of data to uncover insights. It combines statistics, machine
                  learning, and data analysis techniques to help organizations make
                  informed decisions.
                </p>
                <div style={linkMoreBtn}>
                  <StyledButton
                    selected={selectedButton === 'Data Science'}
                    onClick={() => handleButtonClick('Data Science')}
                    onMouseEnter={() => setHoveredButton('Data Science')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    Learn More
                  </StyledButton>
                </div>
              </Item>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <Item>
                <div style={imageWrapper}>
                  <img style={Logo} src={Data} alt="Data Science" />
                </div>
                <h4 style={trackTitle}>Core Science</h4>
                <p style={trackParagraph}>
                  Core programming refers to fundamental concepts like algorithms,
                  data structures, object-oriented programming (OOP), and memory
                  management. These are foundational skills for building software
                  across different domains.
                </p>
                <div style={linkMoreBtn}>
                  <StyledButton
                    selected={selectedButton === 'Core Science'}
                    onClick={() => handleButtonClick('Core Science')}
                    onMouseEnter={() => setHoveredButton('Core Science')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    Learn More
                  </StyledButton>
                </div>
              </Item>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <Item>
                <div style={imageWrapper}>
                  <img style={Logo} src={Game} alt="Game" />
                </div>
                <h4 style={trackTitle}>Game Development</h4>
                <p style={trackParagraph}>
                  Game Development is the process of designing, creating, and
                  programming video games. It involves game design, coding, art
                  creation, and testing, often using engines like Unity or Unreal.
                </p>
                <div style={linkMoreBtn}>
                  <StyledButton
                    selected={selectedButton === 'Game Development'}
                    onClick={() => handleButtonClick('Game Development')}
                    onMouseEnter={() => setHoveredButton('Game Development')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    Learn More
                  </StyledButton>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Tracks;
