import React, { useState, useEffect } from 'react';
import data from '../../latest.json';

function LatestPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the post every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  const calculateDaysAgo = (postedDate) => {
    const postDate = new Date(postedDate);
    const today = new Date();
    const diffTime = Math.abs(today - postDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert ms to days
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="LatestPage">
      <h1 className="section-load-left" style={styles.title}>
        Latest Posts
      </h1>
      <div style={styles.carouselContainer}>
        <div style={styles.carousel}>
          {data.map((post, index) => (
            <div
              key={post.id}
              style={{
                ...styles.card,
                transform: currentIndex === index ? 'scale(1.1)' : 'scale(1)',
                opacity: currentIndex === index ? 1 : 0.5
              }}
              className="carousel-card"
            >
              <div style={styles.imageWrapper}>
                <img src={post.image} alt={post.title} style={styles.image} />
                <div style={styles.overlay}></div>
              </div>
              <div style={styles.textContent}>
                <h2>{post.title}</h2>
                <p>{calculateDaysAgo(post.postedDate)} days ago</p>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.dotsContainer}>
          {data.map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                ...styles.dot,
                backgroundColor: currentIndex === index ? '#287FEB' : '#ccc'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  title: {
    color: '#287FEB',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '62.5px',
    marginTop: '100px',
    marginBottom: '25px',
    textAlign: 'center',
  },
  carouselContainer: {
    backgroundColor: '#FFFFFF',
    padding: '100px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  carousel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.5s ease-in-out',
  },
  card: {
    position: 'relative',
    width: '300px',
    height: '400px',
    margin: '0 20px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '80%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '50%',
    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
  },
  textContent: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    color: '#fff',
    zIndex: 2,
  },
  dotsContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  dot: {
    height: '15px',
    width: '15px',
    borderRadius: '50%',
    margin: '0 5px',
    display: 'inline-block',
    cursor: 'pointer',
  },
};

export default LatestPage;
