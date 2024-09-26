import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SubjectsList from '../../subjects.json';  // Import subjects from the JSON file
import Chain from '../assets/images/chain.png';
import { useNavigate } from 'react-router-dom';

// Styles for the Paper component with hover effect
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',  // Smooth transition for the shadow
    '&:hover': {
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)',  // Shadow on hover
    },
}));

// Styles for buttons with hover effect
const StyledButton = styled('button')(({ theme, selected }) => ({
    backgroundColor: selected ? '#FF7F0E' : '#6973DB',
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
    '&:hover': {
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',  // Shadow on hover
    },
}));

// Main component
function Subjects() {
    const navigate = useNavigate();
    const title = {
        color: '#287FEB',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '48px',
        marginTop: '100px',
        marginBottom: '25px',
        textAlign: 'center',
    };

    const [selectedButton, setSelectedButton] = useState('Data Science');

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginTop: '20px',
    };

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };


    const handleBoxClick = () => {
        navigate('/subject');
    };

    const renderSubjects = () => {
        const subjects = SubjectsList[selectedButton];
        if (!subjects || !subjects.subjects) {
            return null;
        }

        const filteredSubjects = subjects.subjects.slice(0, Math.max(4, Math.min(6, subjects.subjects.length)));

        return (
            <Box className={'section-load-left'} sx={{ flexGrow: 1, marginTop: '20px' }}>
                <Grid container spacing={3} justifyContent="center">
                    {filteredSubjects.map((subject, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                            <Item>
                                <img
                                    src={Chain}
                                    alt={subject.name}
                                    style={{ width: '100%', borderRadius: '10px' }}
                                />
                                <h3 style={{ color: '#287FEB', margin: '15px 0 0px', textAlign: 'left' }}>{subject.code}</h3>
                                <p style={{ fontWeight: 'bold', margin: '0 0 10px', textAlign: 'left' }}>{subject.name}</p>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <StyledButton selected={false} onClick={handleBoxClick}>
                                        Learn More
                                    </StyledButton>
                                </div>
                            </Item>
                        </Grid>
                    ))}

                </Grid>
            </Box>
        );
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
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='section-load-left' style={{ marginBottom: '200px' }}>
            <div id="Subjects">
                <h1 style={title}>Subjects</h1>
                <p style={{ textAlign: 'center' }}>Choose the specialization below to see the subjects.</p>
            </div>

            <div style={buttonContainerStyle}>
                <StyledButton selected={selectedButton === 'Data Science'} onClick={() => handleButtonClick('Data Science')}>
                    Data Science
                </StyledButton>
                <StyledButton selected={selectedButton === 'Core Science'} onClick={() => handleButtonClick('Core Science')}>
                    Core Science
                </StyledButton>
                <StyledButton selected={selectedButton === 'Game Development'} onClick={() => handleButtonClick('Game Development')}>
                    Game Development
                </StyledButton>
            </div>

            {renderSubjects()}
        </div>
    );
}

export default Subjects;
