import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import data from '../../latest.json'; // Import your events data

const Event = () => {
  return (
    <>
      <Header />
      <h1 style={{ color: '#287FEB', textAlign: 'center', margin: '100px 0 50px 0' }}>Events</h1>
      <div style={styles.eventContainer}>
        {data.map((event) => (
          <div key={event.id} style={styles.eventCard}>
            <img src={event.image} alt={event.title} style={styles.eventImage} />
            <h2 style={styles.eventTitle}>{event.title}</h2>
            <p style={styles.eventDate}>{event.postedDate}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

const styles = {
  eventContainer: {
    display: 'flex',
    flexDirection: 'row', // Horizontal layout
    flexWrap: 'wrap', // Wrap items on smaller screens
    justifyContent: 'center', // Center items
    backgroundColor: '#287FEB',
    padding: '20px',
    marginBottom:'100px',
  },
  eventCard: {
    backgroundColor: 'white',
    color: '#287FEB',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    padding: '20px',
    width: '250px', // Set a fixed width
    textAlign: 'center',
    flex: '1 1 200px', // Allow the card to grow and shrink
    maxWidth: '300px', // Max width for larger screens
  },
  eventImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  eventTitle: {
    color: '#287FEB',
    margin: '10px 0',
  },
  eventDate: {
    color: '#287FEB',
    margin: '5px 0',
  },
};

export default Event;
