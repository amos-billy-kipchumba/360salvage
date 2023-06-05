import React, {useEffect} from 'react'
import './Services.css'

import FirstImg from "../../Assets/services/junk.jpg"
import SecondImg from "../../Assets/services/garage.webp"
import ThirdImg from "../../Assets/services/image_05.jpg"
import FourthImg from "../../Assets/services/wheel.jpg"
import { ArrowRight } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
function Services() {
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
              <h3 className='ml-[10px] md:ml-[100px] my-auto'>OUR SERVICES</h3>

              <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle text-xs cursor-wait' onClick={()=>{
                  Navigate('/')
              }}>
                  <span className='mr-2 text-gray-600'>For better, for cars</span>
              </h5>
          </div>
      </div>


      <div className='glog mx-auto px-4 xl:px-[100px] pb-[20px] pt-[50px] flex w-full flex-col md:flex-row justify-between lg:justify-center md:flex-wrap gap-[20px] xl:gap-[20px]'>
        <div className='glogy flex flex-col min-w-[90%] md:min-w-[30%] lg:max-w-[30%] xl:mt-[0px] h-[40vh] rounded-md overflow-hidden'>
            <img src={FirstImg} alt="" className='imgeryy w-full h-full object-cover' />
            <div className='yutr p-4 flex justify-between bg-gray-100 cursor-pointer transition-all 300s ease-out' onClick={()=>{
              Navigate(`/service?name=JUNK YOUR CAR`)
            }}>
              <h3 className='text-gray-600'>JUNK YOUR CAR</h3>
              <span className='colRo hover:text-red-400'><ArrowRight /></span>
            </div>
        </div>

        <div className='glogy flex flex-col flex-1 min-w-[90%] md:min-w-[30%] lg:max-w-[30%] xl:mt-[0px] h-[40vh] rounded-md overflow-hidden'>
          <img src={SecondImg} alt="" className='imgeryy w-full h-full object-cover' />
          <div className='yutr p-4 flex justify-between bg-gray-100 cursor-pointer transition-all 300s ease-out' onClick={()=>{
            Navigate(`/service?name=GARAGE`)
          }}>
            <h3 className='text-gray-600'>GARAGE</h3>
            <span className='colRo hover:text-red-400'><ArrowRight /></span>
          </div>
        </div>

        
      </div>

      <div className='mx-auto bg-white px-4 xl:px-[100px] pb-[50px] pt-0 flex w-full flex-col md:flex-row justify-between lg:justify-center md:flex-wrap gap-[20px] xl:gap-[20px]'>
          <div className='glogy flex flex-col flex-1 min-w-[90%] md:min-w-[30%] lg:max-w-[30%] xl:mt-[0px] h-[40vh] rounded-md overflow-hidden'>
          <img src={ThirdImg} alt="" className='imgeryy w-full h-full object-cover' />
          <div className='yutr p-4 flex justify-between bg-gray-100 cursor-pointer transition-all 300s ease-out' onClick={()=>{
            Navigate(`/service?name=VEHICLE PARTS`)
          }}>
            <h3 className='text-gray-600'>VEHICLE PARTS</h3>
            <span className='colRo hover:text-red-400'><ArrowRight /></span>
          </div>
        </div>


        <div className='glogy flex flex-col min-w-[90%] md:min-w-[30%] lg:max-w-[30%] xl:mt-[0px] h-[40vh] rounded-md overflow-hidden bg-black'>
            <img src={FourthImg} alt="" className='imgeryy w-full h-full object-fill' />
            <div className='yutr p-4 flex justify-between bg-gray-100 cursor-pointer transition-all 300s ease-out' onClick={()=>{
              Navigate(`/service?name=WHEELS AND TIRES`)
            }}>
              <h3 className='text-gray-600'>WHEELS AND TIRES</h3>
              <span className='colRo hover:text-red-400'><ArrowRight /></span>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Services