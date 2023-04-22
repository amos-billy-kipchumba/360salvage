import React, {useState, useEffect} from 'react'
import SlideData from './SliderData';
import './Banner.css'
function Slider() {
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
  return (
    <div className='container-slider w-full h-full relative flex flex-col' id="myList">
    
            {SlideData && SlideData.map((object, index)=>{
                return(
                <section className={sliderIndex === index + 1 ? "slide active-anim h-full w-full" : "slide h-full w-full"} key={index} id='home'>
                    <img src={object.Image} alt='' className='w-full h-screen object-cover' />
                    <div className='w-full h-full absolute bg-gray-900/60 top-0 left-0'></div>
                    <div className='BannerOverlayContainer absolute bottom-[50px] p-[10px] left-[0px] md:bottom-[100px] md:left-[20px] xl:left-[100px] text-white py-4 flex flex-col px-2'>
                        <h2>{object.h2}</h2>
                        <h3 className='pt-1 w-[98%] md:w-[400px] mt-6'>
                        {object.h4}
                        </h3>
        
                        <div className='BannerOverlayContainerChild mt-10'>
                        <span></span>
        
                        <span>{object.tag}</span>
                        </div>
                    </div>
                </section>
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

export default Slider