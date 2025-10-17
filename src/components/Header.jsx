import React, { useEffect, useState } from 'react'



const Header = () => {
    const [isScroll,setIsScroll]=useState(false)

useEffect(()=>{
    const handleScroll=()=>{
        setIsScroll(window.scrollY>50);
        
    }
    window.addEventListener('scroll',handleScroll)
    return () => { window.removeEventListener('scroll',handleScroll)
}},[])
  return (
    <header className={`px- fixed lg:px-14   left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScroll?"bg-white/95 backdrop-blur-md shadow-lg":"bg-transparent"
    }`}>
        <nav className='container-max px-6'>
            <div className='flex items-center justify-between h-16 '>
                <div className='flex items-center space-x-2 '>
                    <div >
                        <img src="vow_logo.webp" className='rounded-3xl ' alt="logo" height={38} width={38} />
                    </div>
                    <span className={`font-bold text-lg ${isScroll?'text-grey-900':'text-white'}`}>
                        Voice of the Wild
                    </span>
                </div>
                <div className='hidden md:flex items-center space-x-3.5 overflow-hidden'>
                    <a href='#about'  className={`font-semibold  ${isScroll?'text-gray-900':'text-white'}`}>About</a>
                    <a href='#register' className={`font-semibold  ${isScroll?'text-gray-900':'text-white'}`}>Register</a>
                    <a  href='#contact' className={`font-semibold  ${isScroll?'text-gray-900':'text-white'}`}>Contact</a>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header