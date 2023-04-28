import React, {useState, useEffect} from 'react'
import './MainService.css'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { ArrowCircleRightOutlined, CheckOutlined, ArrowRight } from '@mui/icons-material';
import FirstVid from '../../Assets/banner/lots-of-car-tires-in-a-backyard-starting-a-small-b-2023-02-28-19-43-10-utc.mp4'
function MainService() {
    const [searchParams] = useSearchParams();

    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);

    var [serviceOVer, setServiceOver] = useState('')
    
    const paramaName = searchParams.get('name');

    const Navigate = useNavigate()

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
            <div className='flex flex-col w-[70%] xl:w-[25%]'>
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
                    <video loop autoPlay muted className='min-h-full min-w-full object-cover'>
                            <source
                            src={FirstVid}
                            type="video/mp4"
                            />
                            Your browser does not support the video tag.
                    </video>
                    </div>
                </div>

                <h3 className='mt-[50px] text-gray-700'>SERVICE OVERVIEW</h3>

                <span className='bodSpan mt-[10px]'></span>

                <p className='mt-[50px]'>{serviceOVer}</p>

                <h3 className='mt-[50px] text-gray-700'>GET {paramaName} SERVICE</h3>

                <form className='flex flex-col w-full mt-8'>
                    <h4 className='mb-2'>Person Info</h4>
                    <div className='flex flex-col lg:flex-row gap-4 w-full border p-4'>
                        <input type='text' placeholder='Your name' className='flex flex-1 outline-none border p-2' />
                        <input type='phone' placeholder='Your phone' className='flex flex-1 outline-none border p-2' />
                        <input type='email' placeholder='Your email' className='flex flex-1 outline-none border p-2' />
                    </div>

                    <h4 className='mb-2 mt-2'>Vehicle Info</h4>

                    <div className='flex flex-col border'>
                        <div className='flex flex-col lg:flex-row gap-4 w-full p-4'>
                            <input type='text' placeholder='Make' className='flex flex-1 outline-none border p-2' />
                            <input type='text' placeholder='Model' className='flex flex-1 outline-none border p-2' />
                            <input type='text' placeholder='Year' className='flex flex-1 outline-none border p-2' />
                        </div>

                        <div className='flex flex-col lg:flex-row gap-4 w-full p-4'>
                            <input type='text' placeholder='Location' className='flex flex-1 outline-none border p-2' />
                            <select className='border p-2 flex-1'>
                                <option>--Select service option--</option>
                                <option>Repairs</option>
                                <option>Towing service</option>
                                <option>Spare part</option>
                                <option>Junking</option>
                            </select>
                        </div>

                        <textarea placeholder='Describe condition of your car' className='flex flex-1 outline-none border p-2 mx-4 min-h-[30vh]'></textarea>


                        <div className='flex flex-col gap-2 w-full p-4'>
                            <h4>Attach file</h4>
                            <input type='file' placeholder='Attach file' />
                        </div>
                    </div>

                    <button className='bg-green-400 text-white p-2 my-4 ml-auto'>Submit</button>
                </form>


                <div className='flex flex-col md:flex-row w-full gap-[20px] mt-[50px]'>
                    <div className='flex flex-col flex-1'>
                        <h3 className=' text-gray-700'>WHY CHOOSE US</h3>

                        <span className='bodSpan mt-[10px]'></span>


                        <p className='flex align-middle mt-[20px] text-sm'><span className='colRoty my-auto mr-[5px]'><CheckOutlined /></span>Comprehensive Solutions: We offer a wide range of services, from salvage and recycling to repairs and maintenance. This means you can get everything you need under one roof, saving you time, money, and hassle.</p>
                        <p className='flex align-middle mt-[5px] text-sm'><span className='colRoty my-auto mr-[5px]'><CheckOutlined /></span>Environmental Sustainability: We understand the importance of protecting the environment, which is why we are committed to using sustainable and ethical practices in all our operations. Our team ensures that all vehicles we collect are properly recycled, and we refurbish spare parts with the highest level of professionalism.</p>
                        <p className='flex align-middle mt-[5px] text-sm'><span className='colRoty my-auto mr-[5px]'><CheckOutlined /></span>Expert Team: Our team is made up of experienced and knowledgeable professionals who are passionate about what they do. They are committed to providing you with top-notch services and support, helping you find the best solutions for your unique needs.</p>
                        <p className='flex align-middle mt-[5px] text-sm'><span className='colRoty my-auto mr-[5px]'><CheckOutlined /></span>Nationwide Coverage: With our nationwide coverage, we make it easy for you to access our services no matter where you are in the country. This means you can rely on us to handle your project, no matter how big or small.</p>
                        <p className='flex align-middle mt-[5px] text-sm'><span className='colRoty my-auto mr-[5px]'><CheckOutlined /></span>Competitive Pricing: We offer competitive pricing for all our services, ensuring that you get the best value for your money. Our pricing is transparent, and we always work with you to find the most cost-effective solutions for your needs.</p>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <h3 className=' text-gray-700'>POPULAR QUESTIONS</h3>

                        <span className='bodSpan mt-[10px]'></span>

                        <div className='w-full border flex flex-col mt-[30px] p-[20px] gap-[20px]'>
                            <div className='Ruga w-full delay-300'>
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
                                    <h4>How do you scrap your car for money?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showOne && "gott"}`}>To scrap your car for money with 360 Salvage, simply contact us through our website or give us a call. We'll provide you with a free quote based on your car's condition and location, and then arrange for a convenient time to pick up your vehicle. Once we collect your car, we'll handle everything else, including disposal and payment.</p>
                            </div>

                            <div className='Ruga w-full delay-300'>
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
                                    <h4>What type of cars does 360 Salvage take?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showTwo && "gott"}`}>At 360 Salvage, we take all kinds of cars, regardless of their make, model, or condition. Whether your car is damaged, totaled, or simply no longer roadworthy, we'll take care of it. We even take cars without a title, so don't hesitate to reach out to us if you're unsure whether we can take your vehicle.</p>
                            </div>

                            <div className='Ruga w-full delay-300'>
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
                                    <h4>What solutions do we have for corporations?</h4>
                                </div>

                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showThree && "gott"}`}>360 Salvage offers a range of solutions for corporates, including tailored salvage and recycling programs, online auctions, and GDPR-compliant data management processes. We work with a variety of industries, from insurance companies to banks, schools, and government organizations, to provide efficient and sustainable solutions for their vehicle salvage and disposal needs. Contact us to learn more about how we can assist your corporate organization.</p>
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