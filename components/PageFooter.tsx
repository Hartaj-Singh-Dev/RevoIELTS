import React from 'react'

const PageFooter = () => {
  return (
  <footer className="px-4 sm:px-16  py-7 bg-[#020205] min-h-[30vh]">
    <section className='grid grid-cols-1 grid-rows-4 sm:grid-cols-4 sm:grid-rows-1'>
    <div className='w-full flex flex-col  max-w-[20rem] items-start'>
      <h2 className="font-['Poppins'] text-[1.3rem] sm:text-[1.5rem] sm:font-semibold font-medium text-slate-50">About Us</h2>
      <p className="font-['Roboto'] pt-3 text-sm sm:text-lg text-slate-300">We provide exceptional IELTS coaching with experienced tutors, customized study plans, and comprehensive resources to help you achieve your desired score.
</p>
    </div>
    <div className='w-full flex max-w-[20rem] flex-col items-start'>
      <h2 className="font-['Poppins'] text-[1.3rem] sm:text-[1.5rem] sm:font-semibold font-medium text-slate-50">Contact info</h2>
      <div className="">
        <p className="font-['Roboto'] pt-3 text-sm sm:text-lg text-slate-300">+91 7308 72045</p>
        <p className="font-['Roboto'] pt-3 text-sm sm:text-lg text-slate-300">rovaPlug@gmail.com</p>
      </div>
    </div>
    <div className='w-full flex flex-col  max-w-[20rem] items-start'>
      <h2 className="font-['Poppins'] text-[1.3rem] sm:text-[1.5rem] sm:font-semibold font-medium text-slate-50">Important Links</h2>
      <div className=''>
        <p className="font-['Roboto'] pt-3 text-sm sm:text-lg text-slate-300"><a href="">From Beginner to Fluent: Mastering English for IELTS in 4 Months </a></p>
        <p className="font-['Roboto'] pt-3 text-sm sm:text-lg text-slate-300"><a href="">From Beginner to Fluent: Mastering English for IELTS in 4 Months </a></p>
        <p className="font-['Roboto'] pt-3 text-sm sm:text-lg text-slate-300"><a href="">From Beginner to Fluent: Mastering English for IELTS in 4 Months </a></p>
      </div>
    </div>
    <div className="w-full flex justify-center items-center">
      <img src="/RoveLogoWhite.png" className='w-[13rem] h-auto' alt="" />
    </div>
    </section>
    <div className='w-full flex justify-center items-center'>
      <h3 className="font-['Roboto'] text-lg text-slate-400">@2023 copyright , Rove IELTS school</h3>
    </div>
  </footer>
  )
}

export default PageFooter;