import { Landing } from './pages/Landing'
import {  Route, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { About } from './pages/About'
import { Community } from './pages/Community'
import { NewsEvents } from './pages/NewsEvents'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/news-and-events" element={<NewsEvents />} />
      </Routes>
    </>
  )
}

export default App
