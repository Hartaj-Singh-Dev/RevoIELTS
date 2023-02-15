

const Navbar = () => {
  return (
    <>
    <nav className="flex w-full p-1 justify-center items-center">
    <div className="w-[98vw] md:w-[94vw] md:mt-1 bg-[#1e1e1e] rounded-2xl flex p-2 justify-between  items-center">
          <div className="md:ml-5">
            <img src="/RoveLogoWhite.svg" className="w-44 md:w-[14rem]" alt="" />

        </div>
        <div className="sm:hidden pr-1" >
            <button><i className="fa-solid fa-bars fa-2x text-[#f7f7f7]"></i></button>
        </div>
        <div className="hidden sm:inline">
            <ul className="flex mr-16">   
            <li className="text-white pr-5  font-['Poppins'] antialiased font-bold text-lg"><a href={"/about"}>About</a></li>
            <li className="text-white pr-5 font-['Poppins'] antialiased font-bold text-lg"><a href={"/about"}>Courses</a></li>
            <li className="text-white pr-5 font-['Poppins'] antialiased font-bold text-lg"><a href={"/about"}>Services</a></li>
            <li className="text-white pr-5 font-['Poppins'] antialiased font-bold text-lg"><a href={"/#about"}>Contact</a></li>
            </ul>
            </div>
        </div>
    </nav>
     
    </>
  )
}

export default Navbar