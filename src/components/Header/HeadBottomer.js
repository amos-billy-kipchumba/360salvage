import React from 'react'
import './HeadTopper.css'
import { useNavigate } from 'react-router-dom'
function HeadBottomer() {
  const Navigate = useNavigate() 
  return (
    <div className='red-redy hidden md:flex align-middle w-full justify-end py-2'>
        <div className='Bottomer md:px-6 xl:px-20 flex text-white cursor-pointer ease-in-out' onClick={()=>{
          Navigate(`/service?name=JUNK YOUR CAR`)
        }}>SELL YOUR CAR</div>
        <div className='Bottomer md:px-6 xl:px-20 flex text-white cursor-pointer ease-in-out' onClick={()=>{
          Navigate(`/service?name=GARAGE`)
        }}>GARAGE SERVICES</div>
        <div className='Bottomer md:px-6 xl:px-20 flex text-white cursor-pointer ease-in-out' onClick={()=>{
          Navigate(`/service?name=VEHICLE PARTS`)
        }}>VEHICLE PARTS</div>
        <div className='xl:px-20 md:px-6 flex text-white cursor-pointer ease-in-out' onClick={()=>{
          Navigate(`/service?name=WHEELS AND TIRES`)
        }}>WHEELS & TYRES</div>
    </div>
  )
}

export default HeadBottomer