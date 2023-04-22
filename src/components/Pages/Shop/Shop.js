import React from 'react'
import './Shop.css'
import { FeaturedData } from './Data'
import FeaturedProducts from './FeaturedProducts';
function Shop() {

  return (
    <div className='w-full flex flex-col bg-white'>
        <div className='w-full h-[25vh] lg:h-[20vh] md:h-[30vh] xl:h-[40vh] pb-8 flex flex-col justify-end bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>360 SHOP</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle'>
                    <span className='mr-2 text-gray-600'>YOU ARE HERE:</span>/ <span className='ml-1 text-blue-400'>360SHOP</span>
                </h5>
            </div> 
        </div>

        <FeaturedProducts item={FeaturedData} />
    </div>
  )
}

export default Shop