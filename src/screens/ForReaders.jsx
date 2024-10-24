import WomanReadingSvg from '../assets/svgs/woman-reading.svg';
import Know_us  from "../assets/svgs/Know us_.svg"
import { Link } from "react-router-dom"
import KnowUsLink from '../components/KnowUsLink';

export default function ForReaders () {
    return (
       <section className='container mx-auto px-5 pb-20 md:flex md:flex-col md:items-center md:mx-auto '>
         <header className='relative container mx-auto mt-[90px] md:px-auto md:flex md:flex-row-reverse md:justify-between items-center'>
           <h1 className=" text-[50px] md:self-start md:left-[25%] md:top-[-10px] top-[17%] md:text-[80px] w-[40%] pl-2 md:order-1 lg:mt-20">For <span className="text-lightblue">Readers</span></h1>
           <img className='animate-woman-writing w-full md:order-2 md:scale-x-[-1] md:w-[60%]' src={WomanReadingSvg} alt="" />
         
         </header>
         <main className="container mx-auto mt-[40px]">
           <p className="text-[30px] text-lightgray">storyafrika reflects the African writing industry with insightful, educational, and timely stories written by real African professionals. </p>
           <p className=" text-[30px] text-lightgray md:mt-7">To the internet visitor, we pledge no paywall, no pop-up ads, and ≈42 new stories every day. Learn anything about Africa for free on storyafrika.</p>
         </main>
         <KnowUsLink />

       </section>
    )
}