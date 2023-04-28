import React, {useEffect} from 'react'
import './About.css'
import AboutImg from '../Assets/Slides/The art of Salvage.png'

function About() {
  useEffect(()=>{
      window.addEventListener('scroll', reveal);

      function reveal() {
          var reveals = document.querySelectorAll('.reveal');
      

          for(var i = 0; i < reveals.length; i++) {
              var windowheight = window.innerHeight;

              var revealtop = reveals[i].getBoundingClientRect().top;

              var revealpoint = 50;

              if(revealtop < windowheight - revealpoint) {
                  reveals[i].classList.add('active');
              }
              else {
                  reveals[i].classList.remove('active');
              }
          }
      }


      window.addEventListener('scroll', reveal2);

      function reveal2() {
          var reveals2 = document.querySelectorAll('.reveal2');
      

          for(var i = 0; i < reveals2.length; i++) {
              var windowheight2 = window.innerHeight;

              var revealtop2 = reveals2[i].getBoundingClientRect().y;

              var revealpoint2 = 50;

              if(revealtop2 < windowheight2 - revealpoint2) {
                  reveals2[i].classList.add('active');
              }
              else {
                  reveals2[i].classList.remove('active');
              }
          }
      }
  },[])
  return (
    <section className='max-w-[1240px] mx-auto px-1 py-8 md:px-4 md:py-16 grid sm:grid-cols-1 lg:grid-cols-2' id='about'>
        <div className='AboutOverlayContainer cursor-pointer select_container bg-white px-[10px] py-[30px] md:p-[50px] '>
            <h2>ABOUT US</h2>
            <p className='reveal mt-[50px]'>360 Salvage is an easy way for car owners to get a great price 
            for scrapping their car and help keep the environment clean 
            at the same time. If you’ve got an old or unwanted vehicle, you 
            may be wondering how to dispose of it effectively whilst still 
            getting a good price for it.</p>
            <p className='reveal mt-[40px]'>We operate nationwide and offers car owners great prices for 
            their old and scrap cars. We ensure that all the cars we collect 
            are disposed of ethically and in an environmentally friendly 
            way while the spare parts are professionally refurbished...</p>

            <div className='reveal2 AboutContainerChild mt-10'>
                <span></span>

                <span>MEET THE TEAM</span>
            </div>
        </div>

        <div className='overflow-hidden'>
            <img src={AboutImg} className='trysra w-full h-full object-cover' alt='' />
        </div>
    </section>
  )
}

export default About