import React from 'react'
import './Clients.css'
import First from "../Assets/CAR BRANDS/HONDA.png"
import Second from "../Assets/CAR BRANDS/Toyota-logo.jpg"
import Third from "../Assets/CAR BRANDS/audi.jpg"
import Fourth from "../Assets/CAR BRANDS/ford.jpg"
import Fifth from "../Assets/CAR BRANDS/mazda.jpg"
import Sixth from "../Assets/CAR BRANDS/mercedes.png"
import Seventh from "../Assets/CAR BRANDS/mitsubishi.png"
import Eight from "../Assets/CAR BRANDS/tata.png"
function Clients() {
 
  return (
    <div className='w-full flex flex-col'>
        <div className='flex align-middle min-h-[30vh]'> 
            <h3 className='my-auto ml-[100px]'>OUR CLIENTS AND PARTNERS</h3>
        </div>

        <div className='redty min-h-[30vh] flex px-[10px] xl:px-[100px] relative overflow-hidden'>
          <div class="logos">
            <div class="logos-slide">
              <img src={First} alt="" />
              <img src={Second} alt="" />
              <img src={Third} alt="" />
              <img src={Fourth} alt="" />
              <img src={Fifth} alt="" />
              <img src={Sixth} alt="" />
              <img src={Seventh} alt="" />
              <img src={Eight} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Clients