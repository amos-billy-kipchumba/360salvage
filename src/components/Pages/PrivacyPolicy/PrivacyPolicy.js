import React, {useEffect} from 'react'
import './PrivacyPolicy.css'
function PrivacyPolicy() {
    //Scroll to the top on load-
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load
  return (
    <div className='AboutPum w-full flex flex-col'>
        <div className='w-full h-[25vh] lg:h-[20vh] md:h-[30vh] xl:h-[40vh] pb-8 flex flex-col justify-end bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>DATA PRIVACY</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle'>
                    <span className='mr-2 text-gray-600'>YOU ARE HERE:</span>/ <span className='ml-1 text-blue-400'>DATA PRIVACY</span>
                </h5>
            </div>
        </div>


        <div className='flex flex-col bg-white w-full px-[10px] lg:px-[100px] py-[10px] lg:py-[50px]'>
            <h2 className='text-blue-600'>Introduction</h2>

            <p className='mt-[20px] text-sm'>360 Salvage is committed to protecting the privacy of individuals and to complying with applicable personal data protection laws and regulations. We want you to feel comfortable about how we collect, process, secure and share your personal data. This Privacy Notice details the types of personal data we collect, how we use your personal data, who we share it with and how you can control its use.</p>
            <p className='mt-[20px] text-sm'>This Privacy Notice applies to the main personal data processing Airbus performs. Information relating to specific processing or tools may be detailed in a dedicated privacy notice.</p>
            <p className='mt-[20px] text-sm'>What is personal data?</p>
            <p className='mt-[20px] text-sm'>Personal data is information that can be used to identify a person either directly or indirectly. It includes information such as name, contact details, identification numbers, financial data, location data or online identifiers.</p>

            <h1 className='text-blue-600 mt-[50px]'>What personal data do we use?</h1>

            <p className='mt-[20px] text-sm'>Depending on the nature of your relationship with Airbus, we collect, use and process the following categories of personal data:</p>

            <ul className='flex flex-col list-disc text-sm m-0 p-0'>
                <li>Identification data such as name(s), family name(s), contact details (postal address, email, telephone number(s)), signature, citizenship/nationality, age, gender, date of birth, place of birth, ID number, passport number, social security number, picture/image, voice, videos, CCTV images, audio recordings, car registration and/or driver’s license.</li>
                <li>Professional data such as CV, whether you are an employee of Airbus or one of its subsidiaries or a shareholder</li>
                <li>Economic and financial data such as bank details and credit card details.</li>
                <li>IT data such as IP address, user account, company personal identifier(s)/corporate IDs, security pass number, smartcards, Cookie identifiers and other tracking technologies, radio frequency identification tags, activity logs (from tools and protocols, apps, security building access control, etc.), passwords for access to IT systems and/or websites.</li>
            </ul>

            <p className='mt-[20px]'>We may collect this personal data:</p>

            <ul className='flex flex-col list-disc text-sm m-0 p-0'>
                <li>directly from you when you complete a form and you provide us such information, and/or </li>
                <li>indirectly through the organisation you are working for if needed for a purpose listed below or information made publicly available.</li>
            </ul>

            <h2 className='text-blue-600 mt-[50px]'>What are the purposes of the processing of your personal data?</h2>

            <p className='mt-[10px]'>Airbus may process your personal data for the following purposes: </p>

            <p className='mt-[10px]'>1. Website Browsers / Administration</p>
        </div>
    </div>
  )
}

export default PrivacyPolicy