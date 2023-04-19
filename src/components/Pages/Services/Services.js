import React from 'react'
import './Services.css'
import ServiceImg from '../../Assets/Slides/The art of Salvage.png'
function Services() {
  return (
    <div className='w-full min-h-[100vh] flex flex-col'>
        <div className='w-full h-[60vh] flex relative'>
            <img src={ServiceImg} alt='w-full h-full object-cover' />
            <h2 className='absolute bottom-20 left-[50%] translate-x-[-50%] text-green-500'>SERVICES</h2>
        </div>
    </div>
  )
}

export default Services