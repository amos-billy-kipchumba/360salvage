
import './Footer.css'
import WeDoImg from '../Assets/about/DNR-_360_SALVAGE_BRAND_LOGO-04-removebg-preview.png'
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
function Footer() {
  return (
    <div className='relative w-full min-h-[100vh] px-[100px] py-[50px] overflow-hidden'>
      <img src={WeDoImg} className='w-full h-full translate-y-[200px] translate-x-[50px] grayscale' alt='' />
      <div className='footer-container w-full h-full absolute top-0 left-0 flex flex-col py-[50px] px-[50px]'>
        <div className='flex w-full px-[50px]'>
          <div className='flex flex-col flex1 text-white'>
            <h4>360 -Salvage Plc</h4>

            <p className='mt-[50px]'>We offer an easy way for car owners to get rid of 
            their old vehicles at the best price and consequently help keep the environment clean at the 
            same time. Leave an enquiry and we’ll get in touch 
            Asap!</p>

            <p className='mt-[50px] mb-[10px]'>© 360 -Salvage Plc 2023. All rights reserved</p>
          </div>
          <div className='flex flex2 flex-col px-[50px]'>
            <div className='flex justify-between text-white'>
              <div className='flex flex-col'>
                <h3 className='text-green-400'>HOME</h3>
                <p className='mt-[50px]'>About us</p>
                <p className=''>Services</p>
                <p className=''>News & Blog</p>
                <p className=''>360 Salvage Shop®</p>
              </div>
              <div className='flex flex-col'>
                <h3 className='text-green-400'>PRODUCT & SERVICES</h3>
                <p className='mt-[50px]'>Sell my Car</p>
                <p className=''>Vehicle Parts</p>
                <p className=''>Wheels & Tyres</p>
                <p className=''>Mechanical Services</p>
              </div>
            </div>

            <div className='flex w-full justify-between flex-col mt-4'>
              <input type='text' placeholder='Your name' className='w-[49%] outline-none p-2 border border-white bg-transparent' />
              <div className='w-[full] flex justify-between mt-2'>
                <input type='email' placeholder='Your email' className='w-[49%] outline-none p-2 border border-white bg-transparent' />
                <input type='phone' placeholder='Your mobile no' className='w-[49%] outline-none p-2 border border-white bg-transparent' />
              </div>

              <textarea className='w-full min-h-[20vh] bg-white my-[20px] p-[10px] outline-none' placeholder='Your inquiry'></textarea>
              
              <button className='ml-auto bg-white p-[10px] mb-[20px]'>SEND MESSAGE</button>
            </div>
          </div>
          <div className='flex flex3 flex-col'>
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

        <div className='flex text-white justify-around mt-[20px]'>
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