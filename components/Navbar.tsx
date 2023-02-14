
const Navbar = () => {
  return (
    <>
    <nav className="flex w-full pt-2 pb-2 pr-4 justify-between  items-center">
        <div>
            <img src="/RoveLogo.svg" className="w-44" alt="" />

        </div>
        <div className="sm:hidden" >
            <button><i className="fa-solid fa-bars fa-2x"></i></button>
        </div>
        <div className="hidden sm:inline">
            <div>
            
            </div>
        </div>
    </nav>
    <div className="w-full h-[1px] bg-black"></div>
    
    </>
  )
}

export default Navbar