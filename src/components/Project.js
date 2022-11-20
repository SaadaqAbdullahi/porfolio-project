import React from 'react'
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Missing from './Missing';
import { Route, Routes } from 'react-router-dom'

const Project = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<About />}
      />
      <Route
        path="/portfolio"
        element={<Portfolio />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route
        path="/resume"
        element={<Resume />}
      />
      <Route
        path="*"
        element={<Missing />}
      />
    </Routes>
  )
}

export default Project