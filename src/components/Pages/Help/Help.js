import React, { useState } from 'react'
import './Help.css'
import HelpImg from '../../Assets/Slides/Salvaged-min.jpg'
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import {useNavigate} from 'react-router-dom'
import HelpData from './HelpData';
function Help() {
    const [showOne, setShowOne] = useState(false);

    const [searchFul, setSearchFul] = useState('');

    const Navigate = useNavigate()

  return (
    <div className='AboutPum w-full flex flex-col'>
        <div className='w-full h-[25vh] lg:h-[20vh] md:h-[30vh] xl:h-[40vh] pb-8 flex flex-col justify-end bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>HELP</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle text-xs cursor-wait' onClick={()=>{
                    Navigate('/')
                }}>
                    <span className='mr-2 text-gray-600'>For better, for cars</span>
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
            <div className='w-[90%] md:w-[45%] lg:w-[30%] p-4 flex align-middle justify-center helpBorder' onClick={()=>{
                Navigate('/contact')
            }}>
                Contact us
            </div>
            <div className='w-[90%] md:w-[45%] lg:w-[30%] p-4 flex align-middle justify-center helpBorder' onClick={()=>{
                Navigate('/360shop')
            }}>
                360 Shop
            </div>
            <div className='w-[90%] md:w-[45%] lg:w-[30%] p-4 flex align-middle justify-center helpBorder' onClick={()=>{
                Navigate(`/service?name=VEHICLE PARTS`)
            }}>
                Parts
            </div>
            <div className='w-[90%] md:w-[45%] lg:w-[30%] p-4 flex align-middle justify-center helpBorder' onClick={()=>{
                Navigate(`/service?name=WHEELS AND TIRES`)
            }}>
                Wheel and tires
            </div>
            <div className='w-[90%] md:w-[45%] lg:w-[30%] p-4 flex align-middle justify-center helpBorder' onClick={()=>{
                Navigate(`/service?name=JUNK YOUR CAR`)
            }}>
                Sell my car
            </div>
        </div>
    </div>
  )
}

export default Help