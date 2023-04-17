import React from 'react'
import './AreDoing.css'
import AreImg from '../Assets/Slides/Salvaged.png'
import { Star } from '@mui/icons-material'

// 
function AreDoing() {
  return (
    <div className='w-full min-h-[140vh] flex flex-col'>
        <div className='min-h-[70vh] w-full flex flex-col justify-end'>
            <div className='flex w-[80%] mx-auto min-h-[40vh] translate-y-[200px]'>
                <div className='p-[50px] bg-red-600 flex-1'>
                    <h3 className='text-white'>WHAT WE ARE DOING</h3>

                    <h1 className='text-white mt-[50px]'>Our Sustainability
                    Pledge</h1>

                    <h4 className='text-white mt-[50px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                    sed diam nonummy nibh euismod tincidunt ut laoreet 
                    dolore magna aliquam erat volutpat. </h4>

                    <div className='flex mt-[50px] mb-[50px] gap-[20px]'>
                        <div className='flex flex-1 flex-col justify-end'>
                            <hr />
                        </div>
                        <div className='flex flex-1 flex-col justify-end'>
                            <h4 className='flex flex-col justify-end text-white'>READ MORE</h4>
                        </div>
                    </div>
                </div>
                <div className='flex flex-1 flex-col bg-white px-[20px]'>
                    <div className='w-[90px] h-[90px] RoGa rounded-full mt-[50px]'></div>

                    <h3 className='flex align-middle mt-[40px]'>Dr. Benard George CEO, Frujian Logistics</h3>

                    <p className='mt-[30px]'>360 Salvage has been a life saver for all we do, They covered 
                    all our sites nationwide and offered us great prices for all our 
                    un-road -worthy trucks. They also ensured that all the cars 
                    they collected are disposed of ethically and in an 
                    environmentally friendly way.</p>

                    <div className='flex mt-[50px] mb-[50px] gap-[20px]'>
                        <div className='flex flex-1 flex-col justify-end'>
                            <span className='flex Riba gap-[2px]'><Star /> <Star /> <Star /> <Star /> <Star /></span>
                            <hr className='text-gray-600' />
                        </div>
                        <div className='flex flex-1 justify-end'>
                            <h4 className='flex flex-col justify-end text-gray-700 mr-[50px]'>NEXT</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full h-[70vh] flex align-middle'>
            <img src={AreImg} alt='' className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default AreDoing