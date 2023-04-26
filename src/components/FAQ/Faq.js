import React from 'react'
import './Faq.css'
import Green from "../Assets/logo/Icon_Green_Leaf-11-removebg-preview.png"
import Greener from "../Assets/about/360 Footer Halftone-07-16.png"
function Faq() {
  return (
    <div className='min-h-[100vh] w-full flex flex-col mb-[100px]'>
        <h3 className='mt-[100px] ml-[20px] md:ml-[100px] text-gray-700'>FREQUENTLY ASKED QUESTIONS[FAQs]</h3>

        <div className='w-[85%] mx-auto min-h-[50vh] grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[5%] mt-[40px] md:mt-[100px]'>
            <div className='min-h-[50vh] flex-1 overflow-hidden relative'>
                
                <div className='bg-white/90 w-full min-h-full relative top-0 left-0 flex flex-col p-[50px]'>
                    <img src={Green} alt='' className='absolute right-0 top-0 w-[50px]' />
                    <h2 className='mt-[50px]'>How do you 
                    scrap your car
                    for money?</h2>
                    <h4 className='mt-[50px] text-green-500'>LEARN MORE</h4>

                    <hr />

                    <img src={Greener} alt='' className='Rodni absolute bottom-0 rotate-180 w-[80%]' />
                </div>
            </div>

            <div className='min-h-[50vh] flex-1 overflow-hidden relative text-white'>
                <div className='bg-red-500/90 w-full min-h-full relative top-0 left-0 flex flex-col p-[50px]'>
                    <img src={Green} alt='' className='absolute right-0 top-0 w-[50px]' />
                    <h2 className='mt-[50px] w-[250px]'>What type of
                    cars does 360 
                    Salvage?</h2>

                    <h4 className='mt-[50px] text-white'>LEARN MORE</h4>

                    <hr />
                    <img src={Greener} alt='' className='Rodni absolute bottom-0 rotate-180 w-[80%]' />
                </div>
            </div>

            <div className='min-h-[50vh] flex-1 overflow-hidden relative'>
                <div className='bg-white/90 w-full min-h-full relative top-0 left-0 flex flex-col p-[50px]'>
                    <img src={Green} alt='' className='absolute right-0 top-0 w-[50px]' />
                    <h2 className='mt-[50px] w-[250px]'>What solutions
                    do we have for
                    corporates?</h2>

                    <h4 className='mt-[50px] text-green-500'>LEARN MORE</h4>

                    <hr />

                    <img src={Greener} alt='' className='Rodni absolute bottom-0 rotate-180 w-[80%]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq