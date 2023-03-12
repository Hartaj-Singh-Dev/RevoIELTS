import React from "react";

const About = () => {
  return (
    <>
    <div className="relative">
      <section className="min-h-screen w-full bg-[#F2F4F7] flex justify-center  before:content-[''] 
      before:absolute before:top-0 before:w-full before:h-[5rem] before:z-10 before:bg-gradient-to-b before:from-[#ECF0FA] before:to-[#F2F4F7]">
        <div className="w-full sm:w-[95vw] md:w-[90vw] pt-20 ">
            <div className="w-full  flex flex-col px-2 py-4">
                <h2 className="text-xl text-slate-900 font-['Poppins'] font-semibold">We are Proud to say that ,
                    <span>we are certified by - </span>
                </h2>
                <div className="w-full flex flex-col sm:flex-row">

                </div>
            </div>
            <div className="w-full p-2 mt-2 flex flex-col sm:flex-row flex-wrap items-center justify-around">
                <div className=" sm:w-[25rem] sm:p-5 flex mb-4 sm:m-0 pl-2 h-[6rem] sm:h-[6.5rem] justify-around items-center shadow-lg sm:shadow-xl border border-slate-400 rounded-lg bg-[#f0f2f5]">
                    <div className="h-[4rem] px-3 flex justify-center rounded-lg items-center bg-[#E43A19]"><i className="fa text-black fa-2x fa-light fa-chalkboard-user"></i></div>
                    <div className="px-2">
                        <h3 className="font-['Poppins'] text-xl font-medium">Best Instructors</h3>
                        <p className="font-['Switzer'] text-sm text-slate-600">we have highly skilled and highly experienced instructors around the globe</p>
                    </div>
                </div>
                <div className=" sm:w-[25rem] sm:p-5 flex mt-4  sm:m-0 mb-4 h-[6rem] sm:h-[6.5rem] justify-around items-center shadow-lg sm:shadow-xl border border-slate-400 p-3 rounded-lg bg-[#f0f2f5]">
                    <div className="px-4 py-3 bg-yellow-400 rounded-lg"></div>
                    <div>
                        <h3>Best Instructors</h3>
                        <p>we have highly skilled and highly experienced instructors around the globe</p>
                    </div>
                </div>
                <div className=" sm:w-[25rem] sm:p-5 flex mt-4 sm:m-0 h-[6rem] sm:h-[6.5rem] pl-2 justify-around items-center shadow-lg sm:shadow-xl border border-slate-400 rounded-lg bg-[#f0f2f5]">
                    <div className="h-[4rem] flex px-3 justify-center items-center rounded-lg  bg-[#111F4D]"><i className="fa text-slate-100 fa-2x fa-light fa-people-arrows"></i> </div>
                    <div className="px-2">
                        <h3 className="font-['Poppins'] text-xl  font-medium ">Best Instructors</h3>
                        <p className="font-['Switzer'] text-sm text-slate-600 ">we have highly skilled and highly experienced instructors around the globe</p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-8">
               <h2 className="font-['Poppins'] text-center text-[2.7rem] font-semibold">Our Popular Courses</h2> 
            </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
