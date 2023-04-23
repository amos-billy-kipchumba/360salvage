
import './Footer.css'
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'

import Greener from "../Assets/about/360 Footer Halftone-07-16.png"
import { useNavigate } from 'react-router-dom'
function Footer() {
  const Navigate = useNavigate()
  return (
    <div className='relative w-full min-h-[100vh] px-[0px] py-[0px] overflow-hidden mt-[100px] md:mt-[0]'>
      <img src={Greener} alt='' className='Rodni absolute bottom-0 rotate-180 w-[70%] right-0 translate-y-[-90px]' />
      <img src={Greener} alt='' className='Rodni absolute top-0 w-[70%] left-0' />
      <div className='footer-container w-full h-full relative top-0 left-0 flex flex-col py-[50px] px-[10px] md:px-[50px]'>
        <div className='flex md:flex xl:flex-row flex-col-reverse w-full px-[10px] md:px-[50px]'>
          <div className='flex flex-col md:flex1 text-white'>
            <h4>360 -Salvage Plc</h4>

            <p className='mt-[50px]'>We offer an easy way for car owners to get rid of 
            their old vehicles at the best price and consequently help keep the environment clean at the 
            same time. Leave an enquiry and we’ll get in touch 
            Asap!</p>

            <p className='mt-[50px] mb-[10px]'>© 360 -Salvage Plc 2023. All rights reserved</p>
          </div>
          <div className='flex w-full md:flex2 flex-col px-[5px] md:px-[50px] mt-4 xl:mt-0'>
            <div className='flex flex-col md:flex md:flex-row justify-between text-white'>
              <div className='flex flex-col'>
                <h3 className='text-green-400' onClick={()=>{
                  Navigate('/')
                }}>HOME</h3>
                <p className='mt-[50px] cursor-pointer hover:text-red-400' onClick={()=>{
                  Navigate('/about')
                }}>About us</p>
                <p className='cursor-pointer hover:text-red-400' onClick={()=>{
                  Navigate('/services')
                }}>Services</p>
                <p className='cursor-pointer hover:text-red-400'>News & Blog</p>
                <p className='cursor-pointer hover:text-red-400 ease-in-out' onClick={()=>{
                  Navigate('/360shop')
                }}>360 Salvage Shop®</p>
              </div>
              <div className='flex flex-col'>
                <h3 className='text-green-400'>PRODUCT & SERVICES</h3>
                <p className='mt-[50px] cursor-pointer hover:text-red-400'  onClick={()=>{
                  Navigate(`/service?name=JUNK YOUR CAR`)
                }}>Junk your Car</p>
                <p className='cursor-pointer hover:text-red-400' onClick={()=>{
                  Navigate(`/service?name=GARAGE`)
                }}>Vehicle Parts</p>
                <p className='cursor-pointer hover:text-red-400' onClick={()=>{
                  Navigate(`/service?name=WHEELS AND TIRES`)
                }}>Wheels & Tyres</p>
                <p className='cursor-pointer hover:text-red-400' onClick={()=>{
                  Navigate(`/service?name=VEHICLE PARTS`)
                }}>Mechanical Services</p>
              </div>
            </div>

            <div className='md:flex w-full justify-between flex-col mt-4'>
              <input type='text' placeholder='Your name' className='w-[49%] outline-none p-2 border border-white bg-transparent' />
              <div className='w-[full] flex justify-between mt-2'>
                <input type='email' placeholder='Your email' className='w-[49%] outline-none p-2 border border-white bg-transparent' />
                <input type='phone' placeholder='Your mobile no' className='w-[49%] outline-none p-2 border border-white bg-transparent' />
              </div>

              <textarea className='w-full min-h-[20vh] bg-white my-[20px] p-[10px] outline-none' placeholder='Your inquiry'></textarea>
              
              <button className='ml-auto bg-white p-[10px] mb-[20px]'>SEND MESSAGE</button>
            </div>
          </div>
          <div className='flex md:flex3 flex-col'>
            <h3 className='text-green-400'>FOLLOW US</h3>
            <div className='flex text-white gap-[30px] mt-[50px]'>
              <span>
                <Facebook />
              </span>
              <span>
                <Instagram />
              </span>
              <span>
                <Twitter />
              </span>
              <span>
                <YouTube />
              </span>
              <span>
                <LinkedIn />
              </span>
            </div>

            <p className='text-white mt-[20px]'>@360salvage_za</p>

            <h3 className='text-green-400 mt-[40px]'>STAY IN TOUCH</h3>
            <p className='text-white mt-[10px]'>Sign up and get latest news</p>
            <p className='text-white mt-[5px]'>Environment and Sustainability</p>

            <p className='text-white mt-[40px]'>+260 - 972 293 076</p>
            <p className='text-white mt-[5px]'>info@360salvage.co.za</p>
            <p className='text-white mt-[5px]'>28 John St Selby South</p>
            <p className='text-white mt-[5px]'>Jo’burg, South Africa</p>
          </div>
        </div>

        <hr />

        <div className='flex flex-wrap md:flex flex-row text-white justify-around mt-[20px]'>
          <p className=''>Site map</p>
          <p className=''>Use of cookies</p>
          <p className=''>Cookie Settings</p>
          <p className=''>Legal Information</p>
          <p className=''>Data Privacy</p>
          <p className=''>Environment & Sustainability</p>
          <p className=''>Anti- slavery Statement`</p>
        </div>
      </div>

    </div>
  )
}

export default Footer