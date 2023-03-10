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
          <div className="hidden sm:flex mr-[4rem]">
            <ul className='list-none flex h-full items-center px-8'>
             <li className="px-5 font-['Poppins']  text-xl subpixel-antialiased text-slate-800 hover:text-slate-600 cursor-pointer" >About</li>
              <li className="px-5 font-['Poppins']  text-xl subpixel-antialiased text-slate-800 hover:text-slate-600 cursor-pointer" >Courses</li>
             <li className="px-5 font-['Poppins']  text-xl subpixel-antialiased text-slate-800 hover:text-slate-600 cursor-pointer" >Contact</li>
            </ul>
          </div>
          <div className=' sm:hidden h-full flex mr-10 justify-center items-center '>
         <button onClick={()=>{setOpenNav(!openNav)}}>{openNav ? <i className="fa-solid fa-xmark animate-pulse fa-2x"></i> : <i className="fa-solid animate-pulse fa-2x fa-bars"></i> }</button> 
          </div>
        </div>
        {openNav && (
          <div ref={dropRef} className="z-30 transition flex justify-center items-center ease-in-out delay-100 duration-700 absolute h-[15rem] w-[14rem] right-1 top-[6.1rem] openNav ">
           <ul className='list-none flex flex-col justify-evenly h-full items-center p-8'>
             <li className="px-5 font-['Poppins']  text-2xl subpixel-antialiased text-slate-400 hover:text-slate-600 cursor-pointer" >About</li>
              <li className="px-5 font-['Poppins']  text-2xl subpixel-antialiased text-slate-400 hover:text-slate-600 cursor-pointer" >Courses</li>
             <li className="px-5 font-['Poppins']  text-2xl subpixel-antialiased text-slate-400 hover:text-slate-600 cursor-pointer" >Contact</li>
            </ul>
          
         </div>
        )}
         </nav>
      <section className="h-full w-full">

       </section>
        </main> 
    </>
  )
}

export default Homepage