import React, {useEffect} from 'react'
import './LegalInformation.css'
function LegalInformation() {
    //Scroll to the top on load-
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load
  return (
    <div className='w-full flex flex-col'>
        <div className='w-full h-[25vh] lg:h-[20vh] md:h-[30vh] xl:h-[40vh] pb-8 flex flex-col justify-end bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>Legal Information</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle text-xs'>
                    <span className='mr-2 text-gray-600'>YOU ARE HERE:</span>/ <span className='ml-1 text-green-400'>Legal Information</span>
                </h5>
            </div>
        </div>

        <div className='w-full px-[10px] lg:px-[100px] bg-white py-[20px] lg:py-[50px]'>
            <h2>360 RULES AND POLICIES</h2>
            <p className='mt-[20px]'>We're committed to providing a secure and fair marketplace for our buyers and sellers. To support this commitment, we've put in place rules and policies that govern our expectations of buyers and sellers, the actions we'll take to keep you safe, and how we'll protect you if something goes wrong.</p>
            <p className='mt-[20px]'>By becoming familiar with and following our policies, you'll help us maintain a safe environment for all, and be able to avoid interruptions that might come from inadvertent violations of our rules.</p>
            <p className='mt-[20px]'>In our policy section, you'll find information on items that can and can't be sold, guides to creating and maintaining listings, details on how we protect your personal details and more.</p>
            <p className='mt-[20px]'>You can also find our User Agreement, User Privacy Notice, and Cookie Notice. These lay out the most critical information around our terms of use, the information we collect from you, and how we keep that information safe.</p>
            <p className='mt-[20px] underline text-green-400'>Prohibited and restricted items</p>
            <p className='mt-[20px]'>Learn about items that can and can't be sold on 360 shop, and where we have restrictions on the sale of some products and services.</p>
            <p className='mt-[20px] underline text-green-400'>Rules and policies for buyers</p>
            <p className='mt-[20px]'>When you bid on or buy and item on eBay, you're agreeing to the rules we've set out for our community.</p>
            <p className='mt-[20px] underline text-green-400'>Feedback policies</p>
            <p className='mt-[20px]'>While feedback is intended as an open forum, we have guidelines and policies to ensure it's used constructively and fairly.</p>
        </div>
    </div>
  )
}

export default LegalInformation