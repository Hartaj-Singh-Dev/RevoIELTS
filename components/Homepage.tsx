import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Homepage.css"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Homepage = () => {
  const [openNav, setOpenNav] = useState(false)

  const dropRef = React.useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const handleClickOutside = (event: any) =>{
      if(!dropRef.current?.contains(event.target)){
        setOpenNav(false)
      }
    }
    document.addEventListener("mousedown" , handleClickOutside)
    return () =>{
      document.removeEventListener("mousedown" , handleClickOutside)
    }
  },[dropRef])

  return (
    <>
    <main className='h-screen w-full max-w-full bg-[#ECF0FA]'>
         <nav className="w-full relative navbar  bg-[#F2F4F7] flex justify-center ">
        <div className='w-full flex justify-between sm:w-[97vw] md:w-[90vw] '>
          <div>
            <img src="RoveLogo.svg" className='w-[12.5rem]' alt="" />            
          </div>
          <div className="hidden sm:flex mr-[4rem] md:mr-[7rem]">
            <ul className='list-none flex h-full items-center px-8'>
             <li className="px-5 font-['Montserrat']  text-xl subpixel-antialiased text-slate-700 hover:text-slate-500 cursor-pointer" >About</li>
              <li className="px-5 font-['Montserrat']  text-xl subpixel-antialiased text-slate-700 hover:text-slate-500 cursor-pointer" >Courses</li>
             <li className="px-5 font-['Montserrat']  text-xl subpixel-antialiased text-slate-700 hover:text-slate-500 cursor-pointer" >Contact</li>
            </ul>
          </div>
          <div className=' sm:hidden h-full flex mr-10 justify-center items-center '>
         <button onClick={()=>{setOpenNav(!openNav)}}>{openNav ? <i className="fa-solid fa-xmark animate-pulse fa-2x"></i> : <i className="fa-solid animate-pulse fa-2x fa-bars"></i> }</button> 
          </div>
        </div>
        {openNav && (
          <div ref={dropRef} className="z-30 sm:hidden transition flex justify-center items-center ease-in-out delay-100 duration-700 absolute h-[15rem] w-[14rem] right-1 top-[6.1rem] openNav ">
           <ul className='list-none flex flex-col justify-evenly h-full items-center p-8'>
             <li className="px-5 font-['Montserrat']  text-2xl subpixel-antialiased text-slate-200 hover:text-slate-100 cursor-pointer" >About</li>
              <li className="px-5 font-['Montserrat']  text-2xl subpixel-antialiased text-slate-200 hover:text-slate-100 cursor-pointer" >Courses</li>
             <li className="px-5 font-['Montserrat']  text-2xl subpixel-antialiased text-slate-200 hover:text-slate-100 cursor-pointer" >Contact</li>
            </ul>
          
         </div>
        )}
         </nav>
      <section className="h-[90vh] sm:flex sm:h-full w-full">
        <div className=" w-full md:w-1/2 h-full px-4 md:px-6 py-[3rem] md:py-[2rem] flex justify-end items-center">
          <div className="flex flex-col w-full h-full md:h-[90%] items-center justify-around ">
            <h1 className="font-['Switzer'] text-left text-[3.2rem] sm:text-[4rem] md:text-[5.3rem]  antialiased tracking-tight  font-bold leading-[1.2]">
              Welcome to Rove,
             your premier destination,
              for IELTS preparation
            </h1>
            <h2 className="font-['Montserrat'] font-normal w-full  text-[1.4rem] tracking-tight sm:text-left  sm:text-[1.5rem] text-gray-500">
            <p className="sm:w-4/5">  Get quality couses with us with the best price ,
               you can get the best couse from us
               We have top mentors . </p>
            </h2>
            <button className="sm:mb-3 flex justify-center items-center md:mb-6 bg-[#2a2828] w-[14rem] px-[1rem] py-[1rem]">
              <p className="font-['Poppins']  text-slate-100 text-2xl">enroll now</p>
            <ArrowOutwardIcon className="text-xl ml-2 text-slate-50"/>
            </button>
          </div>
        </div>
        <div className="hidden  lg:w-1/2 h-full bg-[url('/homepageIMGCOMP.png')] bg-center bg-no-repeat bg-cover lg:flex justify-center items-center">
        </div>
       </section>
        </main> 
    </>
  )
}

export default Homepage