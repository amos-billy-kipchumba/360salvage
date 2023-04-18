import React, { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Why from './components/Why/Why';
import WeDo from './components/WeDo/WeDo';
import HowItWork from './components/HowItWorks/HowItWork';
import LetGo from './components/LetGo/LetGo';
import Clients from './components/Clients/Clients';
import AreDoing from './components/AreDoing/AreDoing';
import Faq from './components/FAQ/Faq';
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
        <Banner id="home" />
        <About id="about" />
        <Why />
        <WeDo id="services" />
        <HowItWork />
        <LetGo />
        <Clients />
        <AreDoing />
        <Faq />
        <Footer />
        <h2 className={`magicBut text-sm z-10 ${scrollDirection === "down" ? "hide_banner" : "show_banner"}`}>Lets chat</h2>
      </div>
    </BrowserRouter>
  );
}

export default App;
