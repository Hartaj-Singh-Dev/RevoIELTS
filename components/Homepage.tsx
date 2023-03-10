import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Homepage.css"

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
            <img src="RoveLogo.svg" className='w-[13.5rem]' alt="" />            
          </div>
          <div className="hidden sm:flex mr-[4rem] md:mr-[7rem]">
            <ul className='list-none flex h-full items-center px-8'>
             <li className="px-5 font-['Poppins']  text-xl subpixel-antialiased text-slate-600 hover:text-slate-500 cursor-pointer" >About</li>
              <li className="px-5 font-['Poppins']  text-xl subpixel-antialiased text-slate-600 hover:text-slate-500 cursor-pointer" >Courses</li>
             <li className="px-5 font-['Poppins']  text-xl subpixel-antialiased text-slate-600 hover:text-slate-500 cursor-pointer" >Contact</li>
            </ul>
          </div>
          <div className=' sm:hidden h-full flex mr-10 justify-center items-center '>
         <button onClick={()=>{setOpenNav(!openNav)}}>{openNav ? <i className="fa-solid fa-xmark animate-pulse fa-2x"></i> : <i className="fa-solid animate-pulse fa-2x fa-bars"></i> }</button> 
          </div>
        </div>
        {openNav && (
          <div ref={dropRef} className="z-30 sm:hidden transition flex justify-center items-center ease-in-out delay-100 duration-700 absolute h-[15rem] w-[14rem] right-1 top-[6.1rem] openNav ">
           <ul className='list-none flex flex-col justify-evenly h-full items-center p-8'>
             <li className="px-5 font-['Poppins']  text-2xl subpixel-antialiased text-slate-400 hover:text-slate-600 cursor-pointer" >About</li>
              <li className="px-5 font-['Poppins']  text-2xl subpixel-antialiased text-slate-400 hover:text-slate-600 cursor-pointer" >Courses</li>
             <li className="px-5 font-['Poppins']  text-2xl subpixel-antialiased text-slate-400 hover:text-slate-600 cursor-pointer" >Contact</li>
            </ul>
          
         </div>
        )}
         </nav>
      <section className="h-[90vh] sm:h-full w-full">
        <div className=" w-full sm:w-1/2 h-full px-4 sm:px-5 py-[3rem] sm:py-[3rem] flex justify-center items-center">
          <div className="flex flex-col w-full h-full justify-around sm:justify-around ">
            <h1 className="font-['Clash_Display'] text-left text-[3.2rem] sm:text-[4rem] md:text-[5rem]  antialiased tracking-tight leading-none font-bold">
              Welcome to Rove,
             your premier destination,
              for IELTS preparation
            </h1>
            <h2 className="font-['Archivo'] text-[1.4rem] tracking-tight text-left sm:text-[1.8rem] text-gray-500">
              Get quality couses with us with the best price ,
               you can get the best couse from us
               .We have top mentors .
            </h2>
            <button className="mb-3 flex justify-center items-center md:mb-6 bg-[#2a2828] w-[14rem] px-[1rem] py-[1rem]">
              <p className="font-['Poppins']  text-slate-300 text-2xl">enroll now</p>
            </button>
          </div>
        </div>
        <div className='hidden sm:w-1/2 h-full sm:block'>

        </div>
       </section>
        </main> 
    </>
  )
}

export default Homepage