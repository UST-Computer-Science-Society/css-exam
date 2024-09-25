import React, { useState } from 'react';
import './Subjects.css';
import Nav from 'react-bootstrap/Nav';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import SubjectsList from '../../subjects.json';

function Subjects() {
    const title = {
        color: '#287FEB',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '62.5px',
        marginTop: '100px',
        marginBottom: '25px',
        textAlign: 'center',
    };

    const [selectedButton, setSelectedButton] = useState('');

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginTop: '20px',
    };

    const buttonStyle = (buttonName) => ({
        backgroundColor: selectedButton === buttonName ? '#FF7F0E' : '#6973DB',
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
    });

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <>
            <div id="Subjects">
                <h1 style={title}>Subjects</h1>
                <p style={{ textAlign: 'center' }}>Choose the specialization below to see the subjects.</p>
            </div>
            <div style={buttonContainerStyle}>
                <button style={buttonStyle('Data Science')} onClick={() => handleButtonClick('Data Science')}>
                    Data Science
                </button>
                <button style={buttonStyle('Core Science')} onClick={() => handleButtonClick('Core Science')}>
                    Core Science
                </button>
                <button style={buttonStyle('Game Development')} onClick={() => handleButtonClick('Game Development')}>
                    Game Development
                </button>
            </div>
        </>
    );
}

export default Subjects;
