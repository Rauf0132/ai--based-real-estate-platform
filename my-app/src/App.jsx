import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Home from './Home';
export default function App() {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Router>
  )


}