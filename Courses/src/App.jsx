import { useState } from 'react'
import Header from './Components/Header.jsx'
import StartingPage from './StartingPage/StartingPage.jsx'
import Tracks from './Tracks/Tracks.jsx'
import Subjects from './Subjects/Subjects.jsx'
import Education from './Education/Education.jsx'
import Contact from './Contacts/Contacts.jsx'
import Footer from './Components/Footer.jsx'

import './App.css'

function App() {
  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>
      <Header/>
      <StartingPage/>
      <Tracks/>
      <Subjects/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
