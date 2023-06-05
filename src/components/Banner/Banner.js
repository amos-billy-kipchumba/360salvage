
import React, {useState, useEffect} from 'react'
import './Banner.css'
import Vid from '../Assets/banner/Destruction Manenos.mp4'
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
        if(sliderIndex === 4) {
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
        <video loop autoPlay muted className='min-h-full min-w-full object-cover'>
                <source
                src={Vid}
                type="video/mp4"
                />
                Your browser does not support the video tag.
        </video>
        {SlideData && SlideData.map((object, index)=>{
          return(
          <section className={sliderIndex === index + 1 ? "slide active-anim h-full w-full" : "slide h-full w-full"} key={index} id='home'>
              <div className='w-full h-full absolute bg-gray-900/70 top-0 left-0'></div>
              <div className='BannerOverlayContainer absolute bottom-[50px] p-[10px] left-[0px] md:bottom-[100px] md:left-[20px] xl:left-[100px] text-white py-4 flex flex-col px-2'>
                  <h2>{object.h2}</h2>
                  <h4 className='pt-1 w-[98%] md:w-[800px] mt-6'>
                  {object.h4}
                  </h4>

                  <div className='BannerOverlayContainerChild mt-10'>
                  <span></span>

                  <span>{object.tag}</span>
                  </div>
              </div>
          </section>
          )
      })}

      <div className='dotsy'>
      {Array.from({length: SlideData.length}).map((item, index) => (
        <div 
        className={sliderIndex === index + 1 ? "doty dot-outlinedy" : "doty"}
        onClick={()=> {
          moveDot(index + 1);
        }} key={index}></div>
      ))}
      </div>
    </div>
  )
}

export default Banner