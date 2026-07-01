import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Books from './pages/Books'
import Internships from'./pages/Internships'
import Home from './pages/Home'
import Events from './pages/Events'
import Notes from './pages/Notes'
import LoginPopup from './components/LoginPopup'
import Footer from './components/Footer'
import Add from './pages/Add'
function App() {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?< LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books' element={<Books/>}/>
    <Route path='/notes' element={<Notes/>}/>
    <Route path='/internships'element={<Internships/>}/>
    <Route path='/collegeEvents' element={<Events/>}/>
    <Route path='/add' element={<Add/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
