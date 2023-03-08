import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
    <main className='h-screen w-full max-w-full'>
         <nav className="w-full  bg-[#F2F4F7] flex justify-center ">
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
          <div className=' sm:hidden '>

          </div>
        </div>
         </nav>
      <section className="h-full bg-[#ECF0FA]">

       </section>
        </main> 
    </>
  )
}

export default Homepage