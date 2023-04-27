import React, {useEffect} from 'react'
import './HowItWork.css' 
function HowItWork() {
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
    <div className='HowItWorks max-w-[1200px] mx-auto px-4 py-16 min-h-[100vh] flex flex-col'>
        <h2 className='reveal2'>HOW WE DO IT</h2>
        <div className='reveal HowItWorksCard flex flex-col lg:flex-row'>
            <div className='w-full md:w-[400px] min-h-full flex align-middle bg-red-600/90 gap-8'>
                <h1 className='font-bold text-9xl my-auto ml-2 opacity-40'>1</h1>
                <h2 className='w-full md:w-[250px] text-white my-auto'>ENQUIRY AND 
                    ARRANGING
                    COLLECTION</h2>
            </div>
            <div className='flex flex-grow min-h-full p-8'>
                <h3 className='w-full md:w-[600px] m-auto text-gray-600 font-normal'>Simply share contact details and fill in the <span className='flex align-middle text-green-400 underline'>Vehicle Submission 
                Form</span> to give us more information about the scrap car location 
                and condition. We’ll then get in touch to plan for verification 
                and collection…which is free!</h3>
            </div>
        </div>
        <div className='reveal HowItWorksCard flex flex-col lg:flex-row'>
            <div className='w-full md:w-[400px] min-h-full flex align-middle bg-red-600/90 gap-8'>
                <h1 className='font-bold text-9xl my-auto ml-2 opacity-40'>2</h1>
                <h2 className='w-full md:w-[250px] text-white my-auto'>VERIFICATION 
                    & OWNERSHIP
                    TRANSFER</h2>
            </div>
            <div className='flex flex-grow min-h-full p-8'>
                <h3 className='w-full md:w-[600px] m-auto text-gray-600 font-normal'>You will arrange a convenient time for us to collect your old car.
                One of our representative will come along to pick it up at a time 
                and date agreed with you. At this point the final price is agreed 
                and payment made. Any paper work eg. logbook for your scrap 
                car would be handed over as well- That’s all!</h3>
            </div>
        </div>
        <div className='reveal HowItWorksCard flex flex-col lg:flex-row'>
            <div className='w-full md:w-[400px] min-h-full relative flex align-middle bg-red-600/90 gap-8'>
                <h1 className='font-bold text-9xl my-auto ml-2 opacity-40'>3</h1>
                <h2 className='w-full md:w-[250px] text-white my-auto'>THEN
                    360 SALVAGE 
                    BEGINS</h2>
            </div>
            <div className='flex flex-grow min-h-full p-8'>
                <h3 className='w-full md:w-[600px] m-auto text-gray-600 font-normal'>If your car is still roadworthy , we’ll try and finding a buyer for it. 
                If the car’s unsuitable to be reused, we’ll remove any car parts 
                that we can reuse and sell those on. We’ll then recycle the rest 
                of the car in an authorized treatment facility so we can get 
                money for the scrap metal.</h3>
            </div>
        </div>
    </div>
  )
}

export default HowItWork