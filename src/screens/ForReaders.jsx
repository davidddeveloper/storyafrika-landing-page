import WomanReadingSvg from '../assets/svgs/woman-reading.svg';
import Know_us  from "../assets/svgs/Know us_.svg"
import { Link } from "react-router-dom"

export default function ForReaders () {
    return (
       <section className='container mx-auto px-5 pb-20 md:flex md:flex-col md:items-center md:mx-auto '>
         <header className='mt-[3%] h-[45vh] md:flex md:justify-between md:w-[65%]'>
           <h1 className=" text-[40px] md:text-[80px]  w-[50%] md:w-[40%]  pl-2 md:pl-0 md:order-2 md:mt-[12%]">For <span className="text-lightblue">Readers</span></h1>
           <img className='relative top-[-70px] h-[311px] md:h-[406px] w-[415px] md:w-[542px] md:mt-[15%]  animate-woman-reading  md:order-1 md:scale-x-[-1]' src={WomanReadingSvg} alt="" />
         
         </header>
         <main className="md:w-[70%]  mt-[-15%] md:mt-[10%] ">
           <p className="text-[30px] md:text-[35px]  text-lightgray">storyafrika reflects the African writing industry with insightful, educational, and timely stories written by real African professionals. </p>
           <p className=" text-[30px] md:text-[35px] text-lightgray md:mt-7">To the internet visitor, we pledge no paywall, no pop-up ads, and ≈42 new stories every day. Learn anything about Africa for free on storyafrika.</p>
         </main>
         <Link to="/about-us" smooth={true} duration={500}> <img
          className=" hidden md:block absolute bottom-[-10%] right-[12.5%] h-[22px] w-[82px] cursor-pointer"
          src={Know_us}
          alt="Writers SVG"
        />
        </Link>

       </section>
    )
}