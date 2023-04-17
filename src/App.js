import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './PageNotFound';
// 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <h2 className='magicBut text-sm z-10'>Lets chat</h2>
      </div>
    </BrowserRouter>
  );
}

export default App;
