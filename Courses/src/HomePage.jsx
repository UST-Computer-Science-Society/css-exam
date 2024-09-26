import Header from './Components/Header.jsx'
import StartingPage from './StartingPage/StartingPage.jsx'
import Tracks from './Tracks/Tracks.jsx'
import Subjects from './Subjects/Subjects.jsx'
import LatestPage from './LatestPage/LatestPage.jsx'
import Banner from './Components/Banner.jsx'
import Footer from './Components/Footer.jsx'


function HomePage() {
    return (
      <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>
        <Header />
        <StartingPage/>
        <Banner/>
        <Tracks/>
        <Banner/>
        <Subjects/>
        <Banner/>
        <LatestPage/>
        <Footer/>
      </>
    )
  }
  
  export default HomePage