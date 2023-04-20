import React, {useState, useEffect} from 'react'
import './MainService.css'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { ArrowCircleRightOutlined, CheckOutlined, ArrowRight } from '@mui/icons-material';
import FirstImg from '../../Assets/services/image_02.jpg'
import SecondImg from "../../Assets/services/image_03.jpg"
function MainService() {
    const [searchParams] = useSearchParams();

    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    
    const paramaName = searchParams.get('name');

    const Navigate = useNavigate()

    //Scroll to the top on load-
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load
  return (
    <div className='w-full min-h-[100vh] flex flex-col'>
        <div className='w-full h-[25vh] lg:h-[20vh] md:h-[30vh] xl:h-[40vh] pb-8 flex flex-col justify-end bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>{paramaName}</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle'>
                    <span className='mr-2 text-gray-600'>YOU ARE HERE:</span>/ SERVICE<span className='ml-1 text-blue-400'>{paramaName}</span>
                </h5>
            </div> 
        </div>

        <div className='w-full flex flex-col-reverse xl:flex-row bg-white px-[10px] xl:px-[100px] xl:py-[50px] gap-[20px]'>
            <div className='flex flex-col w-[70%] xl:w-[25%]'>
                <div className='w-full flex flex-col'>
                    <div className='w-full p-4 bg-blue-600 text-white text-xs flex justify-between align-middle' nClick={()=>{
                        Navigate(`/service?name=ENGINE DIAGNOSTICS`)
                      }}><p className='my-auto'>ENGINE DIAGNOSTICS</p> <span className='text-white my-auto'><ArrowRight /></span></div>
                    <div className='bordBot w-full p-4 text-xs flex justify-between align-middle hover:text-blue-500 ease-in-out' onClick={()=>{
                        Navigate(`/service?name=LUBE, OIL AND FILTERS`)
                      }}><p className='my-auto'>LUBE, OIL AND FILTERS</p> <span className='my-auto'><ArrowRight /></span></div>
                    <div className='bordBot w-full p-4 text-xs flex justify-between align-middle hover:text-blue-500 ease-in-out' onClick={()=>{
                        Navigate(`/service?name=BELTS AND HOSES`)
                      }}><p className='my-auto'>BELTS AND HOSES</p> <span className='my-auto'><ArrowRight /></span></div>
                    <div className='bordBot w-full p-4 text-xs flex justify-between align-middle hover:text-blue-500 ease-in-out'><p className='my-auto' onClick={()=>{
                        Navigate(`/service?name=AIR CONDITIONING`)
                      }}>AIR CONDITIONING</p> <span className='my-auto'><ArrowRight /></span></div>
                    <div className='bordBot w-full p-4 text-xs flex justify-between align-middle hover:text-blue-500 ease-in-out' onClick={()=>{
                        Navigate(`/service?name=BRAKE REPAIR`)
                      }}><p className='my-auto'>BRAKE REPAIR</p> <span className='my-auto'><ArrowRight /></span></div>
                    <div className='bordBot w-full p-4 text-xs flex justify-between align-middle hover:text-blue-500 ease-in-out' onClick={()=>{
                        Navigate(`/service?name=TIRE AND WHEEL SERVICES`)
                      }}><p className='my-auto'>TIRE AND WHEEL SERVICES</p> <span className='my-auto'><ArrowRight /></span></div>
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='w-full flex gap-[20px]'>
                    <div className='flex flex-1 h-[20vh] lg:h-[25vh] xl:h-[40vh]'>
                        <img src={FirstImg} className='w-full h-full object-cover' alt='' />
                    </div>
                    <div className='flex flex-1 h-[20vh] lg:h-[25vh] xl:h-[40vh]'>
                        <img src={SecondImg} className='w-full h-full object-cover' alt='' />
                    </div>
                </div>

                <h3 className='mt-[50px] text-gray-700'>SERVICE OVERVIEW</h3>

                <span className='bodSpan mt-[10px]'></span>

                <p className='mt-[50px]'>We offer a full range of garage services to vehicle owners in Tucson. Our professionals know how to handle a wide range of car services. Whether you drive a passenger car or medium sized truck or SUV, our mechanics strive to ensure that your vehicle will be performing at its best before leaving our car shop. We can help you with everything from an oil change to an engine change. We can handle any problem on both foreign and domestic vehicles.</p>

                <p className='mt-[50px]'>Our professionals know how to handle a wide range of car services. Whether you drive a passenger car or medium sized truck or SUV, our mechanics strive to ensure that your vehicle will be performing at its best.</p>

                <h3 className='mt-[50px] text-gray-700'>PRICING</h3>

                <span className='bodSpan mt-[10px]'></span>

                <div className='w-full flex mt-[50px]'>
                    <div className='bodRight flex flex-col flex-1'>
                        <div className='bord bg-gray-100 w-full p-4 text-sm flex justify-end align-middle hover:text-blue-500 ease-in-out'><p className='my-auto'>Front Brakes Repair</p></div>
                        <div className='bord bg-white w-full p-4 text-sm flex justify-end align-middle hover:text-blue-500 ease-in-out'><p className='my-auto'>Rear Brakes Repair</p></div>
                        <div className='bord bg-gray-100 w-full p-4 text-sm flex justify-end align-middle hover:text-blue-500 ease-in-out'><p className='my-auto'>Rear Brakes Shoes</p></div>
                        <div className='bord bg-white w-full p-4 text-sm flex justify-end align-middle hover:text-blue-500 ease-in-out'><p className='my-auto'>Axle</p></div>
                        <div className='bord bg-gray-100 w-full p-4 text-sm flex justify-end align-middle hover:text-blue-500 ease-in-out'><p className='my-auto'>Starters / Alternators</p></div>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <div className='bord bg-gray-100 w-full p-4 text-sm flex justify-start align-middle hover:text-blue-500 ease-in-out'><p className='my-auto'>$49.95</p></div>
                        <div className='bord bg-white w-full p-4 text-sm flex justify-start align-middle hover:text-blue-500 ease-in-out'><p className='my-auto'>$59.95</p></div>
                        <div className='bord bg-gray-100 w-full p-4 text-sm flex justify-start align-middle hover:text-blue-500 ease-in-out'><p className='my-auto'>$65.25</p></div>
                        <div className='bord bg-white w-full p-4 text-sm flex justify-start align-middle hover:text-blue-500 ease-in-out'><p className='my-auto'>$149.95 Each</p></div>
                        <div className='bord bg-gray-100 w-full p-4 text-sm flex justify-start align-middle hover:text-blue-500 ease-in-out'><p className='my-auto'>$225.95 Plus Parts</p></div>
                    </div>
                </div>


                <div className='flex flex-col md:flex-row w-full gap-[20px] mt-[50px]'>
                    <div className='flex flex-col flex-1'>
                        <h3 className=' text-gray-700'>WHY CHOOSE US</h3>

                        <span className='bodSpan mt-[10px]'></span>

                        <p className='mt-[30px]'>
                            We offer a full range of garage services to vehicle owners in Tucson. We can help you with everything from an oil change to an engine change. We can handle any problem on both foreign and domestic vehicles.
                        </p>

                        <p className='flex align-middle mt-[20px] text-sm'><span className='text-blue-500 my-auto mr-[5px]'><CheckOutlined /></span>We make auto repair more convenient for you</p>
                        <p className='flex align-middle mt-[5px] text-sm'><span className='text-blue-500 my-auto mr-[5px]'><CheckOutlined /></span>We are a friendly, helpful and professional group of people</p>
                        <p className='flex align-middle mt-[5px] text-sm'><span className='text-blue-500 my-auto mr-[5px]'><CheckOutlined /></span>We handle a wide range of car services</p>
                        <p className='flex align-middle mt-[5px] text-sm'><span className='text-blue-500 my-auto mr-[5px]'><CheckOutlined /></span>Same day service for most repairs and maintenance</p>
                        <p className='flex align-middle mt-[5px] text-sm'><span className='text-blue-500 my-auto mr-[5px]'><CheckOutlined /></span>We get the job done right — the first time</p>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <h3 className=' text-gray-700'>POPULAR QUESTIONS</h3>

                        <span className='bodSpan mt-[10px]'></span>

                        <div className='w-full border flex flex-col mt-[30px] p-[20px] gap-[20px]'>
                            <div className='Ruga w-full'>
                                <div className='w-full flex justify-around hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowOne(!showOne)
                                    if(showTwo === true) {
                                        setShowTwo(false)
                                    }

                                    if(showThree === true) {
                                        setShowThree(false)
                                    }
                                }}>
                                    <span className={`${showOne && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>Should I consider using synthetic oil?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showOne && "gott"}`}>Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger ones.</p>
                            </div>

                            <div className='Ruga w-full'>
                                <div className='w-full flex justify-around hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowTwo(!showTwo)
                                    if(showOne === true) {
                                        setShowOne(false)
                                    }

                                    if(showThree === true) {
                                        setShowThree(false)
                                    }
                                }}>
                                    <span className={`${showTwo && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>Should I consider using synthetic oil?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showTwo && "gott"}`}>Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger ones.</p>
                            </div>

                            <div className='Ruga w-full'>
                                <div className='w-full flex justify-around hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowThree(!showThree)
                                    if(showTwo === true) {
                                        setShowTwo(false)
                                    }

                                    if(showOne === true) {
                                        setShowOne(false)
                                    }
                                }}>
                                    <span className={`${showThree && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>Should I consider using synthetic oil?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showThree && "gott"}`}>Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger ones.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainService