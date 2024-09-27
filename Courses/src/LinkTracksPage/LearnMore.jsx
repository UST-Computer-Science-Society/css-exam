import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';

const LearnMore = () => {
  return (
    <>
      <Header />
      <h1 style={{ color: '#287FEB', textAlign: 'center', margin: '100px 0 20px 0'}}>Learn More</h1>
      <div style={styles.infoContainer}>
        <h2 style={styles.specializationName}>Data Science</h2>
        <p style={styles.specializationDescription}>
          Data Science is a field that utilizes scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. 
          It combines statistics, mathematics, programming, and domain knowledge to analyze and interpret complex data.
        </p>

        <h2 style={styles.specializationName}>Core Science</h2>
        <p style={styles.specializationDescription}>
          Core Science encompasses foundational scientific disciplines such as physics, chemistry, and biology. 
          This specialization focuses on understanding fundamental principles and theories that explain how the natural world operates.
        </p>

        <h2 style={styles.specializationName}>Game Development</h2>
        <p style={styles.specializationDescription}>
          Game Development is the process of designing, creating, and releasing video games. 
          This specialization combines programming, graphic design, storytelling, and project management skills to produce engaging and interactive gaming experiences.
        </p>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  infoContainer: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    width: '90%', // Set width to 90%
    margin: '0 auto 50px', // Center the container
  },
  specializationName: {
    color: '#287FEB',
    margin: '20px 0 10px',
  },
  specializationDescription: {
    fontSize: '1em',
    color: '#555',
    margin: '10px 0',
    textAlign: 'justify', // Justify text for better readability
  },
};

export default LearnMore;
