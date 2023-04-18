import React from 'react'
import './Clients.css'

function Clients() {
  return (
    <div className='w-full flex flex-col'>
        <div className='flex align-middle min-h-[30vh]'> 
            <h3 className='my-auto ml-[100px]'>OUR CLIENTS AND PARTNERS</h3>
        </div>

        <div className='min-h-[30vh] flex bg-gray-400/60 px-[10px] xl:px-[100px]'>
          <div className='mx-auto px-4 py-16 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 w-full gap-[5%] mb-8 md:mb-0 min-h-[30vh]'>
            <div className='Besty w-full h-[20vh] flex align-middle border-emerald-500 border p-4 relative overflow-hidden'>
              <h2 className='m-auto'>Over 30 clients</h2>
            </div>
            <div className='Besty1 w-full h-[20vh] flex align-middle bg-red-700 p-4 border border-red-700 relative overflow-hidden'>
              <h2 className='m-auto text-white'>Partnered with 15 companies</h2>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Clients