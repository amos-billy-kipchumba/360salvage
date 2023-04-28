
import './Footer.css'
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'

import Greener from "../Assets/about/360 Footer Halftone-07-16.png"
import { useNavigate } from 'react-router-dom'
function Footer() {
  const Navigate = useNavigate()
  return (
    <div className='relative w-full overflow-hidden'>
      <img src={Greener} alt='' className='Rodni absolute bottom-0 rotate-180 w-[70%] right-0 translate-y-[-90px]' />
      <img src={Greener} alt='' className='Rodni absolute top-0 w-[70%] left-0' />
     
      <div className='footer-container w-full h-full relative top-0 left-0 flex flex-col py-[30px] px-[10px] md:px-[50px]'>
      <div className='flex md:flex xl:flex-row flex-col-reverse w-full px-[10px] md:px-[50px]'>
        <div className='flex flex-col md:flex1 text-white'>
          <h4>360 -Salvage Plc</h4>

          <p className='mt-[20px]'>We offer an easy way for car owners to get rid of 
          their old vehicles at the best price and consequently help keep the environment clean at the 
          same time. Leave an enquiry and we’ll get in touch 
          Asap!</p>

          <p className='mt-[50px] mb-[10px]'>© 360 -Salvage Plc 2023. All rights reserved</p>
        </div>
        <div className='flex w-full md:flex2 flex-col px-[5px] md:px-[30px] mt-4 xl:mt-0'>
          <div className='flex flex-col md:flex md:flex-row justify-between text-white'>
            <div className='flex flex-col'>
              <h4 className='colGre' onClick={()=>{
                Navigate('/')
              }}>HOME</h4>
              <p className='transs mt-[20px] cursor-pointer hover:text-red-400 text-sm' onClick={()=>{
                Navigate('/about')
              }}>About us</p>
              <p className='transs cursor-pointer hover:text-red-400 text-sm' onClick={()=>{
                Navigate('/services')
              }}>Services</p>
              <p className='transs cursor-pointer hover:text-red-400 text-sm'>News & Blog</p>
              <p className='transs cursor-pointer hover:text-red-400 ease-in-out text-sm' onClick={()=>{
                Navigate('/360shop')
              }}>360 Salvage Shop®</p>
            </div>
            <div className='flex flex-col'>
              <h4 className='colGre'>PRODUCT & SERVICES</h4>
              <p className='transs mt-[20px] cursor-pointer hover:text-red-400 text-sm'  onClick={()=>{
                Navigate(`/service?name=JUNK YOUR CAR`)
              }}>Junk your Car</p>
              <p className='transs cursor-pointer hover:text-red-400 text-sm' onClick={()=>{
                Navigate(`/service?name=GARAGE`)
              }}>Vehicle Parts</p>
              <p className='transs cursor-pointer hover:text-red-400 text-sm' onClick={()=>{
                Navigate(`/service?name=WHEELS AND TIRES`)
              }}>Wheels & Tyres</p>
              <p className='transs cursor-pointer hover:text-red-400 text-sm' onClick={()=>{
                Navigate(`/service?name=VEHICLE PARTS`)
              }}>Mechanical Services</p>
            </div>
          </div>

          <div className='md:flex w-full justify-between flex-col mt-4'>
            <div className='w-[full] flex justify-between mt-2 gap-x-[2%]'>
              <input type='text' placeholder='Your name' className='w-[49%] outline-none p-2 border border-white bg-transparent text-gray-200' />
              <select className='border p-2 flex-1 w-[49%]'>
                  <option>--Select service option--</option>
                  <option>Repairs</option>
                  <option>Towing service</option>
                  <option>Spare part</option>
                  <option>Junking</option>
              </select>
            </div>
            <div className='w-[full] flex gap-x-[2%] mt-2'>
              <input type='email' placeholder='Your email' className='w-[49%] outline-none p-2 border border-white bg-transparent text-gray-200' />
              <input type='phone' placeholder='Your mobile no' className='w-[49%] outline-none p-2 border border-white bg-transparent text-gray-200' />
            </div>

            <textarea className='w-full min-h-[20vh] bg-white my-[20px] p-[10px] outline-none border hover:bg-transparent hover:text-white' placeholder='Your inquiry'></textarea>
            
            <button className='ml-auto bg-white p-[10px] mb-[20px] border hover:bg-transparent hover:text-white'>SEND MESSAGE</button>
          </div>
        </div>
        <div className='flex md:flex3 flex-col'>
          <h4 className='colGre'>FOLLOW US</h4>
          <div className='flex text-white gap-[30px] mt-[20px]'>
            <span className='transs cursor-pointer hover:text-red-400'>
              <Facebook />
            </span>
            <span className='transs cursor-pointer hover:text-red-400'>
              <Instagram />
            </span>
            <span className='transs cursor-pointer hover:text-red-400'>
              <Twitter />
            </span>
            <span className='transs cursor-pointer hover:text-red-400'>
              <YouTube />
            </span>
            <span className='transs cursor-pointer hover:text-red-400'>
              <LinkedIn />
            </span>
          </div>

          <p className='text-white mt-[20px]'>@360salvage_za</p>

          <h4 className='colGre mt-[40px]'>STAY IN TOUCH</h4>
          <p className='text-white mt-[10px] text-sm'>Sign up and get latest news</p>
          <p className='text-white mt-[5px] text-sm'>Environment and Sustainability</p>

          <p className='text-white mt-[40px] text-sm'>+260 - 972 293 076</p>
          <p className='text-white mt-[5px] text-sm'>info@360salvage.co.za</p>
          <p className='text-white mt-[5px] text-sm'>28 John St Selby South</p>
          <p className='text-white mt-[5px] text-sm'>Jo’burg, South Africa</p>
        </div>
      </div>

      <hr />

      <div className='flex flex-wrap md:flex flex-row text-white justify-around mt-[20px]'>
        <p className='transs cursor-pointer hover:text-red-400 text-xs' onClick={()=>{
          Navigate(`/site-map`)
        }}>Site map</p>
        <p className='transs cursor-pointer hover:text-red-400 text-xs' onClick={()=>{
          Navigate(`/use-of-cookies`)
        }}>Use of cookies</p>
        <p className='transs cursor-pointer hover:text-red-400 text-xs' onClick={()=>{
          Navigate(`/cookie-settings`)
        }}>Cookie Settings</p>
        <p className='transs cursor-pointer hover:text-red-400 text-xs' onClick={()=>{
          Navigate(`/legal-information`)
        }}>Legal Information</p>
        <p className='transs cursor-pointer hover:text-red-400 text-xs' onClick={()=>{
          Navigate(`/privacy-policy`)
        }}>Data Privacy</p>
        <p className='transs cursor-pointer hover:text-red-400 text-xs' onClick={()=>{
          Navigate(`/environment-and-sustainability`)
        }}>Environment & Sustainability</p>
        <p className='transs cursor-pointer hover:text-red-400 text-xs' onClick={()=>{
          Navigate(`/anti-slavery-statement`)
        }}>Anti- slavery Statement`</p>
      </div>
      </div>
    </div>
  )
}

export default Footer