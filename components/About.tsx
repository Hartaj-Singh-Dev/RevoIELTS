import React from "react";

const About = () => {
  return (
    <>
    <div className="relative">
      <section className="min-h-screen w-full bg-[#F2F4F7] flex justify-center items-center  before:content-[''] 
      before:absolute before:top-0 before:w-full before:h-[10rem] before:z-10 before:bg-gradient-to-b before:from-[#ECF0FA] before:to-[#F2F4F7]">
        <div className="w-full sm:w-[95vw] md:w-[90vw] ">
            <div className="w-full  flex flex-col px-1 py-4">
                <h2 className="text-xl text-slate-900 font-['Poppins'] font-semibold">We are Proud to say that ,
                    <span>we are certified by - </span>
                </h2>
            </div>
            <div className="w-full flex flex-col items-center justify-around">
                <div className="w-[15rem] h-9 flex justify-around items-center">
                    <div></div>
                    <div>
                        <h3>Best Instructors</h3>
                        <p>we have highly skilled and highly experienced instructors around the globe</p>
                    </div>
                </div>
                <div className="w-[15rem] h-9 flex justify-around items-center">
                    <div></div>
                    <div>
                        <h3>Best Instructors</h3>
                        <p>we have highly skilled and highly experienced instructors around the globe</p>
                    </div>
                </div>
                <div className="w-[15rem] h-9 flex justify-around items-center">
                    <div></div>
                    <div>
                        <h3>Best Instructors</h3>
                        <p>we have highly skilled and highly experienced instructors around the globe</p>
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
