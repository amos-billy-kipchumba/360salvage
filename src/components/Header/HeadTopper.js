import React from 'react'
import './HeadTopper.css'
function HeadTopper() {
    
  return (
    <div className='hidden md:flex justify-end pt-4 pb-[4px] text-xs font-medium w-full bg-gray-300/95'>
        <div className='HeadTopperChild px-10 flex'>hello@360salvage.com</div>
        <div className='HeadTopperChild px-10 flex'>+27104300251</div>
        <div className='HeadTopperChild px-10 flex'>Search</div>
        <div className='HeadTopperChild px-10 flex'>Help</div>
        <div className='px-10'>US | <span className='HeadTopperSpan'>En</span></div>
    </div>
  )
}

export default HeadTopper