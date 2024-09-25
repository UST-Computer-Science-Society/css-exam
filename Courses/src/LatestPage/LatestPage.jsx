import React, { useState, useEffect } from 'react';
import data from '../../latest.json';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const handleChange = () => setMatches(mediaQueryList.matches);

        mediaQueryList.addListener(handleChange);
        return () => mediaQueryList.removeListener(handleChange);
    }, [query]);

};

function LatestPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width: 600px)');

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

    const getPositionStyles = (index) => {
        const offset = index - currentIndex;

        // Center post
        if (offset === 0) {
            return {
                transform: 'translateX(0) scale(1.1)',
                zIndex: 2,
                opacity: 1,
            };
        }

        // Left of center
        if (offset === -1 || (offset === data.length - 1 && currentIndex === 0)) {
            return {
                transform: 'translateX(-150%) scale(0.8)',
                zIndex: 1,
                opacity: 0.5,
            };
        }

        // Right of center
        if (offset === 1 || (offset === -(data.length - 1) && currentIndex === data.length - 1)) {
            return {
                transform: 'translateX(150%) scale(0.8)',
                zIndex: 1,
                opacity: 0.5,
            };
        }

        // Hidden posts
        return {
            display: 'none',
        };
    };

    const handleScroll = () => {
        const element = document.querySelector('#LatestPage');
        if (isInView(element)) {
            setVisible(true);
        }
    };

    const isInView = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.bottom > 0 &&
            rect.top < (window.innerHeight - 120 || document.documentElement.clientHeight - 120)
        );
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check in case the element is already in view

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="LatestPage">
            <h1 className={`section-load-left ${visible ? 'section-load-left--visible' : ''}`} style={styles.title}>
                Latest Posts
            </h1>
            <div style={styles.carouselContainer}>
                <Box className="section-load-left" sx={{ display: 'flex', justifyContent: 'center' }} style={{ margin: isSmallScreen ? '0 10px' : '0 50px' }}>
                    <div style={styles.carousel}>
                        {data.map((post, index) => (
                            <div
                                key={post.id}
                                style={{
                                    ...styles.card,
                                    ...getPositionStyles(index),
                                }}
                                className="carousel-card"
                            >
                                <div style={styles.imageWrapper}>
                                    <img src={post.image} alt={post.title} style={styles.image} />
                                    <div style={styles.overlay}></div>
                                    <div style={styles.textContent}>
                                        <h2>{post.title}</h2>
                                        <p>{calculateDaysAgo(post.postedDate)} days ago</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Box>
                <br />
                <div style={styles.dotsContainer}>
                    {data.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => handleDotClick(index)}
                            style={{
                                ...styles.dot,
                                backgroundColor: currentIndex === index ? '#287FEB' : '#ccc',
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
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
    },
    carousel: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: '400px',
        transition: 'transform 0.5s ease-in-out',
    },
    card: {
        position: 'absolute',
        width: '300px',
        height: '400px',
        margin: '0 10px',
        cursor: 'pointer',
        transition: 'transform 0.5s ease, opacity 0.5s ease',
    },
    imageWrapper: {
        position: 'relative',
        width: '100%',
        height: '100%',
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
