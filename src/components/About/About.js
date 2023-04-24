import React from 'react'
import './About.css'
import AboutImg from '../Assets/Slides/The art of Salvage.png'

function About() {
  return (
    <section className='max-w-[1240px] mx-auto px-1 py-8 md:px-4 md:py-16 grid sm:grid-cols-1 lg:grid-cols-2' id='about'>
        <div className='AboutOverlayContainer cursor-pointer select_container bg-white px-[10px] py-[30px] md:p-[50px] '>
            <h2>ABOUT US</h2>
            <h3 className='mt-[50px]'>360 Salvage is an easy way for car owners to get a great price 
            for scrapping their car and help keep the environment clean 
            at the same time. If you’ve got an old or unwanted vehicle, you 
            may be wondering how to dispose of it effectively whilst still 
            getting a good price for it.</h3>
            <h3 className='mt-[40px]'>We operate nationwide and offers car owners great prices for 
            their old and scrap cars. We ensure that all the cars we collect 
            are disposed of ethically and in an environmentally friendly 
            way while the spare parts are professionally refurbished...</h3>

            <div className='AboutContainerChild mt-10'>
                <span></span>

                <span>MEET THE TEAM</span>
            </div>
        </div>

        <div className=''>
            <img src={AboutImg} className='w-full h-full object-cover' alt='' />
        </div>
    </section>
  )
}

export default About