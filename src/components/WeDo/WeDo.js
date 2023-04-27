import React, {useEffect} from 'react'
import './WeDo.css'
import Green from "../Assets/logo/Icon_Green_Leaf-11-removebg-preview.png"
import Greener from "../Assets/about/360 Footer Halftone-07-16.png"
function WeDo() {
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
    <section className='w-full min-h-[120vh] relative overflow-hidden' id='services'>
        <div className='WeDoOverlay px-[10px] md:px-[30px] lg:px-[100px] relative md:absolute w-full min-h-[100vh] flex flex-col'>
            <img src={Greener} alt='' className='absolute bottom-0 rotate-180 w-[70%]' />
            <h2 className='ml-8 md:ml-0'>WHAT WE DO</h2>

            <div className='mx-auto px-4 py-16 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-[5%] mb-8 md:mb-0'>
                <div className='reveal text-white p-10 relative'>
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
                <div className='reveal text-white p-10 relative'>
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
                <div className='reveal text-white p-10 relative'>
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

            <div className='WeDoChild mt-10 text-white mb-8 reveal2'>
                <span className='text-white'></span>

                <span>ALL OUR SERVICES</span>
            </div>
        </div>
    </section>
  )
}

export default WeDo