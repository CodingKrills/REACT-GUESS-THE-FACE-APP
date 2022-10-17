import React from 'react'

import {
  Routes,
  Route
} from "react-router-dom";

// Import pages 
import Dashboard from './pages/Dashboard'
import Person from './pages/Person'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/person/:personId/step/:stepId" element={<Person />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App