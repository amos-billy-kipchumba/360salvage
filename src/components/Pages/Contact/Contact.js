import React from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'
function Contact() {
    const Navigate = useNavigate()
  return (
    <div className='AboutPum w-full flex flex-col'>
        <div className='w-full h-[25vh] lg:h-[20vh] md:h-[30vh] xl:h-[40vh] pb-8 flex flex-col justify-end bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>CONTACT US</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle text-xs cursor-wait' onClick={()=>{
                    Navigate('/')
                }}>
                    <span className='mr-2 text-gray-600'>For better, for cars</span>
                </h5>
            </div>
        </div>

        <div className='px-[10px] xl:px-[100px] bg-white py-8 xl:p-[50px]'>
            <h3>Need help with 360 Salvage? Our Help Centre is at your service!</h3>
            <p className='mt-[20px]'>Do you have any questions, worries, or comments about our services at 360 Salvage? Don't hesitate to contact us - we're always available to assist you. Our Help Centre is an excellent resource for answering your queries, but if you can't find what you need, fill out the form below or click the "Help" button at the top right of your screen for immediate assistance. 
            </p>
        </div>

        <div className='bg-white md:flex w-full justify-between flex-col px-[20px] lg:px-[100px] py-[30px] lg:pb-[50px]'>
            <div className='w-[full] flex gap-[2%] mt-2'>
                <input type='text' placeholder='Your name' className='w-[49%] outline-none p-2 border border-gray-200 bg-transparent' />
                <select className='border p-2 flex-1 w-[49%]'>
                  <option>--Select service option--</option>
                  <option>Repairs</option>
                  <option>Towing service</option>
                  <option>Spare part</option>
                  <option>Junking</option>
                </select>
            </div>
            <div className='w-[full] flex gap-[2%] mt-2'>
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