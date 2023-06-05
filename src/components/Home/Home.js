import React, {useEffect} from 'react'
import Banner from '../Banner/Banner'
import './Home.css'
import About from '../About/About';
import WeDo from '../WeDo/WeDo';
import HowItWork from '../HowItWorks/HowItWork';
import Faq from '../FAQ/Faq';
import Clients from '../Clients/Clients';
import Why from '../Why/Why';
import AreDoing from '../AreDoing/AreDoing';
function Home() {
     //Scroll to the top on load
        useEffect(()=>{
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        },[]);
    //End of Scroll to the top on load
  return (
    <div className='home-container'>
        <Banner />
        <About />
        <Why />
        <WeDo />
        <HowItWork />
        <Clients />
        <AreDoing />
        <Faq />
    </div>
  )
}

export default Home