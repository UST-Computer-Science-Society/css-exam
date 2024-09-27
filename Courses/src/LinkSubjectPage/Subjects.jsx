import React from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';

const Subjects = () => {
  return (
    <>
      <Header />
      <h1 style={{ color: '#287FEB', textAlign: 'center', margin: '200px 0 20px 0' }}>Subjects</h1>
      <div style={styles.subjectContainer}>
        <h2 style={styles.subjectName}>Programming</h2>
        <p style={styles.subjectDescription}>
          Programming is the process of creating a set of instructions that tell a computer how to perform a task. 
          It involves writing code in various programming languages, such as Python, Java, and C++, to build software applications, 
          websites, and more. Through programming, individuals can automate tasks, analyze data, and solve complex problems.
        </p>
        <p style={styles.fact}>
          <strong>Did you know?</strong> The first programming language is often credited to Ada Lovelace, who created an algorithm for Charles Babbage's early mechanical general-purpose computer, the Analytical Engine, in the mid-1800s.
        </p>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  subjectContainer: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    width: '90%', // Set width to 90%
    margin: '0 auto', // Center the container
    marginBottom:'100px',
  },
  subjectName: {
    color: '#287FEB',
    textAlign: 'center',
  },
  subjectDescription: {
    fontSize: '1em',
    color: '#555',
    margin: '10px 0',
  },
  fact: {
    fontSize: '1em',
    color: '#287FEB',
    marginTop: '10px',
    textAlign: 'center',
  },
};

export default Subjects;
