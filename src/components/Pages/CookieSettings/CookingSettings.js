import React, {useEffect} from 'react'
import './CookieSettings.css'
import { useNavigate } from 'react-router-dom';
function CookingSettings() {
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
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>Cookie Settings</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle text-xs cursor-wait' onClick={()=>{
                    Navigate('/')
                }}>
                    <span className='mr-2 text-gray-600'>For better, for cars</span>
                </h5>
            </div>
        </div>

        <div className='w-full px-[10px] lg:px-[100px] bg-white py-[20px] lg:py-[50px]'>
            <h2>Cookie Settings</h2>
            <p className='mt-[20px]'>1 Information about our use of cookies</p>
            <p className='mt-[20px]'>1.1 This policy explains how we use cookies on www.360salvage.com</p>
            <p className='mt-[20px]'>1.2 We recommend that you read our cookies policy so that you are aware of how we use them and can take steps to reject or delete the cookies if you do not agree to them being used.</p>
            <p className='mt-[20px]'>1.3 Cookies are small text files stored on your device and used by website operators in order to make websites work, or work more efficiently, as well as to provide information to the operators of the website or certain third parties. Each cookie usually contains a unique string of characters, which allows a website to distinguish your browser or device from other users.</p>
            <p className='mt-[20px]'>1.4 We use cookies to enable you to navigate between pages and to generally improve your user experience. We also use cookies to analyse how users interact with our Websites, to enable you to share content using social media, and to provide you with embedded content from third parties.</p>
            <p className='mt-[20px]'>1.5 We may combine information collected via cookies with information such as your IP address, the type of browser, device and operating system, for example to provide statistical information about visitors to our Website. Where our Website uses third party cookies, you should check with the relevant third party to see how they use cookies (see section 2 below).</p>
            <p className='mt-[20px]'>1.6 You can find out more about cookies at http://www.allaboutcookies.org. The user instructions for your browser or device will explain how you can control the use of cookies on your device.</p>
        </div>
    </div>
  )
}

export default CookingSettings