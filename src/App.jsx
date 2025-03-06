import React from 'react'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App