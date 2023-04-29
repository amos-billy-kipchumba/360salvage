import React, {useEffect} from 'react'
import './LearnMore.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
function LearnMore() {
    const Navigate = useNavigate()

    const [searchParams] = useSearchParams();
    
    const paramaQuestion = searchParams.get('question');
    const paramaAnswer = searchParams.get('answer');

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, [])
  return (
    <div className='w-full min-h-[100vh] flex flex-col'>
        <div className='w-full h-[25vh] lg:h-[20vh] md:h-[30vh] xl:h-[40vh] pb-8 flex flex-col justify-end bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>Learn more</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle text-xs cursor-wait' onClick={()=>{
                    Navigate('/')
                }}>
                    <span className='mr-2 text-gray-600'>For better, for cars</span>
                </h5>
            </div> 
        </div>

        <div className='flex flex-col w-[80%] xl:w-[60%] m-auto gap-y-[20px]'>
            <h3>{paramaQuestion}</h3>
            <p>{paramaAnswer}</p>
        </div>
    </div>
  )
}

export default LearnMore