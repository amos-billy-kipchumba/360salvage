import React, {useState, useEffect} from 'react'
import './MainService.css'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { ArrowCircleRightOutlined, ArrowRight } from '@mui/icons-material';
import FirstVid from '../../Assets/banner/Destruction Manenos (online-video-cutter.com)_2_2.mp4'
import SecondVid from '../../Assets/banner/garage_2.mp4'
import ThirdVid from '../../Assets/banner/wheels_2.mp4'
import FourthVid from '../../Assets/banner/parts_2.mp4'
function MainService() {
    const [searchParams] = useSearchParams();

    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);

    var [serviceOVer, setServiceOver] = useState('')
    
    const paramaName = searchParams.get('name');

    const Navigate = useNavigate();

    //Scroll to the top on load-
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})

        if(paramaName === 'JUNK YOUR CAR'){
            setServiceOver(`Say Goodbye to Your Old Car Hassle-Free with 360 Salvage's Selling and Junking Options

            At 360 Salvage, we understand that getting rid of your old or unwanted car can be a headache. That's why we offer two options to help you out: selling or junking. If your car is still in decent condition, we provide a hassle-free way to sell it for a fair and transparent price. Our team of experts will take care of everything from pick-up to payment. However, if your car has reached the end of its life, don't worry, we've got you covered too. Our junk car removal service provides a simple and straightforward process, where we take care of everything from pickup to disposal. With both options, you can trust us to handle the process efficiently and ethically, ensuring that your vehicle is disposed of in an environmentally friendly way.
            `)
        }

        if(paramaName === 'GARAGE'){
            setServiceOver(`Expert Garage Services in Tucson: Trust Us to Keep Your Vehicle Running Smoothly

            We take pride in offering a comprehensive range of garage services to vehicle owners in Tucson. Our team of highly qualified mechanics has the expertise and experience to handle any car problem, whether you drive a passenger car, SUV or medium-sized truck. From routine maintenance like an oil change to more complex services like an engine change, we've got you covered. Our mechanics are skilled in working on both foreign and domestic vehicles, ensuring that your vehicle is in good hands regardless of its make or model. Trust us to keep your vehicle performing at its best before leaving our shop.
            `)
        }

        if(paramaName === 'VEHICLE PARTS'){
            setServiceOver(`Affordable and Environmentally-Friendly: 360 Salvage's Extensive Selection of Used Vehicle Parts

            At 360 Salvage, we have a vast selection of environmentally friendly used vehicle parts. Our inventory of parts is utilized by car owners across the country to quickly and affordably repair their vehicles. By using these parts, we help reduce unnecessary CO2 emissions. We provide matching parts for both personal vehicle improvements and damage-repairable vehicles purchased through our online salvage auction. Additionally, we offer flexible delivery options and all of our parts undergo thorough cleaning and inspection before reaching their new vehicles.
            `)
        }

        if(paramaName === 'WHEELS AND TIRES'){
            setServiceOver(`Reliable Wheels and Tires at Competitive Prices
 
            We understand the importance of having reliable and high-quality wheels and tires, that's why we offer a wide selection of wheels and tires to meet all your needs. Whether you're looking for new or used tires, we have a variety of options to choose from. Our expert team is always on hand to provide advice and guidance, helping you find the perfect wheels and tires for your vehicle. With our top-tier service and competitive prices, you can trust 360 Salvage for all your wheel and tire needs.
            `)
        }
    },[paramaName]);
    //End of Scroll to the top on load
  return (
    <div className='w-full min-h-[100vh] flex flex-col'>
        <div className='w-full h-[25vh] lg:h-[20vh] md:h-[30vh] xl:h-[40vh] pb-8 flex flex-col justify-end bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>{paramaName}</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle text-xs cursor-wait' onClick={()=>{
                    Navigate('/')
                }}>
                    <span className='mr-2 text-gray-600'>For better, for cars</span>
                </h5>
            </div> 
        </div>

        <div className='w-full flex flex-col-reverse xl:flex-row bg-white px-[10px] xl:px-[100px] xl:py-[50px] gap-[20px]'>
            <div className='xds flex flex-col w-[70%] xl:w-[25%] mb-[30px] lg:mb-auto'>
                <div className='w-full flex flex-col'>
                    <div className={`w-full p-4 ${paramaName === 'JUNK YOUR CAR' ? 'colbg text-white' : 'text-gray-800'} text-xs flex justify-between align-middle cursor-pointer ease-out`} onClick={()=>{
                        Navigate(`/service?name=JUNK YOUR CAR`)
                    }}><p className='my-auto'>JUNK YOUR CAR</p> <span className='my-auto'><ArrowRight /></span></div>
                    <div className={`w-full p-4 ${paramaName === 'GARAGE' ? 'colbg text-white' : 'text-gray-800'} text-xs flex justify-between align-middle cursor-pointer ease-out`} onClick={()=>{
                        Navigate(`/service?name=GARAGE`)
                      }}><p className='my-auto'>GARAGE</p> <span className='my-auto'><ArrowRight /></span></div>
                    <div className={`w-full p-4 ${paramaName === 'VEHICLE PARTS' ? 'colbg text-white' : 'text-gray-800'} text-xs flex justify-between align-middle cursor-pointer ease-out`} onClick={()=>{
                        Navigate(`/service?name=VEHICLE PARTS`)
                      }}><p className='my-auto'>VEHICLE PARTS</p> <span className='my-auto'><ArrowRight /></span></div>
                    <div className={`w-full p-4 ${paramaName === 'WHEELS AND TIRES' ? 'colbg text-white' : 'text-gray-800'} text-xs flex justify-between align-middle cursor-pointer ease-out`} onClick={()=>{
                        Navigate(`/service?name=WHEELS AND TIRES`)
                      }}><p className='my-auto'>WHEELS AND TIRES</p> <span className='my-auto'><ArrowRight /></span></div>
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='w-full flex gap-[20px]'>
                    <div className='flex flex-1 h-[20vh] lg:h-[25vh] xl:h-[40vh]'>
                    {paramaName === 'JUNK YOUR CAR' ?
                    <video loop autoPlay muted className='min-h-full min-w-full object-cover'>
                            <source
                            src={FirstVid}
                            type="video/mp4"
                            />
                            Your browser does not support the video tag.
                    </video>
                        :
                    null
                    }

                    {paramaName === 'GARAGE' ?
                    <video loop autoPlay muted className='min-h-full min-w-full object-cover'>
                            <source
                            src={SecondVid}
                            type="video/mp4"
                            />
                            Your browser does not support the video tag.
                    </video>
                        :
                    null
                    }

                    {paramaName === 'VEHICLE PARTS' ?
                    <video loop autoPlay muted className='min-h-full min-w-full object-cover'>
                            <source
                            src={FourthVid}
                            type="video/mp4"
                            />
                            Your browser does not support the video tag.
                    </video>
                        :
                    null
                    }

                    {paramaName === 'WHEELS AND TIRES' ?
                    <video loop autoPlay muted className='min-h-full min-w-full object-cover'>
                            <source
                            src={ThirdVid}
                            type="video/mp4"
                            />
                            Your browser does not support the video tag.
                    </video>
                        :
                    null
                    }
                    
                    </div>
                </div>

                <h3 className='mt-[50px] text-gray-700'>{paramaName} SERVICE OVERVIEW</h3>

                <span className='bodSpan mt-[10px]'></span>

                <p className='mt-[50px]'>{serviceOVer}</p>

                <h3 className='mt-[50px] text-gray-700'>GET {paramaName} SERVICE</h3>

                <form className='xds flex flex-col w-full mt-8 p-4 lg:p-8'>
                    <h4 className='mb-2'>Person Info</h4>
                    <div className='flex flex-col lg:flex-row gap-4 w-full border p-4'>
                        <input type='text' placeholder='Your name' className='shadow-inner flex flex-1 outline-none p-2' />
                        <input type='phone' placeholder='Your phone' className='shadow-inner flex flex-1 outline-none p-2' />
                        <input type='email' placeholder='Your email' className='shadow-inner flex flex-1 outline-none p-2' />
                    </div>

                    <h4 className='mb-2 mt-2'>Vehicle Info</h4>

                    <div className='flex flex-col border'>
                        <div className='flex flex-col lg:flex-row gap-4 w-full p-4'>
                            <input type='text' placeholder='Make' className='shadow-inner flex flex-1 outline-none p-2' />
                            <input type='text' placeholder='Model' className='shadow-inner flex flex-1 outline-none p-2' />
                            <input type='text' placeholder='Year' className='shadow-inner flex flex-1 outline-none p-2' />
                        </div>

                        <div className='flex flex-col lg:flex-row gap-4 w-full p-4'>
                            <input type='text' placeholder='Location' className='shadow-inner flex flex-1 outline-none p-2' />
                            <select className='shadow-inner p-2 flex-1'>
                                <option>--Select service option--</option>
                                <option>Repairs</option>
                                <option>Towing service</option>
                                <option>Spare part</option>
                                <option>Junking</option>
                            </select>
                        </div>

                        <textarea placeholder='Describe condition of your car' className='flex flex-1 outline-none shadow-inner p-2 mx-4 min-h-[30vh]'></textarea>


                        <div className='flex flex-col gap-2 w-full p-4'>
                            <h4>Attach file</h4>
                            <input type='file' placeholder='Attach file' />
                        </div>
                    </div>

                    <button className='scf bg-green-400 text-white p-2 my-4 ml-auto'>Submit</button>
                </form>


                <div className='flex flex-col md:flex-row w-full gap-[20px] mt-[50px]'>
                    <div className='flex flex-col w-[98%] lg:w-[60%]'>
                        <h3 className=' text-gray-700'>POPULAR QUESTIONS</h3>

                        <span className='bodSpan mt-[10px]'></span>

                        {paramaName === 'JUNK YOUR CAR' ?
                        <div className='w-full border flex flex-col mt-[30px] p-[20px] gap-[20px]'>
                            <div className='Ruga w-full delay-300'>
                                <div className='w-full flex hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowOne(!showOne)
                                    if(showTwo === true) {
                                        setShowTwo(false)
                                    }

                                    if(showThree === true) {
                                        setShowThree(false)
                                    }
                                }}>
                                    <span className={`${showOne && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>How do you scrap your car for money?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showOne && "gott"}`}>To scrap your car for money with 360 Salvage, simply contact us through our website or give us a call. We'll provide you with a free quote based on your car's condition and location, and then arrange for a convenient time to pick up your vehicle. Once we collect your car, we'll handle everything else, including disposal and payment.</p>
                            </div>

                            <div className='Ruga w-full delay-300'>
                                <div className='w-full flex hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowTwo(!showTwo)
                                    if(showOne === true) {
                                        setShowOne(false)
                                    }

                                    if(showThree === true) {
                                        setShowThree(false)
                                    }
                                }}>
                                    <span className={`${showTwo && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>What type of cars does 360 Salvage take?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showTwo && "gott"}`}>At 360 Salvage, we take all kinds of cars, regardless of their make, model, or condition. Whether your car is damaged, totaled, or simply no longer roadworthy, we'll take care of it. We even take cars without a title, so don't hesitate to reach out to us if you're unsure whether we can take your vehicle.</p>
                            </div>

                            <div className='Ruga w-full delay-300'>
                                <div className='w-full flex hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowThree(!showThree)
                                    if(showTwo === true) {
                                        setShowTwo(false)
                                    }

                                    if(showOne === true) {
                                        setShowOne(false)
                                    }
                                }}>
                                    <span className={`${showThree && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>What solutions do we have for corporations?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showThree && "gott"}`}>360 Salvage offers a range of solutions for corporates, including tailored salvage and recycling programs, online auctions, and GDPR-compliant data management processes. We work with a variety of industries, from insurance companies to banks, schools, and government organizations, to provide efficient and sustainable solutions for their vehicle salvage and disposal needs. Contact us to learn more about how we can assist your corporate organization.</p>
                            </div>
                        </div>
                        :
                        null
                        }



                        {paramaName === 'GARAGE' ?
                        <div className='w-full border flex flex-col mt-[30px] p-[20px] gap-[20px]'>
                            <div className='Ruga w-full delay-300'>
                                <div className='w-full flex hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowOne(!showOne)
                                    if(showTwo === true) {
                                        setShowTwo(false)
                                    }

                                    if(showThree === true) {
                                        setShowThree(false)
                                    }
                                }}>
                                    <span className={`${showOne && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>What types of vehicles do you work on?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showOne && "gott"}`}>At 360 Salvage, our highly qualified mechanics are skilled in working on all types of vehicles, whether you drive a passenger car, SUV, or medium-sized truck.</p>
                            </div>

                            <div className='Ruga w-full delay-300'>
                                <div className='w-full flex hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowTwo(!showTwo)
                                    if(showOne === true) {
                                        setShowOne(false)
                                    }

                                    if(showThree === true) {
                                        setShowThree(false)
                                    }
                                }}>
                                    <span className={`${showTwo && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>Do you offer any promotions or special offers for mechanical services?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showTwo && "gott"}`}>Yes, we offer a free oil change with any service appointment at 360 Salvage.</p>
                            </div>

                            <div className='Ruga w-full delay-300'>
                                <div className='w-full flex hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowThree(!showThree)
                                    if(showTwo === true) {
                                        setShowTwo(false)
                                    }

                                    if(showOne === true) {
                                        setShowOne(false)
                                    }
                                }}>
                                    <span className={`${showThree && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>What services do you offer to enhance my driving experience?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showThree && "gott"}`}>We offer a professional car audio service to enhance your driving experience, as well as parking sensors calibration to ensure your safety while parking and a car A/C recharge to keep you cool and comfortable during the summer.</p>
                            </div>
                        </div>
                        :
                        null
                        }



                        {paramaName === 'VEHICLE PARTS' ?
                        <div className='w-full border flex flex-col mt-[30px] p-[20px] gap-[20px]'>
                            <div className='Ruga w-full delay-300'>
                                <div className='w-full flex hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowOne(!showOne)
                                    if(showTwo === true) {
                                        setShowTwo(false)
                                    }

                                    if(showThree === true) {
                                        setShowThree(false)
                                    }
                                }}>
                                    <span className={`${showOne && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>How do I find the right part for my vehicle?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showOne && "gott"}`}>At 360 Salvage, we have a vast and diverse database of used auto-parts for all makes and models. Our experienced team can help you identify the exact part you need, making the process quick and hassle-free. Simply provide us with your vehicle's details, and we'll help you find the right component.</p>
                            </div>

                            <div className='Ruga w-full delay-300'>
                                <div className='w-full flex hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowTwo(!showTwo)
                                    if(showOne === true) {
                                        setShowOne(false)
                                    }

                                    if(showThree === true) {
                                        setShowThree(false)
                                    }
                                }}>
                                    <span className={`${showTwo && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>Do you offer delivery services for the auto-parts?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showTwo && "gott"}`}>Yes, we offer delivery services across South Africa for your convenience. We understand that getting your vehicle up and running as quickly as possible is essential, which is why we offer fast and reliable delivery services to ensure that you receive your auto-parts in a timely manner.</p>
                            </div>

                            <div className='Ruga w-full delay-300'>
                                <div className='w-full flex hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowThree(!showThree)
                                    if(showTwo === true) {
                                        setShowTwo(false)
                                    }

                                    if(showOne === true) {
                                        setShowOne(false)
                                    }
                                }}>
                                    <span className={`${showThree && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>How do I make payments for the auto-parts?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showThree && "gott"}`}>We offer multiple payment options, including cash, EFT, and credit card. We strive to make the payment process as convenient as possible for our customers, so you can choose the option that works best for you.</p>
                            </div>
                        </div>
                        :
                        null
                        }



                        {paramaName === 'WHEELS AND TIRES' ?
                        <div className='w-full border flex flex-col mt-[30px] p-[20px] gap-[20px]'>
                            <div className='Ruga w-full delay-300'>
                                <div className='w-full flex hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowOne(!showOne)
                                    if(showTwo === true) {
                                        setShowTwo(false)
                                    }

                                    if(showThree === true) {
                                        setShowThree(false)
                                    }
                                }}>
                                    <span className={`${showOne && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>Can you deliver my wheels/tyres?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showOne && "gott"}`}>Yes, we offer a delivery service for our wheels and tyres. We understand that it can be inconvenient to transport them yourself, which is why we have partnered with reliable delivery companies to ensure that your order arrives at your doorstep quickly and safely.</p>
                            </div>

                            <div className='Ruga w-full delay-300'>
                                <div className='w-full flex hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowTwo(!showTwo)
                                    if(showOne === true) {
                                        setShowOne(false)
                                    }

                                    if(showThree === true) {
                                        setShowThree(false)
                                    }
                                }}>
                                    <span className={`${showTwo && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>How can I find a matching wheel for my vehicle?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showTwo && "gott"}`}>We have a wide range of wheels in stock for various vehicle makes and models. Our team of experts can help you find the right wheel that matches your vehicle's specifications. You can also provide us with your vehicle's make, model and year, and we will assist you in finding the perfect match.</p>
                            </div>

                            <div className='Ruga w-full delay-300'>
                                <div className='w-full flex hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowThree(!showThree)
                                    if(showTwo === true) {
                                        setShowTwo(false)
                                    }

                                    if(showOne === true) {
                                        setShowOne(false)
                                    }
                                }}>
                                    <span className={`${showThree && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>Do you provide a tyre fitting service?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showThree && "gott"}`}>Yes, we offer a tyre fitting service at our locations. Our team of experienced technicians will ensure that your tyres are installed safely and correctly, and that they are balanced and aligned for optimal performance. We also offer other tyre services, including repairs and replacements, so you can count on us for all your tyre needs.</p>
                            </div>
                        </div>
                        :
                        null
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainService