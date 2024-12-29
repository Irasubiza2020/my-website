import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import AboutMe from './Component/AboutMe/AboutMe';
import Skills from './Component/Skills&Education/Skills';
import Service from './Component/Service/Service';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Project from './Component/Project/Project';
import RecentProject from './Component/Pages/RecentProject';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutMe />
              <Skills />
              <Service />
              <Project />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/recent-projects" element={<RecentProject />} />
      </Routes>
    </Router>
  );
}

export default App;
