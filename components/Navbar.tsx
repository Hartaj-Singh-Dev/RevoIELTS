
import { useEffect, useRef, useState } from "react"

const Navbar = () => {
  const [openDrop , setOpenDrop] = useState(false)

  const dropRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
   
    const handleClickOutside = (event: any)=>{
      if(!dropRef.current?.contains(event.target)){
        setOpenDrop(false)
      }

    }
   
    return()=>{
      document.removeEventListener("mousedown",handleClickOutside)
    }
  },[dropRef])

  return (
    <>
    <nav className="flex w-full p-1 justify-center items-center">
    <div className=" relative w-[98vw] md:w-[94vw] md:mt-1 bg-[#1c1c1c] rounded-2xl flex p-2 justify-between  items-center">
          <div className="md:ml-5">
          <a href="/"> <img src="/RoveLogo.svg" className="w-44 md:w-[13rem]" alt="" /> </a> 
        </div>
        <div className="sm:hidden pr-3" >
            <button onClick={()=>{setOpenDrop(!openDrop)}} className="bg-transparent border-0"><i className="fa-solid fa-bars fa-2x text-[#cf1934]"></i></button>
        </div>
        <div className="hidden sm:inline mr-20">
            <ul className="flex ">   
            <li className="text-white pr-5  font-['Poppins'] antialiased font-bold text-lg hover:text-slate-300"><a href={"/about"}>About</a></li>
            <li className="text-white pr-5 font-['Poppins'] antialiased font-bold text-lg hover:text-slate-300"><a href={"/about"}>Courses</a></li>
            <li className="text-white pr-5 font-['Poppins'] antialiased font-bold text-lg hover:text-slate-300"><a href={"/about"}>Material</a></li>
            <li className="text-white pr-5 font-['Poppins'] antialiased font-bold text-lg hover:text-slate-300"><a href={"/#about"}>Contact</a></li>
            </ul>
            </div>
            {
              openDrop && (
                <div ref={dropRef} className="absolute z-30 ease-in sm:hidden top-[6.5rem] right-2 bg-[#161616] rounded-2xl">
                  <div className="h-full w-full p-6">
                    <ul className="flex flex-col  ">   
                           <li className="text-white   font-['Poppins'] antialiased font-bold text-lg hover:text-slate-300"><a href={"/about"}>About</a></li>
                           <li className="text-white  pt-2 font-['Poppins'] antialiased font-bold text-lg hover:text-slate-300"><a href={"/about"}>Courses</a></li>
                          <li className="text-white pt-2  font-['Poppins'] antialiased font-bold text-lg hover:text-slate-300"><a href={"/about"}>Material</a></li>
                         <li className="text-white  pt-2 font-['Poppins'] antialiased font-bold text-lg hover:text-slate-300"><a href={"/#about"}>Contact</a></li>
                    </ul>
                  </div>
                </div>
              )
            }
            
        </div>
    </nav>
     
    </>
  )
}

export default Navbar