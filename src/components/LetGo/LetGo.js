import React, {useEffect} from 'react'
import './LetGo.css'
import AboutImg from '../Assets/Slides/old-rusted-car-in-junk-yard-hoping-to-salvage-some-Car.png'

import Greener from "../Assets/about/360 Footer Halftone-07-16.png"
import { Close } from '@mui/icons-material'
function LetGo({onClicky}) {
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
    <div className='w-full flex flex-col md:flex xl:flex-row min-h-[60vh]'>
        <div className='h-[80vh] flex-1 overflow-hidden'>
            <img src={AboutImg} className='trysra h-full object-cover' alt='' />
        </div>
        <div className='min-h-[50vh] flex-1 overflow-hidden relative'>
            <div className='LetGo w-full min-h-full relative top-0 left-0 flex flex-col px-[10px] md:px-[100px]'>
                <button className='absolute top-[5px] right-[5px] bg-red-400 text-white p-4 rounded-md' onClick={onClicky}><Close /></button>
                <img src={Greener} alt='' className='absolute bottom-0 rotate-180 w-[70%]' />
                <h2 className='text-white font-bold text-5xl mt-[50px]'>Have you been thinking 
                of letting go your 
                old car?</h2>
                <h4 className='mt-[50px] text-white'>Kindly enter your email for a quotation and we’ll get in touch 
                ASAP! You’ll also get updates on our auction dates and used 
                parts available in our inventory!</h4>

                <div className='flex w-[98%] md:w-[500px] border border-white mt-[50px] mb-[50px]'>
                    <div className='flex flex-grow bg-transparent'>
                        <input type='email' placeholder='Please enter email here' className='bg-transparent outline-none w-full h-full p-2' />
                    </div>
                    <div className='w-[200px] bg-white text-gray-800 flex align-middle justify-center'>
                        <h3 className='m-auto'>GET A QUOTE</h3>
                    </div>
                </div>

                <p className='text-gray-300 flex flex-wrap text-sm'>Protected by reCAPTCHA. The <span className='flex text-white mx-[5px]'>Google Privacy Policy.</span> and <span className='flex text-white mx-[5px]'>Terms of Service</span> apply.
                <span className='flex text-white mx-[5px] mb-8'>Privacy Policy</span> | Opt out anytime</p>
            </div>
        </div>
    </div>
  )
}

export default LetGo