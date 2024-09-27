import React from 'react';

const Banner = () => {
  const bannerStyle = {
    backgroundColor: '#287FEB',
    color: '#fff',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
  };

  return (
    <div style={bannerStyle}>
      Computer Science Society (CSS)
    </div>
  );
};

export default Banner;