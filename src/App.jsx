
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import LandingPages from './Pages/LandingPages'
import Watchhistory from './Pages/Watchhistory'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<LandingPages />} />
        <Route path='/home' element={<Home />} />
        <Route path='/watch-history' element={<Watchhistory />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
