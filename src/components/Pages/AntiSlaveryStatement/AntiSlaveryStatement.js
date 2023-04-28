import React, {useEffect} from 'react'
import './AntiSlaveryStatement.css'
import { useNavigate } from 'react-router-dom';
function AntiSlaveryStatement() {
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
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>Anti- slavery Statement</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle text-xs cursor-wait' onClick={()=>{
                    Navigate('/')
                }}>
                    <span className='mr-2 text-gray-600'>For better, for cars</span>
                </h5>
            </div>
        </div>

        <div className='w-full px-[10px] lg:px-[100px] bg-white py-[20px] lg:py-[50px]'>
            <h3>Anti- slavery Statement'</h3>
            <p className='mt-[20px]'>The Modern Slavery Act (MSA 2015) includes a provision for large businesses to publicly state each year the action they have taken to ensure their supply chains, in respect of the provision of goods and services, are slavery free. The Act applies to RBG Kew and to Enterprises as a wholly owned subsidiary of RBG Kew.</p>
            <h4 className='mt-[20px] underline colRo'>The Board of Trustees of the Royal Botanic Gardens Kew (“RBG Kew”) Slavery and Human Trafficking Statement 2021- 2022</h4>
            <p className='mt-[20px]'>This statement sets out the steps that the Royal Botanic Gardens, Kew (‘RBG Kew’) has taken during the financial year ending 31 March 2022 to ensure, as far as possible, that modern slavery is not taking place within its business or its supply chains. RBG Kew has a zero-tolerance approach to modern slavery and is committed to acting ethically, transparently and with integrity in all our business dealings and relationships. To our knowledge, there have been no instances of modern slavery during 2021-22.</p>
        </div>
    </div>
  )
}

export default AntiSlaveryStatement