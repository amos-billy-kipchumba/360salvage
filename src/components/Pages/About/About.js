import React, {useEffect} from 'react'
import './About.css'
import { CheckOutlined } from '@mui/icons-material'
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
            </div>
        </div>

    </div>
  )
}

export default About