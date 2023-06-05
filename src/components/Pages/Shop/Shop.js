import React, {useState, useEffect} from 'react'
import './Shop.css'
import { FeaturedData } from './Data'
import FeaturedProducts from './FeaturedProducts';
import { useNavigate } from 'react-router-dom';
import Slider3 from './Slider3';
import { ArrowRight } from '@mui/icons-material';
function Shop() {
  const [clk1, setClk1] = useState(false)
  const [clk2, setClk2] = useState(false)
  const [clk3, setClk3] = useState(false)
  const [clk4, setClk4] = useState(false)

  const [content1, setContent1] = useState('')
  //Scroll to the top on load-
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  },[]);
  //End of Scroll to the top on load

  const Navigate = useNavigate()
  return (
    <div className='w-full flex flex-col bg-white'>
        <div className='w-full h-[25vh] lg:h-[20vh] md:h-[30vh] xl:h-[40vh] pb-8 flex flex-col justify-end bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>360 SHOP</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle text-xs cursor-wait' onClick={()=>{
                    Navigate('/')
                }}>
                    <span className='mr-2 text-gray-600'>For better, for cars</span>
                </h5>
            </div> 
        </div>


        <div className='troto flex flex-col-reverse xl:flex-row w-[98%] xl:w-[60%] mx-auto mt-[50px] lg:justify-between'>
            <div className='flex flex-col flex-grow lg:mr-4'>
              <p className='tutus mx-auto my-2'>Filter by</p>
              <div className='flex flex-col w-full mb-[30px] lg:mb-auto'>
                <div className='w-full flex flex-col'>
                    <div className={`scf ${clk1 && 'thg'} tuliv w-full p-4 text-xs flex justify-between align-middle cursor-pointer ease-out`} onClick={()=>{
                      setClk1(!clk1)
                      if(clk2 === true) {
                        setClk2(false)
                      }
                      if(clk3 === true) {
                        setClk3(false)
                      }
                      if(clk4 === true) {
                        setClk4(false)
                      }
                    }}><p className='my-auto'>PRICE</p> <span className='my-auto'><ArrowRight /></span></div>
                    {clk1 !== false ?
                      <div className='w-full flex'>
                        <input type='number' placeholder='price' className='w-full p-[10px] border m-2' value={content1} onChange={(e)=>setContent1(e.target.value)} />
                      </div>
                       :
                       null
                    }
                    <div className={`scf ${clk2 && 'thg'} tuliv w-full p-4 text-xs flex justify-between align-middle cursor-pointer ease-out`} onClick={()=>{
                      setClk2(!clk2)

                      if(clk1 === true) {
                        setClk1(false)
                      }
                      if(clk3 === true) {
                        setClk3(false)
                      }
                      if(clk4 === true) {
                        setClk4(false)
                      }
                    }}><p className='my-auto'>NAME</p> <span className='my-auto'><ArrowRight /></span></div>
                    {clk2 !== false ?
                      <div className='w-full flex'>
                        <input type='text' placeholder='name' className='w-full p-[10px] border m-2' value={content1} onChange={(e)=>setContent1(e.target.value)} />
                      </div>
                       :
                       null
                    }
                    <div className={`scf ${clk3 && 'thg'} tuliv w-full p-4 text-xs flex justify-between align-middle cursor-pointer ease-out`} onClick={()=>{
                      setClk3(!clk3)
                      if(clk2 === true) {
                        setClk2(false)
                      }
                      if(clk1 === true) {
                        setClk1(false)
                      }
                      if(clk4 === true) {
                        setClk4(false)
                      }
                    }}><p className='my-auto'>CATEGORY</p> <span className='my-auto'><ArrowRight /></span></div>
                    {clk3 !== false ?
                      <div className='w-full flex'>
                        <input type='text' placeholder='category' className='w-full p-[10px] border m-2' value={content1} onChange={(e)=>setContent1(e.target.value)} />
                      </div>
                       :
                       null
                    }
                    <div className={`scf ${clk4 && 'thg'} tuliv w-full p-4 text-xs flex justify-between align-middle cursor-pointer ease-out`} onClick={()=>{
                      setClk4(!clk4)
                      if(clk2 === true) {
                        setClk2(false)
                      }
                      if(clk3 === true) {
                        setClk3(false)
                      }
                      if(clk1 === true) {
                        setClk1(false)
                      }
                    }}><p className='my-auto'>SUBCATEGORY</p> <span className='my-auto'><ArrowRight /></span></div>
                    {clk4 !== false ?
                      <div className='w-full flex'>
                        <input type='text' placeholder='subcategory' className='w-full p-[10px] border m-2' value={content1} onChange={(e)=>setContent1(e.target.value)} />
                      </div>
                       :
                       null
                    }
                </div>
              </div>
            </div>
            <div className='gond w-[98%] lg:w-[60%] h-[50vh] lg:h-[50vh] mx-auto lg:mx-0 flex flex-col justify-center align-middle'><Slider3 item={FeaturedData} /></div>
        </div>

        <FeaturedProducts item={FeaturedData} price={content1} />
    </div>
  )
}

export default Shop