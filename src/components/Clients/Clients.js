import React from 'react'
import './Clients.css'
import First from "./logos/3m.svg"
import Second from "./logos/barstool-store.svg"
import Third from "./logos/budweiser.svg"
import Fourth from "./logos/buzzfeed.svg"
import Fifth from "./logos/forbes.svg"
import Sixth from "./logos/macys.svg"
import Seventh from "./logos/menshealth.svg"
import Eight from "./logos/mrbeast.svg"
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