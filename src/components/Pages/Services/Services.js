import React, {useEffect} from 'react'
import './Services.css'

import FirstImg from "../../Assets/services/image_03.jpg"
import SecondImg from "../../Assets/services/image_02.jpg"
import ThirdImg from "../../Assets/services/image_05.jpg"
import FourthImg from "../../Assets/services/image_09.jpg"
import FifthImg from "../../Assets/services/image_08.jpg"
import SixthImg from "../../Assets/services/image_06.jpg"
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

              <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle'>
                  <span className='mr-2 text-gray-600'>YOU ARE HERE:</span>/ <span className='ml-1 text-blue-400'>OUR SERVICES</span>
              </h5>
          </div> 
      </div>


      <div className='bg-white mx-auto px-4 xl:px-[100px] py-[50px] flex w-full flex-col md:flex-row justify-between lg:justify-center md:flex-wrap gap-[20px] xl:gap-[0%]'>
        <div className='flex flex-col min-w-[90%] md:min-w-[48%] md:max-w-[48%] lg:min-w-[30%] lg:max-w-[30%] xl:mt-[0px]'>
            <img src={FirstImg} alt="" className='imgeryy w-full h-full object-cover' />
            <div className='w-full p-4 flex justify-between bg-gray-100 cursor-pointer transition-all 300s ease-out' onClick={()=>{
              Navigate(`/service?name=ENGINE DIAGNOSTICS`)
            }}>
              <h3 className='text-gray-600'>ENGINE DIAGNOSTICS</h3>
              <span className='text-blue-400 hover:text-red-400'><ArrowRight /></span>
            </div>
        </div>

        <div className='flex flex-col flex-1 min-w-[90%] md:min-w-[48%] md:max-w-[48%] lg:min-w-[30%] lg:max-w-[30%] xl:mt-[0px]'>
          <img src={SecondImg} alt="" className='imgeryy w-full h-full object-cover' />
          <div className='w-full p-4 flex justify-between bg-gray-100 cursor-pointer transition-all 300s ease-out' onClick={()=>{
            Navigate(`/service?name=LUBE, OIL AND FILTERS`)
          }}>
            <h3 className='text-gray-600'>LUBE, OIL AND FILTERS</h3>
            <span className='text-blue-400 hover:text-red-400'><ArrowRight /></span>
          </div>
        </div>

        <div className='flex flex-col flex-1 min-w-[90%] md:min-w-[48%] md:max-w-[48%] lg:min-w-[30%] lg:max-w-[30%] xl:mt-[0px]'>
          <img src={ThirdImg} alt="" className='imgeryy w-full h-full object-cover' />
          <div className='w-full p-4 flex justify-between bg-gray-100 cursor-pointer transition-all 300s ease-out' onClick={()=>{
            Navigate(`/service?name=BELTS AND HOSES`)
          }}>
            <h3 className='text-gray-600'>BELTS AND HOSES</h3>
            <span className='text-blue-400 hover:text-red-400'><ArrowRight /></span>
          </div>
        </div>


        <div className='flex flex-col min-w-[90%] md:min-w-[48%] md:max-w-[48%] lg:min-w-[30%] lg:max-w-[30%] xl:mt-[0px]'>
            <img src={FourthImg} alt="" className='imgeryy w-full h-full object-cover' />
            <div className='w-full p-4 flex justify-between bg-gray-100 cursor-pointer transition-all 300s ease-out' onClick={()=>{
              Navigate(`/service?name=AIR CONDITIONING`)
            }}>
              <h3 className='text-gray-600'>AIR CONDITIONING</h3>
              <span className='text-blue-400 hover:text-red-400'><ArrowRight /></span>
            </div>
        </div>

        <div className='flex flex-col flex-1 min-w-[90%] md:min-w-[48%] md:max-w-[48%] lg:min-w-[30%] lg:max-w-[30%] xl:mt-[0px]'>
          <img src={FifthImg} alt="" className='imgeryy w-full h-full object-cover' />
          <div className='w-full p-4 flex justify-between bg-gray-100 cursor-pointer transition-all 300s ease-out' onClick={()=>{
            Navigate(`/service?name=BRAKE REPAIR`)
          }}>
            <h3 className='text-gray-600'>BRAKE REPAIR</h3>
            <span className='text-blue-400 hover:text-red-400'><ArrowRight /></span>
          </div>
        </div>

        <div className='flex flex-col flex-1 min-w-[90%] md:min-w-[48%] md:max-w-[48%] lg:min-w-[30%] lg:max-w-[30%] xl:mt-[0px]'>
          <img src={SixthImg} alt="" className='imgeryy w-full h-full object-cover' />
          <div className='w-full p-4 flex justify-between bg-gray-100 cursor-pointer transition-all 300s ease-out' onClick={()=>{
            Navigate(`/service?name=TIRE AND WHEEL SERVICES`)
          }}>
            <h3 className='text-gray-600'>TIRE AND WHEEL SERVICES</h3>
            <span className='text-blue-400 hover:text-red-400'><ArrowRight /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services