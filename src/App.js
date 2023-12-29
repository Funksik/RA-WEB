import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Vlog from './Components/Pages/Vlog';
import Contact from './Components/Pages/Contact';
import SignUp from './Components/Pages/SignUp';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/vlog' Component={Vlog} />
          <Route path='/contact' Component={Contact} />
          <Route path='/sign-up' Component={SignUp} />
        </Routes>        
        <Footer />     
      </Router> 
    </>
  );
}

export default App;
