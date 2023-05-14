import './App.css'
import { React } from 'react'
import { Routes, Route, useLocation} from 'react-router-dom'
import LandingPage from './components/Landing/Landing'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Detail from './components/Detail/Detail'
import Team from './components/Team/Team'

function App() {

  const location = useLocation()

  return (
    <div>

      

      {location.pathname !== '/' && <Navbar />}

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:name' element={<Detail />} />
        <Route path='/team' element={<Team />} />
      </Routes>
      
    </div>
  )
}

export default App
