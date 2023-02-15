import Navbar from "../components/Navbar";
import "./homepage.css";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-[#f4ffff] mt-2 mb-3 sm:mt-3 flex justify-center items-center">
        <section className="w-[96vw] h-full md:w-[94vw] flex flex-col md:flex-row  ">
          <div className="w-full md:w-1/2 h-full flex mb-10 pb-10 sm:mb-0 flex-col justify-evenly items-center">
            <div className="bg-[#de1533] dataBlob1 w-11/12 text-slate-100   font-['Montserrat'] leading-tight text-[1rem] sm:text-[1.4rem]  ">
              <p className="p-[1.3rem]  md:p-[1.6rem] ">
                Welcome to Rove , your premier destination for IELTS
                preparation. If you're a high school graduate looking to pursue
                higher education or career opportunities abroad, you've come to
                the right place.
              </p>
            </div>
            <div className="w-11/12 font-['Poppins'] text-[#0e0e0e] font-extrabold text-2xl  ">
              <p>
                Join our community of successful IELTS test-takers and take the
                first step towards achieving your dreams. Contact us today to
                learn more about our coaching program
              </p>
             <a href="/courses"><button className="enroll-now">Enroll now</button></a> 
            </div>
          </div>
          <div className=" w-full md:w-1/2 h-full flex flex-col justify-evenly items-center">
            <div>
              <img src={"/VNU_M551_11.svg"} alt="" className="w-[28rem] md:w-[45rem]" />
            </div>
            <div className="bg-[#C170AB] dataBlob2 w-11/12 text-slate-100 mt-7 text-[1rem] font-['Montserrat'] leading-tight sm:text-[1.4rem] ">
              <p className="p-[1.3rem] md:p-[1.6rem]">
                Welcome to Rove , your premier destination for IELTS
                preparation. If you're a high school graduate looking to pursue
                higher education or career opportunities abroad, you've come to
                the right place.
                Welcome to Rove , your premier destination for IELTS
                preparation. If you're a high school graduate looking to pursue
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Homepage;
