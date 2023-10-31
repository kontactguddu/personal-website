import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <div className="App">

      {/* <h1>Hello </h1> */}
        <Routes>
          <Route path="personal-website/" element={<Home />} />
          <Route path="personal-website/about" element={<About />} />
          <Route path="personal-website/contact" element={<Contact />} />
        </Routes>
    </div>
    </>
  );
}

export default App;
