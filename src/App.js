import React, { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import About from './components/Pages/About/About';
import Services from './components/Pages/Services/Services';
import MainService from './components/Pages/MainService/MainService';
import Shop from './components/Pages/Shop/Shop';
import PrivacyPolicy from './components/Pages/PrivacyPolicy/PrivacyPolicy';
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

    //Scroll to the top on load-
      useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load
  return (
    <BrowserRouter>
      <div className="App overflow-hidden flex flex-col w-full">
        <Header />
        <Routes>
            <Route exact path="/" element={ <Home /> }>
            </Route>
            <Route exact path="/360shop" element={ <Shop /> }>
            </Route>
            <Route exact path="/about" element={ <About /> }>
            </Route>
            <Route exact path="/services" element={ <Services /> }>
            </Route>
            <Route exact path="/service" element={ <MainService /> }>
            </Route>
            <Route exact path="/privacy-policy" element={ <PrivacyPolicy /> }>
            </Route>
        </Routes>
        <Footer />
        <h2 className={`magicBut text-sm z-10 ${scrollDirection === "down" ? "hide_banner" : "show_banner"}`}>
          <a
            href="https://wa.me/27104300251"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lets chat
          </a>
        </h2>
      </div>
    </BrowserRouter>
  );
}

export default App;
