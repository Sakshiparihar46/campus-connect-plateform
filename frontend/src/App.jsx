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
import AddInternship from './pages/AddInternship'
import { ToastContainer, toast } from 'react-toastify';
import AddEvent from './pages/AddEvent'
function App() {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    <ToastContainer/>
    {showLogin?< LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books' element={<Books/>}/>
    <Route path='/notes' element={<Notes/>}/>
    <Route path='/internships'element={<Internships/>}/>
    <Route path='/collegeEvents' element={<Events/>}/>
    <Route path='/book/add' element={<Add/>}/>
    <Route path='/internship/add' element={<AddInternship/>}/>
    <Route path='/event/add' element={<AddEvent/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
