import React, {useEffect} from 'react'
import './About.css'
import { CarRepair, ChargingStation, CheckOutlined, DisplaySettings, OilBarrel, SensorOccupied, Speaker } from '@mui/icons-material'
import AboutImg2 from '../../Assets/Slides/The art of Salvage.png'
import AboutImg3 from '../../Assets/Slides/old-rusted-car-in-junk-yard-hoping-to-salvage-some-Car.png'
import AboutImg4 from '../../Assets/Slides/Vehicle Salvaged.png'
import { useNavigate } from 'react-router-dom';
function About() {
    //Start of sliding arrows

    const Navigate = useNavigate()



    //end of sliding arrows

    //Start of sliding arrows



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

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle text-xs cursor-wait' onClick={()=>{
                    Navigate('/')
                }}>
                    <span className='mr-2 text-gray-600'>For better, for cars</span>
                </h5>
            </div>
        </div>

        <div className='w-full flex flex-col md:flex-row bg-white px-[10px] md:px-[100px] py-[100px] gap-[25px]'>
            <div className='flex flex-1 flex-col'>
                <h3 className=''>Fast. Simple. Hassle-Free</h3>
                <p className=' text-gray-700 mt-[20px]'>At 360 Salvage we're more than just a salvage company, we're a leading provider of   high-quality and affordable salvage and used auto-parts solutions to vehicle owners across South Africa. With multiple locations throughout the country, we offer comprehensive services that are fast, simple, and hassle-free, that cater to a wide range of needs.</p>
                <p className='mt-[20px]'>We understand that time is of the essence, which is why our team of highly experienced experts offer fast and efficient services that prioritise our customers, guiding them through the process and answering any questions they may have, helping them find the right solution for their specific needs.</p>
                <p className='mt-[20px]'>Salvaging a vehicle can be a challenging experience, and we’ve made the process as smooth and stress-free as possible, taking care of the entire process by providing a simplified and seamless customer experience across our end-to-end salvaging solutions, at very competitive pricing. If you’re searching for the perfect spare part, our wide catalogue of quality used parts ensures that you will find what you need. We pride ourselves on our commitment to quality assurance, ensuring that every part is thoroughly inspected and cleaned before being made available to our customers.</p>
                <p className='mt-[20px]'>Ours is to go above and beyond the expectations of our customers by continuously improving our services to provide the best possible experience, at every touch point.</p>
                <h3 className='mt-[20px]'>Our Mission & Vision</h3>
                <p className='mt-[20px]'>Vision Statement: To be the leading provider of fast, efficient, and hassle-free salvage and used auto-parts solutions that exceed customer expectations throughout South Africa.</p>
                <p className='mt-[20px]'>Mission Statement: At 360 Salvage, our mission is to simplify the salvaging process and provide high-quality and affordable solutions, while prioritising our customers' needs through a comprehensive and seamless customer experience, backed by a commitment to quality assurance and continuous improvement.</p>
                <h3 className='mt-[20px]'>Our Values</h3>
                <h3 className='mt-[20px]'>Driven by Values: Our Commitment to Sustainability, Innovation, Customer Satisfaction, Transparency, and Expertise</h3>
                <p className='mt-[20px]'>At 360 Salvage, we're guided by a set of core values that define who we are and how we 
                do business. We're committed to providing clear and concise information to our customers, using plain language and visuals to help them understand the process. 
                </p>
            </div>
            <div className='flex flex-1 flex-col'>
                <div className='w-full h-[50vh] hidden xl:flex'>
                    <img src={AboutImg2} className='w-full h-full object-cover' alt='' />
                </div>

                <div className='flex mt-[25px] gap-[25px]'>
                    <div className='flex flex-1 h-[20vh]'>
                        <img src={AboutImg3} className='w-full h-full object-cover' alt='' />
                    </div>
                    <div className='flex flex-1 h-[20vh]'>
                        <img src={AboutImg4} className='w-full h-full object-cover' alt='' />
                    </div>
                </div>

                <h3 className='mt-[40px]'>WHY CHOOSE US</h3>

                <span className='w-[100px] flex flex-col text-green-500 RelSy mt-[10px]'></span>

                <p className='flex align-middle mt-[20px]'><span className='text-green-500 my-auto mr-[5px]'><CheckOutlined /></span>Transparency: We believe in operating with honesty and integrity, and always providing our customers with clear and transparent information about our services and pricing.</p>
                <p className='flex align-middle mt-[5px]'><span className='text-green-500 my-auto mr-[5px]'><CheckOutlined /></span>Customer Satisfaction: We strive to provide the highest level of customer service and support, ensuring that our clients have a positive and seamless experience with us.</p>
                <p className='flex align-middle mt-[5px]'><span className='text-green-500 my-auto mr-[5px]'><CheckOutlined /></span>Expertise: Our team of salvage experts are highly skilled and knowledgeable, with years of experience in the industry. We take pride in offering top-tier advice and guidance to our customers.</p>
                <p className='flex align-middle mt-[5px]'><span className='text-green-500 my-auto mr-[5px]'><CheckOutlined /></span>Innovation: We are dedicated to staying at the forefront of the salvage industry by constantly exploring new and innovative solutions to improve our services and processes.</p>
                <p className='flex align-middle mt-[5px]'><span className='text-green-500 my-auto mr-[5px]'><CheckOutlined /></span>Sustainability: We are committed to minimising our environmental impact by utilising the latest eco-friendly technologies and best practices.</p>

                <button className='reveal mr-[auto] bg-green-500 text-white px-[20px] py-[10px] mt-[20px]' onClick={()=>{
                    Navigate('/services')
                }}>OUR SERVICES</button>
            </div>
        </div>

        

        <div className='bg-white w-full flex flex-col py-[50px] px-[10px] lg:px-[100px]'>
            <h3 className='mx-auto text-gray-600'>Our Team</h3>
            <span className='w-[100px] flex flex-col text-green-400 Rely mt-[20px] mx-auto'></span>

            <h3 className='mt-[20px] font-bold'>Driving Quality Service</h3>

            <p className='mx-auto mt-[20px]'>At 360 Salvage, we take pride in having a team of highly qualified and experienced professionals who are passionate about delivering the best possible service to our clients. Our team of experts includes skilled mechanics, knowledgeable sales representatives, and efficient administrative staff.</p>

            <p className='mx-auto mt-[20px]'>With our commitment to quality and excellence, we ensure that each member of our team is well-trained and equipped to handle any task with precision and efficiency. From providing transparent and fair quotes to offering expert advice on auto repairs and parts, our team is dedicated to providing exceptional service to all our customers.</p>

            <p className='mx-auto mt-[20px]'>We believe that the success of our business lies in the hands of our team. That's why we invest in ongoing training and development to ensure that our team members are up-to-date with the latest industry trends and technologies. With 360 Salvage, you can trust that you are working with a team of professionals who are passionate about what they do and are committed to delivering the best possible experience to our clients.</p>


            <h3 className='mx-auto text-gray-600'>WHAT WE DO</h3>

            <p className='mx-auto mt-[20px]'>Our services cater to customers seeking quality used auto parts and businesses looking to optimise the financial value of their vehicles. From selling or junking your old car effortlessly to expert mechanical services and a comprehensive selection of wheels and tires, we offer a range of sustainable and cost-effective solutions that meet your requirements.</p>

        </div>

        <div className='bg-white w-full flex flex-col py-[10px] px-[10px] lg:px-[100px]'>
            <h3 className='mx-auto text-gray-600'>Our Services</h3>

            <p className='mx-auto mt-[20px]'>Our business activities focus on the following capabilities.</p>

            <h3 className='mt-[20px]'>1. SELL OR JUNK YOUR CAR</h3>

            <h4 className='mt-[20px] font-bold'>Say Goodbye to Your Old Car Hassle-Free with 360 Salvage's Selling and Junking Options</h4>

            <h3 className='mt-[20px]'>Step 1: Provide Details About Your Vehicle</h3>

            <p className='mt-[20px]'>To get started, fill out our Vehicle Submission Form with details about your car or truck. We'll ask you questions about the year, make, model, mileage and condition of the vehicle. Be honest and accurate when answering, including any details about damage or missing parts to the vehicle or ownership documentation you have. If you're trying to sell a junk car with no title, we may be able to assist you.</p>

            <h3 className='mt-[20px]'>Step 2: Get an Instant Offer</h3>

            <p className='mt-[20px]'>360 Salvage differentiates itself from other car buyers by offering an instant offer in most cases. We strive to make the best offer possible and pay the best prices whenever we can. If we can't make an instant offer, we'll typically provide an offer within 1-2 business days. Unfortunately, depending on the condition of some vehicles, we may not be able to buy every submission made.</p>

            <h3 className='mt-[20px]'>Step 3: Easy Pickup Process</h3>

            <p className='mt-[20px]'>If you accept our offer, we'll gather some additional details about the vehicle, such as the vehicle's registration number, and colour, and we may also ask for photos to verify the condition of the vehicle before scheduling a pickup time. We offer flexible scheduling, usually processing pick and pay within 48 business hours, including nights and weekends. Towing and pickup are always free with no hidden costs or fees, and we’ll handle all the paperwork.</p>



            <h3 className='mt-[20px]'>2. GARAGE SERVICES</h3>

            <h4 className='mt-[20px] font-bold'>Expert Mechanical Services in South Africa, to Keep Your Vehicle Running Smoothly</h4>

            <p className='mt-[20px]'>We take pride in offering a comprehensive range of mechanical services to vehicle owners in South Africa . Our team of highly qualified mechanics has the expertise and experience to handle any car problem, whether you drive a passenger car, SUV or medium-sized truck. From routine maintenance like an oil change to more complex services like an engine change, we've got you covered. Our mechanics are skilled in working on all types of vehicles, ensuring that your vehicle is in good hands regardless of its make or model.</p>
        </div>


        <div className='bg-white mx-auto px-4 xl:px-[100px] py-6 flex w-full flex-wrap gap-[5%] gap-y-[30px]'>
            <div className='flex flex-col min-w-[90%] lg:min-w-[30%] lg:max-w-[30%] mt-[20px] xl:mt-[0px]'>
                <h4>CAR AUDIO SERVICE</h4>

                <div className='flex gap-[20px] mt-[20px]'>
                    <span className=''><Speaker /></span>
                    <p>Enhance your driving experience with our professional car audio service.</p>
                </div>
            </div>

            <div className='flex flex-col flex-1 min-w-[90%] lg:min-w-[30%] lg:max-w-[30%] mt-[20px] xl:mt-[0px]'>
                <h4>FREE OIL CHANGE</h4>

                <div className='flex gap-[20px] mt-[20px]'>
                    <span className=''><OilBarrel /></span>
                    <p>Get a free oil change with any service appointment at 360 Salvage.</p>
                </div>
            </div>

            <div className='flex flex-col flex-1 min-w-[90%] lg:min-w-[30%] lg:max-w-[30%] mt-[20px] xl:mt-[0px]'>
                <h4>ENGINE DIAGNOSTICS</h4>

                <div className='flex gap-[20px] mt-[20px]'>
                    <span className=''><DisplaySettings /></span>
                    <p>Keep your engine running smoothly with our expert engine diagnostics.</p>
                </div>
            </div>

            <div className='flex flex-col flex-1 min-w-[90%] lg:min-w-[30%] lg:max-w-[30%]'>
                <h4>CAR A/C RECHARGE</h4>

                <div className='flex gap-[20px] mt-[20px]'>
                    <span className=''><ChargingStation /></span>
                    <p>Stay cool and comfortable during the summer with our car A/C recharge</p>
                </div>
            </div>

            <div className='flex flex-col flex-1 min-w-[90%] lg:min-w-[30%] lg:max-w-[30%]'>
                <h4>PARKING SENSORS CALIBRATION</h4>

                <div className='flex gap-[20px] mt-[20px]'>
                    <span className=''><SensorOccupied /></span>
                    <p>Ensure your safety while parking with our parking sensors calibration service..</p>
                </div>
            </div>

            <div className='flex flex-col flex-1 min-w-[90%] lg:min-w-[30%] lg:max-w-[30%]'>
                <h4>CAR BATTERY REPAIRS</h4>

                <div className='flex gap-[20px] mt-[20px]'>
                    <span className=''><CarRepair /></span>
                    <p>Keep your car battery in top condition with our expert repair services.</p>
                </div>
            </div>
        </div>

        <div className='bg-white w-full flex flex-col pt-[10px] pb-[50px] px-[10px] lg:px-[100px]'>
            <h3 className='mt-[20px]'>3. VEHICLE AUTO PARTS</h3>

            <h4 className='mt-[20px] font-bold'>Revive Your Vehicle with Quality Used Auto-Parts </h4>

            <p className='mt-[20px]'>360 Salvage is your go-to destination for high-quality, affordable auto parts in South Africa. We pride ourselves in our vast and diverse database of used auto-parts for all makes and models, utilised by car owners across the country to quickly and affordably repair their vehicles. Our commitment to quality assurance ensures that each part undergoes thorough cleaning and inspection before they are made available to our customers so you can be sure that we have what you need, when you need it. We’ll help you find just the right component for your vehicle, whether you need a replacement for a faulty part or an upgrade to boost performance.</p>


            <h3 className='mt-[20px]'>4. WHEELS & TYRES</h3>

            <h4 className='mt-[20px] font-bold'>Upgrade Your Vehicle's Style and Performance with Top-Quality Wheels and Tyres</h4>

            <p className='mt-[20px]'>360 Salvage knows that your vehicle is more than just a means of transportation. It is a representation of your personality and style, and we recognize that top-quality wheels and tyres are essential components of any vehicle. That’s why we are dedicated to offering you the finest assortment of wheels and tyres from leading manufacturers and brands. Our inventory  is meticulously selected from reliable and trustworthy sources to guarantee that you receive the performance and durability you deserve from your investment.</p>

            <p className='mt-[20px]'>Our extensive selection of wheels is sure to fit most makes and models, offering options to suit your budget and preferences. Whether you're looking for a sleek, stylish upgrade or a sturdy set of off-road wheels, we've got you covered. With our high-quality wheels, your vehicle will not only look fantastic but will also last for the long haul.</p>


            <h3 className='mt-[20px]'>Solutions for Business</h3>

            <h4 className='mt-[20px] font-bold'>Collaborating with you at each stage</h4>

            <p className='mt-[20px]'>As a top salvage and recycling company, we work closely with our clients to determine the best approach for each vehicle, whether it involves reuse, remanufacturing, remarketing, or recycling. We offer customised solutions and personalised support for businesses looking to get the most value out of their vehicles, while prioritising compliance, efficiency, and sustainability throughout the process.</p>

            <h3 className='mt-[20px]'>Core Capabilities for Businesses</h3>

            <h4 className='mt-[20px] font-bold'>Tailored Business Solutions: Maximising Returns and Efficiency for Targeted Sectors</h4>

            <p className='mt-[20px]'>360 Salvage is proud to offer customised and scalable solutions for businesses looking to manage their salvage and used auto-parts efficiently and sustainably. Our tailored approach means that we can provide effective solutions to a wide range of sectors, including banks, institutions, schools, insurance firms, and more.</p>

            <p className='mt-[20px]'>No matter the scale of your business, our team of experts is here to help you manage your vehicles in a cost-effective and environmentally friendly manner. We offer a range of services that can be tailored to suit the needs of your business, from salvage and remarketing to recycling and disposal. With our simplified and seamless end-to-end vehicle management solutions, businesses can save time and money while maximising the value of their vehicles.</p>

            <p className='mt-[20px]'>At 360 Salvage, we take pride in our commitment to quality assurance, ensuring that every part is thoroughly inspected and cleaned before being made available to our customers. Our focus on sustainability means that we can help businesses achieve their environmental goals while reducing costs and maximising returns. With our customised solutions and expertise, businesses can have peace of mind knowing that their vehicles are being managed by a trusted partner that is dedicated to providing the highest level of service and support.</p>


            <h3 className='mt-[20px]'>Contact Us</h3>

            <h4 className='mt-[20px] font-bold'>Need help with 360 Salvage? Our Help Centre is at your service!</h4>

            <p className='mt-[20px]'>Do you have any questions, worries, or comments about our services at 360 Salvage? Don't hesitate to contact us - we're always available to assist you. Our Help Centre is an excellent resource for answering your queries, but if you can't find what you need, fill out the form below or click the "Help" button at the bottom right of your screen for immediate assistance. </p>

            <p className='mt-[20px] font-medium'>260 - 972 293 076</p>

            <p className='mt-[20px] font-medium'>info@360salvage.co.za</p>

            <p className='mt-[20px] font-medium'>28 John St Selby South</p>

            <p className='mt-[20px] font-medium'>Jo’burg, South Africa</p>
        </div>
    </div>
  )
}

export default About