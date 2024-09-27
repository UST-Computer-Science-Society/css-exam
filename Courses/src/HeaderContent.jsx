import React from 'react';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

const programmingContent = [
    {
        title: "What is Programming?",
        description: "Programming is the process of creating a set of instructions that tell a computer how to perform a task. It involves writing code in various programming languages to implement algorithms and manipulate data.",
    },
    {
        title: "Popular Programming Languages",
        description: "Some of the most popular programming languages include JavaScript, Python, Java, C++, and Ruby. Each language has its own syntax and use cases, making them suitable for different types of projects.",
    },
    {
        title: "The Importance of Algorithms",
        description: "Algorithms are fundamental to programming. They are step-by-step procedures for solving problems and are essential for efficient data processing. Understanding algorithms helps in optimizing code performance.",
    },
    {
        title: "Version Control Systems",
        description: "Version control systems like Git allow developers to track changes in code over time. They enable collaboration among multiple developers and help maintain a history of code modifications.",
    },
    {
        title: "Front-End vs. Back-End Development",
        description: "Front-end development focuses on the user interface and user experience, using technologies like HTML, CSS, and JavaScript. Back-end development deals with server-side logic, databases, and application performance.",
    },
    {
        title: "Web Development Frameworks",
        description: "Frameworks such as React, Angular, and Vue.js streamline web development by providing pre-built components and tools. They help developers build scalable and maintainable applications.",
    },
    {
        title: "The Rise of Artificial Intelligence",
        description: "Artificial Intelligence (AI) is transforming programming by enabling machines to learn from data. Tools and libraries like TensorFlow and PyTorch make it easier to develop AI-driven applications.",
    },
    {
        title: "Best Practices in Coding",
        description: "Writing clean, readable code is essential for maintainability. Following best practices such as proper documentation, modularization, and consistent naming conventions greatly improves code quality.",
    },
];

const HeaderContent = () => {
  return (
    <>
        <Header />
        <h1 style={{ textAlign: 'center',color:'#287FEB', margin:'100px 20px 50px'}}>Programming Insights</h1>
        <div style={{ padding: '20px', backgroundColor: '#287FEB', color: 'white', margin:'0 0 100px 0' }}>
            {programmingContent.map((item, index) => (
                <div key={index} style={{ margin: '20px 0', padding: '15px', borderRadius: '8px', backgroundColor: 'white', color: '#287FEB' }}>
                    <h2 style={{ marginBottom: '10px' }}>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
        <Footer />
    </>
  );
};

export default HeaderContent;
