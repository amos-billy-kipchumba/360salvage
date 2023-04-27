import React, {useEffect} from 'react'
import './Why.css'
import WhyImg from '../Assets/Slides/Vehicle Salvaged.png'
import LeftImg from '../Assets/about/WHY CHOOSE US-17.png'
import CenterImg from '../Assets/about/WHY CHOOSE US-18.png'
import RightImg from '../Assets/about/WHY CHOOSE US-19.png'
import Green from "../Assets/about/360 Footer Halftone-07-16.png"
function Why() {
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
    <div className='w-full min-h-[100vh] flex flex-col'>
        <div className='w-full h-[60vh]'>
            <img src={WhyImg} alt='' className='w-full h-full object-cover' />
        </div>

        <div className='RoGa w-[98%] lg:w-[98%] xl:w-[80%] mx-auto min-h-[50vh] translate-y-[-200px] pb-[50px] relative'>
            <img src={Green} alt='' className='absolute right-0 top-0 w-[70%]' />
            <h3 className='reveal text-white mt-[50px] ml-[50px]'>WHY CHOOSE US</h3>


            <div className='reveal w-full flex flex-col md:flex md:flex-row mt-[50px]'>
                <div className='flex flex-col flex-1 bdWhy'>
                    <img src={LeftImg} alt='' className='h-[200px] mx-auto my-[50px] object-cover' />
                    <div className='w-full h-[40vh] flex p-[50px] bg-gray-600/10'>
                        <h3 className='text-white'>Our nationwide collection 
                        and verification process is 
                        fast, free and easy</h3>
                    </div>
                </div>
                <div className='reveal flex flex-col flex-1 bdWhy'>
                    <img src={CenterImg} alt='' className='h-[200px] mx-auto my-[50px]' />
                    <div className='w-full h-[40vh] flex p-[50px] bg-gray-600/10'>
                        <h3 className='text-white'>All our Salvage services 
                        are performed by highly 
                        qualified professionals.</h3>
                    </div>
                </div>
                <div className='reveal flex flex-col flex-1'>
                    <img src={RightImg} alt='' className='h-[200px] mx-auto my-[50px]' />
                    <div className='w-full h-[40vh] flex p-[50px] bg-gray-600/10'>
                        <h3 className='text-white'>We offer best prices for 
                        scrap cars and spare parts 
                        with no hidden charges</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Why