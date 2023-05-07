import React, {useEffect} from 'react'
import './AreDoing.css'
import AreImg from '../Assets/Slides/Salvaged.png'
import { Star } from '@mui/icons-material'

// 
function AreDoing() {
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
    <div className='w-full min-h-[140vh] flex flex-col'>
        <div className='min-h-[70vh] w-full flex flex-col justify-end'>
            <div className='flex flex-col md:flex md:flex-row w-[98%] md:w-[80%] mx-auto min-h-[40vh] translate-y-[200px]'>
                <div className='reveal p-[50px] bg-red-600 flex-1'>
                    <h3 className='text-white'>WHAT WE ARE DOING</h3>

                    <h1 className='text-white mt-[50px]'>Our Sustainability
                    Pledge</h1>

                    <h4 className='text-white mt-[50px]'>Sustainability is more than just a buzzword here at 360 Salvage – it's a way of doing business. We understand the impact of the automotive industry on the environment and are committed to promoting a greener future for our planet and communities. We achieve this by incorporating sustainable practices into every aspect of our operations, from responsible salvaging and recycling of vehicles to reducing waste, conserving energy, and minimising pollution in our daily practices. Our inventory of high-quality, used vehicle parts not only helps reduce CO2 emissions but also supports the circular economy. We continuously strive to innovate and prioritise energy efficiency, waste reduction, and responsible recycling, making eco-friendly alternatives readily available to our customers. With our commitment to sustainability, we aim to create a lasting impact that benefits both our customers and the planet.</h4>

                    <div className='flex mt-[50px] mb-[50px] gap-[20px]'>
                        <div className='flex flex-1 flex-col justify-end'>
                            <hr />
                        </div>
                        <div className='flex flex-1 flex-col justify-end'>
                            <h4 className='flex flex-col justify-end text-white'>READ MORE</h4>
                        </div>
                    </div>
                </div>
                <div className='reveal flex flex-1 flex-col bg-white px-[20px]'>
                    <div className='w-[90px] h-[90px] RoGa rounded-full mt-[50px]'></div>

                    <h3 className='flex align-middle mt-[40px]'>Dr. Benard George CEO, Frujian Logistics</h3>

                    <p className='mt-[30px]'>360 Salvage has been a life saver for all we do, They covered 
                    all our sites nationwide and offered us great prices for all our 
                    un-road -worthy trucks. They also ensured that all the cars 
                    they collected are disposed of ethically and in an 
                    environmentally friendly way.</p>

                    <div className='flex mt-[50px] mb-[50px] gap-[20px]'>
                        <div className='flex flex-1 flex-col justify-end'>
                            <span className='flex Riba gap-[2px]'><Star /> <Star /> <Star /> <Star /> <Star /></span>
                            <hr className='text-gray-600' />
                        </div>
                        <div className='flex flex-1 justify-end'>
                            <h4 className='flex flex-col justify-end text-gray-700 mr-[50px]'>NEXT</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full h-[70vh] flex align-middle'>
            <img src={AreImg} alt='' className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default AreDoing