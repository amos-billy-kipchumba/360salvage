import React, {useState} from 'react'
import './Slider3.scss'
import ArrowLeft from '@mui/icons-material/ArrowLeft'
import ArrowRight from '@mui/icons-material/ArrowRight';
function Slider3({item}) {

    //Start of sliding arrows

    const [sliderIndex, setsliderIndex] = useState(1);

    const nextslide = () => {
    if(sliderIndex !== item.length) {
        setsliderIndex(sliderIndex + 1);
    }
    else if (sliderIndex === item.length) {
        setsliderIndex(1);
    }
    }

    const prevslide = () => {
    if(sliderIndex !== 1) {
        setsliderIndex(sliderIndex - 1);
    }
    else if (sliderIndex === 1) {
        setsliderIndex(item.length)
    }
    }

    const moveDot = index => {
    setsliderIndex(index);
    }


    //end of sliding arrows
  return (
    <div className='container-slider-shop1' id="myList">
      {item && item.map((object, index)=>{
        return(
          <div className={sliderIndex === index + 1 ? "slide-shop1 active-anim" : "slide-shop1"} key={index}>
            <img src={object.img} alt="" /> 
            <p>{object.title}</p>
          </div>
        );
      })}

      <span className={sliderIndex === 1 ? "vanish" : "prev"} onClick={prevslide}><ArrowLeft /></span>
      <span className={sliderIndex === item.length ? "vanish" : "next"} onClick={nextslide}><ArrowRight /></span>
      <div className='dots'>
        {Array.from({length: item.length}).map((item, index) => (
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

export default Slider3