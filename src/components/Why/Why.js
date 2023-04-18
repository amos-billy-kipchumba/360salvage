import React from 'react'
import './Why.css'
import WhyImg from '../Assets/Slides/Vehicle Salvaged.png'
import LeftImg from '../Assets/logo/OIP-removebg-preview.png'
import CenterImg from '../Assets/logo/R.png'
import RightImg from '../Assets/logo/dollar_2-512.webp'
function Why() {
  return (
    <div className='w-full min-h-[100vh] flex flex-col'>
        <div className='w-full h-[60vh]'>
            <img src={WhyImg} alt='' className='w-full h-full object-cover' />
        </div>

        <div className='RoGa w-[98%] lg:w-[98%] xl:w-[80%] mx-auto min-h-[50vh] translate-y-[-200px] pb-[50px]'>
            <h3 className='text-white mt-[50px] ml-[50px]'>WHY CHOOSE US</h3>

            <div className='w-full flex flex-col md:flex md:flex-row mt-[50px]'>
                <div className='flex flex-col flex-1 bdWhy'>
                    <img src={LeftImg} alt='' className='w-[200px] h-[200px] mx-auto my-[50px]' />
                    <div className='w-full h-[40vh] flex p-[50px] bg-gray-600/10'>
                        <h3 className='text-white'>Our nationwide collection 
                        and verification process is 
                        fast, free and easy</h3>
                    </div>
                </div>
                <div className='flex flex-col flex-1 bdWhy'>
                    <img src={CenterImg} alt='' className='w-[200px] h-[200px] mx-auto my-[50px]' />
                    <div className='w-full h-[40vh] flex p-[50px] bg-gray-600/10'>
                        <h3 className='text-white'>All our Salvage services 
                        are performed by highly 
                        qualified professionals.</h3>
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <img src={RightImg} alt='' className='w-[200px] h-[200px] mx-auto my-[50px]' />
                    <div className='w-full h-[40vh] flex p-[50px] bg-gray-600/10'>
                        <h3 className='text-white'>We offer best prices for 
                        scrap cars and spare parts 
                        with no hidden charges</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Why