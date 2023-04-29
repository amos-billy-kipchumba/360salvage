import React, {useEffect} from 'react'
import './Faq.css'
import Green from "../Assets/logo/Icon_Green_Leaf-11-removebg-preview.png"
import Greener from "../Assets/about/360 Footer Halftone-07-16.png"
import { useNavigate } from 'react-router-dom'
function Faq() {
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

    const Navigate = useNavigate()
  return (
    <div className='min-h-[100vh] w-full flex flex-col mb-[50px]'>
        <h3 className='mt-[100px] ml-[20px] md:ml-[100px] text-gray-700'>FREQUENTLY ASKED QUESTIONS[FAQs]</h3>

        <div className='w-[85%] mx-auto min-h-[50vh]  flex flex-col md:flex-row md:flex-wrap gap-x-[5%] gap-y-[30px]  mt-[40px] md:mt-[100px]'>
            <div className='reveal2 min-h-[50vh] w-[98%] md:w-[45%] xl:w-[30%] overflow-hidden relative'>
                
                <div className='transssa bg-white/90 w-full min-h-full relative top-0 left-0 flex flex-col p-[50px] hover:bg-red-500/90 hover:text-white'>
                    <img src={Green} alt='' className='absolute right-0 top-0 w-[50px]' />
                    <h2 className='mt-[50px]'>How do you 
                    scrap your car
                    for money?</h2>
                    <h4 className='mt-[50px] text-green-500' onClick={()=>{
                        Navigate(`/learn-more?question=How do you scrap your car for money?&answer=To scrap your car for money with 360 Salvage, simply contact us through our website or give us a call. We'll provide you with a free quote based on your car's condition and location, and then arrange for a convenient time to pick up your vehicle. Once we collect your car, we'll handle everything else, including disposal and payment.`)
                    }}>LEARN MORE</h4>

                    <hr />

                    <img src={Greener} alt='' className='Rodni absolute bottom-0 rotate-180 w-[80%]' />
                </div>
            </div>

            <div className='reveal min-h-[50vh] w-[98%] md:w-[45%] xl:w-[30%] overflow-hidden relative text-white'>
                <div className='transssa bg-red-500/90 w-full min-h-full relative top-0 left-0 flex flex-col p-[50px] hover:bg-white hover:text-red-500'>
                    <img src={Green} alt='' className='absolute right-0 top-0 w-[50px]' />
                    <h2 className='mt-[50px] w-[250px]'>What type of cars does 360 Salvage take?</h2>

                    <h4 className='mt-[50px]' onClick={()=>{
                        Navigate(`/learn-more?question=What type of cars does 360 Salvage take?&answer=At 360 Salvage, we take all kinds of cars, regardless of their make, model, or condition. Whether your car is damaged, totaled, or simply no longer roadworthy, we'll take care of it. We even take cars without a title, so don't hesitate to reach out to us if you're unsure whether we can take your vehicle.`)
                    }}>LEARN MORE</h4>

                    <hr />
                    <img src={Greener} alt='' className='Rodni absolute bottom-0 rotate-180 w-[80%]' />
                </div>
            </div>

            <div className='reveal2 min-h-[50vh] w-[98%] md:w-[45%] xl:w-[30%] overflow-hidden relative'>
                <div className='transssa bg-white/90 w-full min-h-full relative top-0 left-0 flex flex-col p-[50px] hover:bg-red-500/90 hover:text-white'>
                    <img src={Green} alt='' className='absolute right-0 top-0 w-[50px]' />
                    <h2 className='mt-[50px] w-[250px]'>What solutions do we have for corporations?</h2>

                    <h4 className='mt-[50px] text-green-500' onClick={()=>{
                        Navigate(`/learn-more?question=What solutions do we have for corporations?&answer=360 Salvage offers a range of solutions for corporates, including tailored salvage and recycling programs, online auctions, and GDPR-compliant data management processes. We work with a variety of industries, from insurance companies to banks, schools, and government organizations, to provide efficient and sustainable solutions for their vehicle salvage and disposal needs. Contact us to learn more about how we can assist your corporate organization.`)
                    }}>LEARN MORE</h4>

                    <hr />

                    <img src={Greener} alt='' className='Rodni absolute bottom-0 rotate-180 w-[80%]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq