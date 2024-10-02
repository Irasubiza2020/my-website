import React from 'react'
import { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import AboutMe from './Component/AboutMe/AboutMe'
import Skills from './Component/Skills&Education/Skills'
import Service from './Component/Service/Service'
import Recent from './Component/RecentCard/Recent'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'




function App() {
 

  return (
    <>
     <Navbar/>
     <Hero/>
     <AboutMe/>
     <Skills/>
     <Service/>
     <Recent/>
     <Contact/>
     <Footer/>
     
     
     
    </>
  )
}

export default App
