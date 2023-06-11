import React, {useEffect} from 'react'
import './About.css'
import AboutImg from '../Assets/about/The art of Salvage-min.jpg'

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
            <p className='reveal mt-[50px]'>Welcome to 360 Salvage, your one-stop-shop for high-quality and affordable salvage and used auto-parts solutions in South Africa. With multiple locations across the country, we offer comprehensive services that cater to a wide range of needs, delivered fast, simply, and hassle-free.</p>
            <p className='reveal mt-[40px]'>Our team of experts offers fast and efficient services that prioritize our customers, guiding them through the process and answering any questions they may have. From salvaging total loss vehicles to providing quality used parts, we make the process as smooth and stress-free as possible.Discover how our customer experience can help you find the right solution for your specific needs at competitive pricing.</p>

            <div className='reveal2 AboutContainerChild mt-10'>
                <span></span>

                <span>FIND OUT MORE</span>
            </div>
        </div>

        <div className='overflow-hidden'>
            <img src={AboutImg} className='trysra w-full h-full object-cover' alt='' />
        </div>
    </section>
  )
}

export default About