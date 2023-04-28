import React from 'react'
import './HeadTopper.css'
import { useNavigate } from 'react-router-dom'
function HeadTopper() {
    const Navigate = useNavigate()
  return (
    <div className='hidden md:flex justify-end pt-4 pb-[4px] text-xs font-medium w-full bg-gray-300/95'>
        <div className='HeadTopperChild px-10 flex hover:text-red-400 transMar cursor-pointer'>
          <a href="mailto:hello@360salvage.com">hello@360salvage.com</a>
        </div>
        <div className='HeadTopperChild px-10 flex hover:text-red-400 transMar'>
          <a href="tel:+27104300251" className='text-gray-700 hover:text-red-400 transMar'>+27104300251</a>
        </div>
        <div className='HeadTopperChild px-10 flex hover:text-red-400 transMar cursor-pointer' onClick={()=>{
          Navigate('/search')
        }}>Search</div>
        <div className='HeadTopperChild px-10 flex hover:text-red-400 transMar cursor-pointer' onClick={()=>{
          Navigate('/help')
        }}>Help</div>
        <div className='px-10'>US | <span className='HeadTopperSpan'>En</span></div>
    </div>
  )
}

export default HeadTopper