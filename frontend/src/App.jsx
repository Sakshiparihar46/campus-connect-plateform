import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/'/>
    </Routes>
    </>
  )
}

export default App
