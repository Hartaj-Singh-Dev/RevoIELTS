import React from "react";

const About = () => {
  return (
    <>
    <div className="relative">
      <section className="min-h-screen w-full bg-[#F2F4F7] flex justify-center  before:content-[''] 
      before:absolute before:top-0 before:w-full before:h-[5rem] before:z-10 before:bg-gradient-to-b before:from-[#ECF0FA] before:to-[#F2F4F7]">
        <div className="w-full flex flex-col justify-around sm:w-[95vw] md:w-[90vw] pt-20 ">
            <div className="w-full h-[15rem] flex flex-col justify-evenly items-center mt-16 mb-14 md:flex-row px-2 py-4">
                <h2 className="text-xl md:text-[1.7rem] text-slate-800 font-['Montserrat'] font-bold">We are Proud to say that ,
                    <span>we are certified by - </span>
                </h2>
                <div className="w-full md:w-auto flex items-center justify-around mt-7 mb-4 sm:m-0 flex-col sm:flex-row">
                    <img src="pearsonLogo.png" className="w-[14rem]" alt="" />
                    <img src="pngwing.com.png" className="w-[14rem] mt-4 sm:mt-0 sm: ml-10" alt="" />
                </div>
            </div>
            <div className="w-full hidden p-2 mt-2 mb-11  flex-col sm:flex-row flex-wrap items-center justify-around">
                <div className=" sm:w-[25rem] sm:p-4 flex mb-4 sm:m-0  h-[6rem] sm:h-[8rem] justify-around items-center shadow-lg sm:shadow-xl border border-slate-300 rounded-lg bg-[#f0f2f5]">
                    <div className="h-[5.5rem] px-4 flex justify-center rounded-lg items-center bg-[#E43A19]"><i className="fa text-white fa-2x fa-light fa-chalkboard-user"></i></div>
                    <div className="px-3">
                        <h3 className="font-['Switzer'] text-xl md:text-[1.4rem] font-semibold">Best Instructors</h3>
                        <p className="font-['Switzer'] text-sm md:text-[1rem] text-slate-600">we have highly skilled and highly experienced instructors around the globe</p>
                    </div>
                </div>
                <div className=" sm:w-[25rem] sm:p-4 flex mt-4  sm:m-0 mb-4 h-[6rem] sm:h-[8rem] justify-around items-center shadow-lg sm:shadow-xl border border-slate-300 rounded-lg bg-[#f0f2f5]">
                    <div className="h-[5.5rem] px-4 flex justify-center items-center  bg-[#020205] rounded-lg"> <i className="fa fa-2x fa-solid text-white fa-users-rectangle"></i></div>
                    <div className="px-3">
                        <h3 className="font-['Switzer'] text-xl md:text-[1.4rem] font-semibold">Best Instructors</h3>
                        <p className="font-['Switzer'] text-sm md:text-[1rem]  text-slate-600">we have highly skilled and highly experienced instructors around the globe</p>
                    </div>
                </div>
                <div className=" sm:w-[25rem] sm:p-4 flex mt-4 sm:m-0 h-[6rem] sm:h-[8rem]  justify-around items-center shadow-lg sm:shadow-xl border border-slate-300 rounded-lg bg-[#f0f2f5]">
                    <div className="h-[5.5rem] flex px-4 justify-center items-center rounded-lg  bg-[#111F4D]"><i className="fa text-white fa-2x fa-light fa-people-arrows"></i> </div>
                    <div className="px-3">
                        <h3 className="font-['Switzer'] text-xl md:text-[1.4rem]  font-semibold ">Best Instructors</h3>
                        <p className="font-['Switzer'] text-sm md:text-[1rem] text-slate-600 ">we have highly skilled and highly experienced instructors around the globe</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col flex-wrap sm:flex-row items-center justify-around">
                <div className="w-[20rem] mt-[3rem] sm:mt-0 md:w-[28rem] h-[13rem] px-4 py-1 flex flex-col items-start justify-around">
                    <div className="p-4 rounded-full bg-[#ea38194e]"><i className="fa text-[#E43A19] fa-2x fa-light fa-chalkboard-user"></i></div>
                    <div><span className="font-['archivo'] text-xl md:text-[1.4rem] font-semibold">Best Instructors</span><p className="font-['Switzer'] text-[0.9rem] md:text-[1.1rem] text-slate-700">around the globe we have highly skilled and highly experienced instructors around the globe</p></div>
                </div>
                <div className="w-[20rem] mt-[3rem] sm:mt-0 md:w-[28rem] h-[13rem] px-4 py-1 flex flex-col items-start justify-around ">
                    <div className="p-4 rounded-full bg-[#02020544]"><i className="fa text-[#020205] fa-2x fa-solid fa-users-rectangle"></i></div>
                    <div><span className="font-['archivo'] text-xl md:text-[1.4rem] font-semibold">Best Instructors</span><p className="font-['Switzer'] text-[0.9rem]  md:text-[1.1rem] text-slate-700">around the globe we have highly skilled and highly experienced instructors around the globe</p></div>
                </div>
                <div className="w-[20rem] mt-[3rem] sm:mt-0 md:w-[28rem] h-[13rem] px-4 py-1 flex flex-col items-start justify-around ">
                    <div className="p-4 bg-[#111f4d6d] rounded-full"><i className="fa text-[#111F4D] fa-2x fa-light fa-people-arrows "></i></div>
                    <div><span className="font-['archivo'] text-xl md:text-[1.4rem] font-semibold">Best Instructors</span><p className="font-['Switzer'] text-[0.9rem]  md:text-[1.1rem] text-slate-700">around the globe we have highly skilled and highly experienced instructors around the globe</p></div>
                </div>

            </div>
            <div className="w-full mb-11 mt-16 sm:mt-[5rem]">
               <h2 className="font-['Poppins'] text-center text-[2.2rem] sm:text-[2.5rem] font-semibold">Our Popular Courses</h2> 
            <div className="w-full flex flex-col flex-wrap sm:flex-row sm:justify-evenly mb-11 sm:mt-[4rem] items-center min-h-[50vh] ">
                <div className="w-[22rem] sm:w-[25rem] h-[27.5rem] mt-11 sm:mt-4 sm:m-0 rounded-xl shadow-lg">
                    <div className="w-full h-[14rem]">
                        <img src="BeginnerCourse.jpg" className="w-full rounded-xl h-auto max-h-full" style={{objectFit:"cover"}} alt="" />
                    </div> 
                    <div className="h-[13rem] mt-2 px-4  w-full py-3 flex flex-col justify-around items-end ">
                        <h2 className="font-['Montserrat'] font-semibold text-[1.35rem] ">From Beginner to Fluent: Mastering English for IELTS in 4 Months</h2>                        
                    <button className=" bg-[#020205] text-slate-100 font-['Poppins'] font-semibold rounded-lg  text-lg w-[9rem] h-[3rem]">enroll now</button>
                    </div>                   
                </div>
                <div className="w-[22rem] sm:w-[25rem] h-[27.5rem] mt-11 sm:mt-4 sm:m-0 rounded-xl shadow-lg">
                    <div className="w-full h-[14rem]">
                        <img src="IntermediateCourse.jpg" className="w-full rounded-xl h-auto max-h-full" style={{objectFit:"cover"}} alt="" />
                    </div>
                    <div className="h-[13rem] mt-2 px-4  w-full py-3 flex flex-col justify-around items-end ">
                        <h2 className="font-['Montserrat'] font-medium text-[1.35rem] ">From Beginner to Fluent: Mastering English for IELTS in 4 Months</h2>
                        <button className=" bg-[#E43A19] text-slate-100 font-['Poppins'] font-semibold rounded-lg  text-lg w-[9rem] h-[3rem]">enroll now</button>
                    </div>
                </div>
                <div className="w-[22rem] sm:w-[25rem] h-[27.5rem] mt-11 mb-12 sm:mt-4 sm:m-0 rounded-xl shadow-lg">
                    <div className="w-full h-[14rem]">
                        <img src="ProfessionalCourse.jpg" className="w-full rounded-xl h-auto max-h-full" style={{objectFit:"cover"}} alt="" />
                    </div>
                    <div className="h-[13rem] mt-2 px-4  w-full py-3 flex flex-col justify-around items-end ">
                        <h2 className="font-['Montserrat'] font-medium text-[1.35rem] ">From Beginner to Fluent: Mastering English for IELTS in 4 Months</h2>
                        <button className=" bg-[#111F4D] text-slate-100 font-['Poppins'] font-semibold rounded-lg  text-lg w-[9rem] h-[3rem]">enroll now</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
