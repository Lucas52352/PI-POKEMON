import './App.css'
import { React } from 'react'
import { Routes, Route, useLocation} from 'react-router-dom'
import LandingPage from './components/Landing/Landing'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Detail from './components/Detail/Detail'

function App() {

  const location = useLocation()

  return (
    <div>
       
      {location.pathname !== '/' && <Navbar />}

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
      
    </div>
  )
}

export default App
