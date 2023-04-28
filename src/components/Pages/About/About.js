import React, {useEffect} from 'react'
import './About.css'
import { CarRepair, ChargingStation, CheckOutlined, DisplaySettings, OilBarrel, SensorOccupied, Speaker } from '@mui/icons-material'
import AboutImg2 from '../../Assets/Slides/The art of Salvage.png'
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
                <h3 className=''>Simplified. Seamless. Sustainable</h3>
                <p className=' text-gray-700 mt-[20px]'>At 360 Salvage we're more than just a salvage company. We’re a team of experts on a journey of growth and development, dedicated to helping shape the vehicle recycling industry. We understand that dealing with salvage vehicles can be a headache, which is why we've taken care of the entire process for you, providing simplified and seamless customer experience across our end-to-end vehicle remarketing services, that don’t break the bank.</p>
                <p className='mt-[20px]'>Our services are designed for those who are looking for high-quality used car parts and those who want to maximize the financial and environmental benefits of their vehicles. Whether you're a car enthusiast looking for a specific part or a business owner seeking to manage your fleet's end-of-life vehicles, at 360 Salvage, we're committed to providing top-tier service and support to meet all of your salvage needs.</p>
                <h3 className='mt-[20px]'>Our Mission</h3>
                <p className='mt-[20px]'>At 360 Salvage, our mission is to revolutionize the salvage industry by providing environmentally sustainable solutions that maximize value for our customers. We are committed to utilizing the latest technology and best practices to ensure that the salvage process is as efficient and eco-friendly as possible. We believe that by prioritizing sustainability and innovation, we can make a positive impact on the industry and the planet.</p>
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
                        <img src={AboutImg2} className='w-full h-full object-cover' alt='' />
                    </div>
                    <div className='flex flex-1 h-[20vh]'>
                        <img src={AboutImg2} className='w-full h-full object-cover' alt='' />
                    </div>
                </div>

                <h3 className='mt-[40px]'>WHY CHOOSE US</h3>

                <span className='w-[100px] flex flex-col text-green-500 RelSy mt-[10px]'></span>

                <p className='flex align-middle mt-[20px]'><span className='text-green-500 my-auto mr-[5px]'><CheckOutlined /></span>Sustainability: We are committed to minimizing our environmental impact by utilizing the latest eco-friendly technologies and best practices.</p>
                <p className='flex align-middle mt-[5px]'><span className='text-green-500 my-auto mr-[5px]'><CheckOutlined /></span>Innovation: We are dedicated to staying at the forefront of the salvage industry by constantly exploring new and innovative solutions to improve our services and processes.</p>
                <p className='flex align-middle mt-[5px]'><span className='text-green-500 my-auto mr-[5px]'><CheckOutlined /></span>Customer Satisfaction: We strive to provide the highest level of customer service and support, ensuring that our clients have a positive and seamless experience with us.</p>
                <p className='flex align-middle mt-[5px]'><span className='text-green-500 my-auto mr-[5px]'><CheckOutlined /></span>Transparency: We believe in operating with honesty and integrity, and always providing our customers with clear and transparent information about our services and pricing.</p>
                <p className='flex align-middle mt-[5px]'><span className='text-green-500 my-auto mr-[5px]'><CheckOutlined /></span>Expertise: Our team of salvage experts are highly skilled and knowledgeable, with years of experience in the industry. We take pride in offering top-tier advice and guidance to our customers.</p>

                <button className='reveal mr-[auto] bg-green-500 text-white px-[20px] py-[10px] mt-[20px]' onClick={()=>{
                    Navigate('/services')
                }}>OUR SERVICES</button>
            </div>
        </div>

        

        <div className='bg-white w-full flex flex-col py-[50px] px-[10px] lg:px-[100px]'>
            <h3 className='mx-auto text-gray-600'>Our Team</h3>
            <span className='w-[100px] flex flex-col text-green-400 Rely mt-[20px] mx-auto'></span>

            <h3 className='mt-[20px]'>Driving Quality Service</h3>

            <p className='mx-auto mt-[20px]'>At 360 Salvage, we take pride in having a team of highly qualified and experienced professionals who are passionate about delivering the best possible service to our clients. Our team of experts includes skilled mechanics, knowledgeable sales representatives, and efficient administrative staff.</p>

            <p className='mx-auto mt-[20px]'>With our commitment to quality and excellence, we ensure that each member of our team is well-trained and equipped to handle any task with precision and efficiency. From providing transparent and fair quotes to offering expert advice on auto repairs and parts, our team is dedicated to providing exceptional service to all our customers.</p>

            <p className='mx-auto mt-[20px]'>We believe that the success of our business lies in the hands of our team. That's why we invest in ongoing training and development to ensure that our team members are up-to-date with the latest industry trends and technologies. With 360 Salvage, you can trust that you are working with a team of professionals who are passionate about what they do and are committed to delivering the best possible experience to our clients.</p>


            <h3 className='mx-auto text-gray-600'>360 Salvage and Sustainability</h3>

            <h3 className='mt-[20px]'>Journey to the Future</h3>

            <p className='mx-auto mt-[20px]'>At 360 Salvage, we prioritize sustainability in all our operations. Our approach to sustainability is outlined in our Journey to the Future, which sets out our goals, commitments, and progress towards becoming a more sustainable business. Our focus is on three key areas: Our Environment, Our Team, and Our Collaborations, and our Journey to the Future guides our efforts towards achieving our sustainability goals both in the short and long term.</p>


            <h3 className='mx-auto text-gray-600'>WHAT WE DO</h3>

            <h3 className='mt-[20px]'>Simplified and Seamless End-to-End Vehicle Remarketing Solutions</h3>

            <p className='mx-auto mt-[20px]'>360 Salvage specializes in the remarketing of high-quality used car parts and the proper disposal of end-of-life vehicles. We work with a variety of clients, including car enthusiasts, business owners, and anyone looking to maximize the financial and environmental benefits of their vehicles. Our inventory includes a wide range of salvage vehicles, which are disposed of ethically and in an environmentally friendly way, while the spare parts are professionally refurbished. With our simplified and seamless end-to-end vehicle remarketing services, we offer top-tier support and guidance to our customers, ensuring their satisfaction with every transaction.</p>

        </div>

        <div className='bg-white w-full flex flex-col py-[10px] px-[10px] lg:px-[100px]'>
            <h3 className='mx-auto text-gray-600'>Our Services</h3>

            <p className='mx-auto mt-[20px]'>Our business activities focus on the following capabilities.</p>

            <h3 className='mt-[20px]'>SELL OR JUNK YOUR CAR</h3>

            <h4 className='mt-[20px]'>Say Goodbye to Your Old Car Hassle-Free with 360 Salvage's Selling and Junking Options</h4>

            <p className='mt-[20px]'>At 360 Salvage, we understand that getting rid of your old or unwanted car can be a headache. That's why we offer two options to help you out: selling or junking. If your car is still in decent condition, we provide a hassle-free way to sell it for a fair and transparent price. Our team of experts will take care of everything from pick-up to payment. However, if your car has reached the end of its life, don't worry, we've got you covered too. Our junk car removal service provides a simple and straightforward process, where we take care of everything from pickup to disposal. With both options, you can trust us to handle the process efficiently and ethically, ensuring that your vehicle is disposed of in an environmentally friendly way.</p>



            <h3 className='mt-[20px]'>GARAGE SERVICES</h3>

            <h4 className='mt-[20px]'>Expert Garage Services in Tucson: Trust Us to Keep Your Vehicle Running Smoothly</h4>

            <p className='mt-[20px]'>We take pride in offering a comprehensive range of garage services to vehicle owners in Tucson. Our team of highly qualified mechanics has the expertise and experience to handle any car problem, whether you drive a passenger car, SUV or medium-sized truck. From routine maintenance like an oil change to more complex services like an engine change, we've got you covered. Our mechanics are skilled in working on both foreign and domestic vehicles, ensuring that your vehicle is in good hands regardless of its make or model. Trust us to keep your vehicle performing at its best before leaving our shop.</p>
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
            <h3 className='mt-[20px]'>VEHICLE PARTS</h3>

            <h4 className='mt-[20px]'>Affordable and Environmentally-Friendly: 360 Salvage's Extensive Selection of Used Vehicle Parts</h4>

            <p className='mt-[20px]'>At 360 Salvage, we have a vast selection of environmentally friendly used vehicle parts. Our inventory of parts is utilized by car owners across the country to quickly and affordably repair their vehicles. By using these parts, we help reduce unnecessary CO2 emissions. We provide matching parts for both personal vehicle improvements and damage-repairable vehicles purchased through our online salvage auction. Additionally, we offer flexible delivery options and all of our parts undergo thorough cleaning and inspection before reaching their new vehicles.</p>


            <h3 className='mt-[20px]'>WHEELS & TYRES</h3>

            <h4 className='mt-[20px]'>Reliable Wheels and Tires at Competitive Prices</h4>

            <p className='mt-[20px]'>We understand the importance of having reliable and high-quality wheels and tires, that's why we offer a wide selection of wheels and tires to meet all your needs. Whether you're looking for new or used tires, we have a variety of options to choose from. Our expert team is always on hand to provide advice and guidance, helping you find the perfect wheels and tires for your vehicle. With our top-tier service and competitive prices, you can trust 360 Salvage for all your wheel and tire needs.</p>
        </div>
    </div>
  )
}

export default About