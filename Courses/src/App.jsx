import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routes
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx'; // Ensure the correct Footer import
import Banner from './Components/Banner.jsx';

import HomePage from './HomePage.jsx'
import Subjets from './LinkSubjectPage/Subjects.jsx'
import LearnMore from './LinkTracksPage/LearnMore.jsx'
import Event from './LinkLatestPage/Event.jsx'

import './App.css';

function App() {
  return (
    <Router> {/* Router needs to wrap everything */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
        crossorigin="anonymous"
      />
      <Header />
      
      {/* Routes Setup */}
      <Routes>
        {/* Navbar route */}


        {/* Home route */}
        <Route path="/" element={<HomePage />} />

        {/* Route for LearnMore page */}
        <Route path="/learnmore" element={<LearnMore/>} />    

        {/* Route for Subjects page */}
        <Route path="/subject" element={<Subjets/>} />    

        {/* Route for Event page */}
        <Route path="/event" element={<Event/>} />    
      </Routes>
    </Router>
  );
}

export default App;
