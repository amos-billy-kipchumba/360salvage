import React, {useState, useEffect} from 'react'
import './About.css'
import { CarRepair, ChargingStation, CheckOutlined, DisplaySettings, Insights, OilBarrel, SensorOccupied, Speaker } from '@mui/icons-material'
import AboutImg2 from '../../Assets/Slides/The art of Salvage.png'
import CountUp from "react-countup";
import SlideData from '../../Banner/SliderData';
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
function About() {
    //Start of sliding arrows

    const [sliderIndex, setSliderIndex] = useState(1);



    //end of sliding arrows

    //Start of sliding arrows

    const nextSlide = () => {
    if(sliderIndex !== SlideData.length) {
        setSliderIndex(sliderIndex + 1);
    }
    else if (sliderIndex === SlideData.length) {
        setSliderIndex(1);
    }
    }

    const prevSlide = () => {
    if(sliderIndex !== 1) {
        setSliderIndex(sliderIndex - 1);
    }
    else if (sliderIndex === 1) {
        setSliderIndex(SlideData.length)
    }
    }


  //end of sliding arrows

    //Scroll to the top on load-
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load
  return (
    <div className='AboutPum w-full flex flex-col'>
        <div className='w-full h-[25vh] lg:h-[20vh] md:h-[30vh] xl:h-[40vh] pb-8 flex flex-col justify-end bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>ABOUT US</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle'>
                    <span className='mr-2 text-gray-600'>YOU ARE HERE:</span>/ <span className='ml-1 text-blue-400'>ABOUT US</span>
                </h5>
            </div>
        </div>

        <div className='w-full flex flex-col md:flex-row bg-white px-[10px] md:px-[100px] py-[100px] gap-[25px]'>
            <div className='flex flex-1 flex-col'>
                <h3 className='text-gray-700'>We offer a full range of garage services to vehicle owners located in Tucson area. All mechanic services are performed by highly qualified mechanics. We can handle any car problem.</h3>
                <p className='mt-[20px]'>We offer full range of garage services to vehicle owners in Tucson. Our professionals know how to handle a wide range of car services. Whether you drive a passenger car or medium sized truck or SUV, our mechanics strive to ensure that your vehicle will be performing at its best before leaving our car shop. Whether you drive a medium sized truck or passenger car or SUV, our mechanics strive to ensure.</p>
                <h3 className='mt-[20px]'>WHY CHOOSE US</h3>

                <span className='w-[100px] flex flex-col text-blue-500 RelSy mt-[10px]'></span>

                <p className='flex align-middle mt-[20px]'><span className='text-blue-500 my-auto mr-[5px]'><CheckOutlined /></span>We make auto repair and maintenance more convenient for you</p>
                <p className='flex align-middle mt-[5px]'><span className='text-blue-500 my-auto mr-[5px]'><CheckOutlined /></span>We are a friendly, helpful and professional group of people</p>
                <p className='flex align-middle mt-[5px]'><span className='text-blue-500 my-auto mr-[5px]'><CheckOutlined /></span>Our professionals know how to handle a wide range of car services</p>
                <p className='flex align-middle mt-[5px]'><span className='text-blue-500 my-auto mr-[5px]'><CheckOutlined /></span>We get the job done right — the first time</p>
                <p className='flex align-middle mt-[5px]'><span className='text-blue-500 my-auto mr-[5px]'><CheckOutlined /></span>Same day service for most repairs and maintenance</p>

                <button className='mr-[auto] bg-blue-500 text-white px-[20px] py-[10px] mt-[20px]'>OUR SERVICES</button>
            </div>
            <div className='flex flex-1 flex-col'>
                <div className='w-full h-[50vh]'>
                    <img src={AboutImg2} className='w-full h-full object-cover' alt='' />
                </div>

                <div className='flex mt-[25px] gap-[25px]'>
                    <div className='flex flex-1 h-[20vh]'>
                        <img src={AboutImg2} className='w-full h-full object-cover' alt='' />
                    </div>
                    <div className='flex flex-1 h-[20vh]'>
                        <img src={AboutImg2} className='w-full h-full object-cover' alt='' />
                    </div>
                </div>
            </div>
        </div>


        <div className='w-full bg-gray-100 px-[10px] md:px-[100px] flex flex-col md:flex-row gap-[20px]'>
            <div className='flex flex-col gap-[10px] p-[10px] md:p-[50px]'>
                
                <h2><CountUp start={0} end={100} duration={2} suffix="%" /></h2>
                <h4>CUSTOMER SATISFACTION</h4>
                <button></button>
            </div>
            <div className='flex flex-col gap-[10px] p-[10px] md:p-[50px]'>
                <h2><CountUp start={0} end={15} duration={2} suffix="" /></h2>
                <h4>CARS REPAIRED PER DAY</h4>
            </div>
            <div className='flex flex-col gap-[10px] p-[10px] md:p-[50px]'>
                <h2><CountUp start={0} end={702} duration={2} suffix="" /></h2>
                <h4>TIRES REPAIRED A YEAR</h4>
            </div>
            <div className='flex flex-col gap-[10px] p-[10px] md:p-[50px]'>
                <h2>5125</h2>
                <h4>TIGHTEN BOLTS</h4>
            </div>
        </div>
        

        <div className='container-sliderer' id="myList">
            {SlideData && SlideData.map((object, index)=>{
            return(
                <section className={sliderIndex === index + 1 ? "slide active-anim h-full w-full flex flex-col justify-center align-middle" : "slide h-full w-full flex flex-col justify-center align-middle"} key={index} id='home'>
                    <span className='text-white mb-6'><Insights /> </span>
                    <h2 className='mx-auto text-white w-[60%] md:w-[40%] flex text-center'>{object.h2}</h2>
                </section>
            )
            })}

            <span className="prever" onClick={prevSlide}><ArrowLeftIcon /></span>
            <span className="nexter" onClick={nextSlide}><ArrowRight /></span>
        </div>

        <div className='bg-white w-full flex flex-col py-[100px]'>
            <h3 className='mx-auto text-gray-600'>COMPANY OVERVIEW</h3>
            <span className='w-[100px] flex flex-col text-blue-400 Rely mt-[20px] mx-auto'></span>

            <h4 className='flex text-center mx-auto w-[50%] mt-[20px]'>We can help you with everything from an oil change to an engine change.
            We can handle any problem on both foreign and domestic vehicles.</h4>
        </div>


        <div className='bg-white mx-auto px-4 xl:px-[100px] py-6 flex w-full flex-wrap gap-[5%]'>
            <div className='flex flex-col min-w-[90%] lg:min-w-[30%] lg:max-w-[30%] mt-[20px] xl:mt-[0px]'>
                <h3>CAR AUDIO SERVICE</h3>

                <div className='flex gap-[20px] mt-[20px]'>
                    <span className=''><Speaker /></span>
                    <h4>Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.</h4>
                </div>
            </div>

            <div className='flex flex-col flex-1 min-w-[90%] lg:min-w-[30%] lg:max-w-[30%] mt-[20px] xl:mt-[0px]'>
                <h3>FREE OIL CHANGE</h3>

                <div className='flex gap-[20px] mt-[20px]'>
                    <span className=''><OilBarrel /></span>
                    <h4>Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.</h4>
                </div>
            </div>

            <div className='flex flex-col flex-1 min-w-[90%] lg:min-w-[30%] lg:max-w-[30%] mt-[20px] xl:mt-[0px]'>
                <h3>ENGINE DIAGNOSTICS</h3>

                <div className='flex gap-[20px] mt-[20px]'>
                    <span className=''><DisplaySettings /></span>
                    <h4>Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.</h4>
                </div>
            </div>

            <div className='flex flex-col flex-1 min-w-[90%] lg:min-w-[30%] lg:max-w-[30%]'>
                <h3>CAR A/C RECHARGE</h3>

                <div className='flex gap-[20px] mt-[20px]'>
                    <span className=''><ChargingStation /></span>
                    <h4>Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.</h4>
                </div>
            </div>

            <div className='flex flex-col flex-1 min-w-[90%] lg:min-w-[30%] lg:max-w-[30%]'>
                <h3>PARKING SENSORS CALIBRATION</h3>

                <div className='flex gap-[20px] mt-[20px]'>
                    <span className=''><SensorOccupied /></span>
                    <h4>Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.</h4>
                </div>
            </div>

            <div className='flex flex-col flex-1 min-w-[90%] lg:min-w-[30%] lg:max-w-[30%]'>
                <h3>CAR BATTERY REPAIRS</h3>

                <div className='flex gap-[20px] mt-[20px]'>
                    <span className=''><CarRepair /></span>
                    <h4>Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About