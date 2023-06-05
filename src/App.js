import React, { useState, useEffect, useRef } from 'react'
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
import Help from './components/Pages/Help/Help';
import SiteMap from './components/Pages/SiteMap/SiteMap';
import UseOfCookies from './components/Pages/UseOfCookies/UseOfCookies';
import LegalInformation from './components/Pages/LegalInformation/LegalInformation';
import EnvironmentAndSustainability from './components/Pages/EnvironmentAndSustainability/EnvironmentAndSustainability';
import AntiSlaveryStatement from './components/Pages/AntiSlaveryStatement/AntiSlaveryStatement';
import CookingSettings from './components/Pages/CookieSettings/CookingSettings';
import Contact from './components/Pages/Contact/Contact';
import LearnMore from './components/Pages/LearnMore/LearnMore';
// import LetGo from './components/LetGo/LetGo'
// 
function App() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
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

    //  Overlay ref
        let overlayRef = useRef();
        useEffect(()=>{
            let handler = (e) => {
                if(showFilter !== false){
                    if(!overlayRef?.current?.contains(e.target)) {
                        setShowFilter(!showFilter);
                    }
                }
            };

            document.addEventListener("mousedown", handler);

            return() => {
                document.removeEventListener("mousedown", handler);
            }
        },[showFilter]);
    // end

    useEffect(() => {
      setTimeout(() => {
        setShowFilter(!showFilter);
      }, 60000);
    }, [showFilter]);
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

            <Route exact path="/help" element={ <Help /> }>
            </Route>
            
            <Route exact path="/search" element={ <Help /> }>
            </Route>

            <Route exact path="/site-map" element={ <SiteMap /> }>
            </Route>

            <Route exact path="/use-of-cookies" element={ <UseOfCookies /> }>
            </Route>

            <Route exact path="/cookie-settings" element={ <CookingSettings /> }>
            </Route>

            <Route exact path="/legal-information" element={ <LegalInformation /> }>
            </Route>

            <Route exact path="/environment-and-sustainability" element={ <EnvironmentAndSustainability /> }>
            </Route>

            <Route exact path="/anti-slavery-statement" element={ <AntiSlaveryStatement /> }>
            </Route>

            <Route exact path="/contact" element={ <Contact /> }>
            </Route>

            <Route exact path="/learn-more" element={ <LearnMore /> }>
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

        {/*
        {showFilter !== false ?
        <div className="aboveAll">
          <LetGo ref={overlayRef} />
        </div>
        :
        null
        }
       */}
      
      </div>
    </BrowserRouter>
  );
}

export default App;
