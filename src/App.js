import React, { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import About from './components/Pages/About/About';
import Services from './components/Pages/Services/Services';
// 
function App() {
  const [scrollDirection, setScrollDirection] = useState(null);
    useEffect(()=>{
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            setScrollDirection(direction);
            if(direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY < -10)){
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection);

        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        }
    },[scrollDirection]);
  return (
    <BrowserRouter>
      <div className="App overflow-hidden flex flex-col w-full">
        <Header />
        <Routes>
            <Route exact path="/" element={ <Home /> }>
            </Route>
            <Route exact path="/about" element={ <About /> }>
            </Route>
            <Route exact path="/services" element={ <Services /> }>
            </Route>
        </Routes>
        <Footer />
        <h2 className={`magicBut text-sm z-10 ${scrollDirection === "down" ? "hide_banner" : "show_banner"}`}>Lets chat</h2>
      </div>
    </BrowserRouter>
  );
}

export default App;
