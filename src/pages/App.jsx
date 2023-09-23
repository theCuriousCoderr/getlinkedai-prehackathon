import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Register from './Register.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App;