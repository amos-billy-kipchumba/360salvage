import { Close, Facebook, Instagram, LinkedIn, Menu, Twitter, WhatsApp } from '@mui/icons-material'
import React, {useState, useEffect} from 'react'
import './Header.css'
import {useNavigate} from 'react-router-dom'
import Pipa from '../Assets/logo/DNR-360_SALVAGE_LOGO-05-removebg-preview.png'
import HeadTopper from './HeadTopper'
import HeadBottomer from './HeadBottomer'
function Header() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    useEffect(() => {
        const allLi = document.querySelector('.close-li').querySelectorAll("li");
        function changeMenuActive() {
            allLi.forEach(n => n.classList.remove('mimo'));
            this.classList.add("mimo")
        }
        allLi.forEach( n => n.addEventListener('click', changeMenuActive))
    }, []);
    

    const Navigate = useNavigate();
  return (
    <div className={`HeaderMain flex flex-col w-full justify-between md:justify-between items-center min-h-16 absolute z-10 ${show && "nav__black"}`}>
        <HeadTopper />
        <div className='flex w-full justify-between md:justify-between items-center h-16'>
            <div className='cursor-pointer md:ml-[100px]' onClick={()=>{
                Navigate('/')
            }}>
                <h1 className={nav ? 'hidden' : 'block'}>
                    <img src={Pipa} alt='icon' className='pipa' />
                </h1>
            </div>

            <ul className='hidden list-none h-full md:flex close-li align-middle justify-center font-medium text-xs'>
                <li className='md:mr-[30px] mt-auto mb-auto' onClick={()=>{
                    Navigate('/')
                }}>HOME</li>
                <li className='md:mr-[30px] mt-auto mb-auto' onClick={()=>{
                    Navigate('/film-tv');
                }}>ABOUT</li>
                <li className='md:mr-[30px] mt-auto mb-auto' onClick={()=>{
                    Navigate('/photography');
                }}>SERVICES</li>
                <li className='md:mr-[30px] mt-auto mb-auto' onClick={()=>{
                    Navigate('/animation');
                }}>360 AUTO SHOP*</li>

                <button className='buttonHead' onClick={()=>{
                    Navigate('/speak-to-an-expert');
                }}>
                    SPEAK TO AN EXPERT
                </button>
            </ul>

            {/* Mobile menu drop down */}

            <div className='md:hidden z-10' onClick={handleNav}>
                {nav ? <Close /> : <Menu /> }
            </div>

            <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-yellow-500 px-4 py-7 flex flex-col transMe' : 'absolute left-[-100%] top-0 w-full bg-gray-900 px-4 py-7 flex flex-col transMe'}>
                <ul className='text-black'>
                    <h1><img src={Pipa} alt='icon' className='pipa' /></h1>
                    <li className='border-b text-white' onClick={()=>{
                        Navigate('/')
                    }}>Home</li>
                    <li className='border-b text-white' onClick={()=>{
                        Navigate('/film-tv');
                    }}>Film/TV</li>
                    <li className='border-b text-white' onClick={()=>{
                        Navigate('/photography');
                    }}>Photography</li>
                    <li className='border-b text-white' onClick={()=>{
                        Navigate('/animation');
                    }}>Animation</li>
                    <li className='border-b text-white' onClick={()=>{
                        Navigate('/clients');
                    }}>Clients</li>
                    <li className='border-b text-white' onClick={()=>{
                        Navigate('/services');
                    }}>Services</li>

                    <div className='flex justify-between my-6'>
                        <Facebook className='text-gray-500 hover:text-white' />
                        <WhatsApp className='text-gray-500 hover:text-white' />
                        <Twitter className='text-gray-500 hover:text-white' />
                        <LinkedIn className='text-gray-500 hover:text-white' />
                        <Instagram className='text-gray-500 hover:text-white'/>
                    </div>
                </ul>
            </div>
        </div>

        <HeadBottomer />
    </div>
  )
}

export default Header