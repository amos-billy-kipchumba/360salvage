import React, { useState } from 'react'
import './Help.css'
import HelpImg from '../../Assets/Slides/Use This Exact Image for Landing Page-02.png'
import { ArrowCircleRightOutlined } from '@mui/icons-material';

import HelpData from './HelpData';
function Help() {
    const [showOne, setShowOne] = useState(false);

    const [searchFul, setSearchFul] = useState('');

  return (
    <div className='AboutPum w-full flex flex-col'>
        <div className='w-full h-[25vh] lg:h-[20vh] md:h-[30vh] xl:h-[40vh] pb-8 flex flex-col justify-end bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>HELP</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle text-xs'>
                    <span className='mr-2 text-gray-600'>YOU ARE HERE:</span>/ <span className='ml-1 text-green-400'>HELP</span>
                </h5>
            </div>
        </div>

        <div className='w-full h-[20vh] xl:h-[30vh] relative flex flex-col'>
            <img src={HelpImg} alt='' className='w-full h-full object-cover' />

            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white text-gray-800 w-[90%] lg:w-[50%] rounded-full'>
                <input type='search' placeholder='Search' className='w-full px-4 py-2 rounded-full outline-none' value={searchFul} onChange={(e)=>{
                    setSearchFul(e.target.value);
                  }} />
            </div>

            {searchFul !== "" ?
            <div className='HelpShadow absolute bg-white w-[90%] lg:w-[50%] top-[65%] left-[50%] translate-x-[-50%] rounded-sm flex flex-col px-2 py-4'>
                <h4 className='mx-auto'>Top results</h4>

                <div className='w-full border flex flex-col mt-4 p-[20px] gap-[20px] h-[30vh] overflow-y-scroll'>
                    {HelpData && HelpData.filter((val) => {
                        if(searchFul === "") {
                        return val
                        }
                        else if (val.question.toLowerCase().includes(searchFul.toLowerCase())) {
                        return val
                        }
                        else {
                        return ""
                        }
                    }).map((object, index) => {
                        return(
                            <div className='Ruga w-full delay-300' key={index}>
                                <div className='w-full flex hover:translate-x-[10px] cursor-pointer' onClick={()=>{
                                    setShowOne(!showOne)
                                }}>
                                    <span className={`${showOne + '1' && "rotate-90 mr-2"} mr-2`}><ArrowCircleRightOutlined /></span>
                                    <h4>{object.question}</h4>
                                </div>
        
                                <p className={`text-sm mt-[20px] hidden text-gray-600 ${showOne && "gott"}`}>{object.answer}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            :
            null
            }
        </div>

        <div className='w-full bg-white flex flex-wrap px-[10px] xl:px-[100px] py-[20px] xl:py-[50px] gap-[5%] gap-y-8'>
            <div className='w-[90%] md:w-[45%] lg:w-[30%] p-4 flex align-middle justify-center helpBorder mx-auto'>
                Contact us
            </div>
            <div className='w-[90%] md:w-[45%] lg:w-[30%] p-4 flex align-middle justify-center helpBorder mx-auto'>
                360 Auctions
            </div>
            <div className='w-[90%] md:w-[45%] lg:w-[30%] p-4 flex align-middle justify-center helpBorder mx-auto'>
                Parts
            </div>
            <div className='w-[90%] md:w-[45%] lg:w-[30%] p-4 flex align-middle justify-center helpBorder mx-auto'>
                Wheel and tires
            </div>
            <div className='w-[90%] md:w-[45%] lg:w-[30%] p-4 flex align-middle justify-center helpBorder mx-auto'>
                Sell my car
            </div>
            <div className='w-[90%] md:w-[45%] lg:w-[30%] p-4 flex align-middle justify-center helpBorder mx-auto'>
                Business solution
            </div>
        </div>
    </div>
  )
}

export default Help