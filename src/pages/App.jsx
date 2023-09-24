import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Register from './Register.jsx';

function App() {
  const [sideNav, setSideNav] = useState(false);
  
  function handleSideBarScroll(title) {
		setSideNav(false);
		scroll = document.getElementById(title);
		scroll.scrollIntoView({behavior: 'smooth'});
	}
  return (
    <Routes>
      <Route path="/" element={<Home sideNav={sideNav} setSideNav={setSideNav} handleSideBarScroll={handleSideBarScroll} />} />
      <Route path="/contact" element={<Contact sideNav={sideNav} setSideNav={setSideNav} handleSideBarScroll={handleSideBarScroll} />} />
      <Route path="/register" element={<Register sideNav={sideNav} setSideNav={setSideNav} handleSideBarScroll={handleSideBarScroll} />} />
    </Routes>
  )
}

export default App;