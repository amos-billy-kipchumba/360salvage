
import React, {useState, useEffect} from 'react'
import './Banner.css'
import SlideData from './SliderData';
function Banner() {

  //Start of sliding arrows

  const [sliderIndex, setSliderIndex] = useState(1);

   const moveDot = index => {
    setSliderIndex(index);
   }

   useEffect(()=>{
    setTimeout(()=> {
      setSliderIndex(sliderIndex + 1)
     }, 10000);
     if(sliderIndex === 5) {
      setSliderIndex(1)
     }
   },[sliderIndex])


   //end of sliding arrows

   //Scroll to the top on load
   useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  },[]);
  //End of Scroll to the top on load
  return (
    <div className='container-slider' id="myList">
    {SlideData && SlideData.map((object, index)=>{
      return(
        <div className={sliderIndex === index + 1 ? "slide active-anim h-full w-full" : "slide h-full w-full"} key={index}>
          <img src={object.Image} alt='' className='w-full h-screen object-cover' />
          <div className='w-full h-full absolute bg-gray-900/60 top-0 left-0'></div>
          <div className='BannerOverlayContainer absolute bottom-[100px] left-[100px] text-white py-4 flex flex-col px-2'>
              <h2>{object.h2}</h2>
              <h3 className='pt-1 w-[400px] mt-6'>
                {object.h4}
              </h3>

              <div className='BannerOverlayContainerChild mt-10'>
                <span></span>

                <span>{object.tag}</span>
              </div>
          </div>
      </div>
      )
    })}

        <div className='dots'>
        {Array.from({length: SlideData.length}).map((item, index) => (
          <div 
          className={sliderIndex === index + 1 ? "dot dot-outlined" : "dot"}
          onClick={()=> {
            moveDot(index + 1);
          }} key={index}></div>
        ))}
        </div>
    </div>
  )
}

export default Banner