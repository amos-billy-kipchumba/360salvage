import React, {useEffect} from 'react'
import './SiteMap.css'
import { Link } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
function SiteMap() {

    //Scroll to the top on load-
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load

    const Navigate = useNavigate()
  return (
    <div className='w-full flex flex-col'>
        <div className='w-full h-[25vh] lg:h-[20vh] md:h-[30vh] xl:h-[40vh] pb-8 flex flex-col justify-end bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>Site Map</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle text-xs cursor-wait' onClick={()=>{
                    Navigate('/')
                }}>
                    <span className='mr-2 text-gray-600'>For better, for cars</span>
                </h5>
            </div>
        </div>

        <div className='flex flex-col w-full px-[10px] xl:px-[100px] bg-white py-4 xl:py-8'>
            <h3>HOME PAGE</h3>
            <p className='mt-[20px] flex align-middle gap-2 ml-[20px] cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate('/')
            }}><Link /> Front page of 360 salvage</p>
            <h3 className='mt-[20px]'>MAIN MENU</h3>
            <p className='ml-[20px] mt-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate('/about')
            }}><Link /> About</p>
            <p className='ml-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate('/services')
            }}><Link /> Services</p>
            <p className='ml-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate('/360shop')
            }}><Link /> 369 Shop</p>
            <h3 className='mt-[20px]'>SUB MENU ITEMS</h3>
            <p className='ml-[20px] mt-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate(`/service?name=GARAGE`)
            }}><Link /> JUNK YOUR CAR</p>
            <p className='ml-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate(`/service?name=VEHICLE PARTS`)
            }}><Link /> Vehicle parts</p>
            <p className='ml-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate(`/service?name=GARAGE`)
            }}><Link /> Garage services</p>
            <p className='ml-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate(`/service?name=WHEELS AND TIRES`)
            }}><Link /> Wheels and tires</p>
            <p className='ml-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate('/help')
            }}><Link /> Help</p>
            <p className='ml-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate('/search')
            }}><Link /> Search</p>
            <p className='ml-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate('/site-map')
            }}><Link /> Site map</p>
            <p className='ml-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate('/use-of-cookies')
            }}><Link /> Use of cookies</p>
            <p className='ml-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate('/cookie-settings')
            }}><Link /> Cookie settings</p>
            <p className='ml-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate('/legal-information')
            }}><Link /> Legal information</p>
            <p className='ml-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate('/private-policy')
            }}><Link /> Data privacy</p>
            <p className='ml-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate('/environment-and-sustainability')
            }}><Link /> Environment and sustainability</p>
            <p className='ml-[20px] flex align-middle gap-2 cursor-pointer hover:text-red-400' onClick={()=>{
                Navigate('/anti-slavery-statement')
            }}><Link /> anti slavery statement</p>
        </div>
    </div>
  )
}

export default SiteMap