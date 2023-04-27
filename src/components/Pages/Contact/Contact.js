import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='AboutPum w-full flex flex-col'>
        <div className='w-full h-[25vh] lg:h-[20vh] md:h-[30vh] xl:h-[40vh] pb-8 flex flex-col justify-end bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>CONTACT US</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle text-xs'>
                    <span className='mr-2 text-gray-600'>YOU ARE HERE:</span>/ <span className='ml-1 text-green-400'>CONTACT US</span>
                </h5>
            </div>
        </div>

        <div className='bg-white md:flex w-full justify-between flex-col px-[20px] lg:px-[100px] py-[30px] lg:py-[50px]'>
            <input type='text' placeholder='Your name' className='w-[49%] outline-none p-2 border border-gray-200 bg-transparent' />
            <div className='w-[full] flex justify-between mt-2'>
            <input type='email' placeholder='Your email' className='w-[49%] outline-none p-2 border border-gray-200 bg-transparent' />
            <input type='phone' placeholder='Your mobile no' className='w-[49%] outline-none p-2 border border-gray-200 bg-transparent' />
            </div>

            <textarea className='w-full min-h-[20vh] border bg-white border-gray-200 my-[20px] p-[10px] outline-none' placeholder='Your inquiry'></textarea>
            
            <button className='ml-auto bg-green-400 text-white p-[10px] mb-[20px]'>SEND MESSAGE</button>
        </div>
    </div>
  )
}

export default Contact