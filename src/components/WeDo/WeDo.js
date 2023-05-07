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
    <section className='w-full relative overflow-hidden' id='services'>
        <div className='WeDoOverlay px-[10px] md:px-[30px] lg:px-[100px] relative md:relative w-full lg:min-h-[100vh] flex flex-col bg-black'>
            <img src={Greener} alt='' className='absolute bottom-0 rotate-180 w-[70%]' />
            <h2 className='ml-8 md:ml-0'>WHAT WE DO</h2>

            <div className='mx-auto px-4 py-16 flex flex-col md:flex-row md:flex-wrap w-full gap-x-[5%] xl:gap-x-[5%] gap-y-[30px] mb-8 md:mb-0'>
                <div className='reveal text-white p-10 relative w-[98%] md:w-[45%] xl:w-[30%]'>
                    <img src={Green} alt='' className='absolute right-0 top-0 w-[50px]' />
                    <h2>SELL OR JUNK YOUR CAR</h2>
                    <h4 className='mt-[20px]'>Say goodbye to your old car effortlessly with 360 Salvage's selling and junking options. Fill out our Vehicle Submission Form to receive an instant offer for your car or truck, and we'll handle all the paperwork and make the process as smooth and hassle-free as possible.</h4>
                </div>
                <div className='reveal text-white p-10 relative w-[98%] md:w-[45%] xl:w-[30%]'>
                    <img src={Green} alt='' className='absolute right-0 top-0 w-[50px]' />
                    <h2>MECHANICAL SERVICES</h2>
                    <h4 className='mt-[20px]'>Keep your vehicle running smoothly with our expert mechanical services. Our highly qualified mechanics can handle any car problem, from routine maintenance to engine changes, for all types of vehicles.</h4>
                </div>
                <div className='reveal text-white p-10 relative w-[98%] md:w-[45%] xl:w-[30%]'>
                    <img src={Green} alt='' className='absolute right-0 top-0 w-[50px]' />
                    <h2>GARAGE SERVICES</h2>
                    <h4 className='mt-[20px]'>Comprehensive garage services for all vehicle owners in South Africa. Our highly qualified mechanics can handle any car problem, from routine maintenance to engine changes. Trust us to keep your vehicle performing at its best.</h4>
                </div>
                <div className='reveal text-white p-10 relative w-[98%] md:w-[45%] xl:w-[30%]'>
                    <img src={Green} alt='' className='absolute right-0 top-0 w-[50px]' />
                    <h2>VEHICLE AUTO PARTS</h2>
                    <h4 className='mt-[20px]'>Revive your vehicle with our affordable and high-quality used auto parts. Our vast database covers all makes and models, and each part undergoes thorough cleaning and inspection to ensure quality assurance.</h4>
                </div>
                <div className='reveal text-white p-10 relative w-[98%] md:w-[45%] xl:w-[30%]'>
                    <img src={Green} alt='' className='absolute right-0 top-0 w-[50px]' />
                    <h2>WHEELS & TYRES</h2>
                    <h4 className='mt-[20px]'>Upgrade your vehicle's style and performance with our top-quality wheels and tyres. Our extensive selection of wheels is sure to fit most makes and models, offering options to suit your budget and preferences. With our high-quality wheels, your vehicle will not only look fantastic but will also last for the long haul</h4>
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