import React from 'react';
import Email from '../assets/images/email.png';
import Facebook from '../assets/images/facebook.png';
import Twitter from '../assets/images/twitter.png';
import Instagram from '../assets/images/instagram.png';

const footerStyle = {
  backgroundColor: '#007bff', // Blue background like the image
  color: 'white',
  padding: '40px 50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: 'Arial, sans-serif',
  flexWrap: 'wrap', // Allows wrapping on smaller screens
};

const logoStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '20px', // Adds space for mobile
};

const textStyle = {
  color: 'white',
  marginTop: '5px',
  fontSize: '16px',
};

const boxContainer = {
  backgroundColor: '#F0F0F0',
  color: '#287FEB',
  padding: '8px 12px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
  fontSize: '14px',
  marginTop: '10px',
};

const linksStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '14px',
};

const socialStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  fontSize: '14px',
  marginBottom: '20px', // Adds space for mobile
};

// Adding media query styles for responsiveness
const mediaQueryStyles = {
  '@media (max-width: 768px)': {
    footerStyle: {
      flexDirection: 'column', // Stack elements vertically on smaller screens
      textAlign: 'center', // Center content for mobile
      padding: '20px',
    },
    logoStyle: {
      alignItems: 'center',
    },
    socialStyle: {
      textAlign: 'center',
    },
  },
};

const Footer = () => {
  return (
    <footer style={{ ...footerStyle, ...mediaQueryStyles.footerStyle }}>
      <div style={{ ...logoStyle, ...mediaQueryStyles.logoStyle }}>
        <h2 style={{ fontSize: '28px', margin: 0 }}>Courses</h2>
        <p style={{ fontSize: '18px', margin: '5px 0' }}>CSS Headliner</p>
        <div style={boxContainer}>
          Passionately designed & developed by CSS 💻
        </div>
      </div>

      {/* New parent div for links and social */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '600px' }}>
        <div style={linksStyle}>
          <h4 style={{ margin: 0 }}>UST Computer Science Society</h4>
          <p>About Us</p>
          <p>Community</p>
          <p>News & Events</p>
        </div>

        <div style={{ ...socialStyle, ...mediaQueryStyles.socialStyle }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={Email} alt="Email" style={{ width: '20px', marginRight: '10px' }} />
            <span>Email</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={Facebook} alt="Facebook" style={{ width: '20px', marginRight: '10px' }} />
            <span>Facebook</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={Twitter} alt="Twitter" style={{ width: '20px', marginRight: '10px' }} />
            <span>Twitter</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={Instagram} alt="Instagram" style={{ width: '20px', marginRight: '10px' }} />
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
