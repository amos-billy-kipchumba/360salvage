import React from 'react'
import './WeDo.css'
import WeDoImg from '../Assets/about/DNR-_360_SALVAGE_BRAND_LOGO-04-removebg-preview.png'
import Green from "../Assets/logo/Icon_Green_Leaf-11-removebg-preview.png"
function WeDo() {
  return (
    <section className='w-full min-h-[120vh] relative overflow-hidden' id='services'>
        <img src={WeDoImg} className='absolute w-full h-full translate-y-[550px] translate-x-[350px] grayscale' alt='' />
        <div className='WeDoOverlay px-[10px] md:px-[30px] lg:px-[100px] relative md:absolute w-full min-h-[100vh] flex flex-col'>
            <h2 className='ml-8 md:ml-0'>WHAT WE DO</h2>

            <div className='mx-auto px-4 py-16 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-[5%] mb-8 md:mb-0'>
                <div className='text-white p-10 relative'>
                    <img src={Green} alt='' className='absolute right-0 top-0 w-[50px]' />
                    <h2>JUNKING</h2>
                    <h4 className='mt-[20px]'>We work with customers and
                    clients to offer affordable, 
                   sustainable motoring solutions
                   that don’t cost the Earth. Our 
                   services are for customers
                   looking for quality used car
                   parts and businesses who want
                    to maximize the financial and 
                   environmental return of their 
                   vehicles.</h4>
                </div>
                <div className='text-white p-10 relative'>
                    <img src={Green} alt='' className='absolute right-0 top-0 w-[50px]' />
                    <h2>MECHANICAL SOLUTIONS</h2>
                    <h4 className='mt-[20px]'>We work with customers and
                    clients to offer affordable, 
                   sustainable motoring solutions
                   that don’t cost the Earth. Our 
                   services are for customers
                   looking for quality used car
                   parts and businesses who want
                    to maximize the financial and 
                   environmental return of their 
                   vehicles.</h4>
                </div>
                <div className='text-white p-10 relative'>
                    <img src={Green} alt='' className='absolute right-0 top-0 w-[50px]' />
                    <h2>VEHICLE PARTS</h2>
                    <h4 className='mt-[20px]'>We work with customers and
                    clients to offer affordable, 
                   sustainable motoring solutions
                   that don’t cost the Earth. Our 
                   services are for customers
                   looking for quality used car
                   parts and businesses who want
                    to maximize the financial and 
                   environmental return of their 
                   vehicles.</h4>
                </div>
            </div>

            <div className='WeDoChild mt-10 text-white mb-8'>
                <span className='text-white'></span>

                <span>ALL OUR SERVICES</span>
            </div>
        </div>
    </section>
  )
}

export default WeDo