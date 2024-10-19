import WomanWritingSvg from '../assets/svgs/woman-writing.svg';
import Know_us from "../assets/svgs/Know us_.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react"
import { useTheme } from "../theme"

export default function ForWriters() {
      const {theme, setTheme} = useTheme()
    useEffect(() => {
        setTheme('bg-black text-white')
    })
    return (
        <section className='container mx-auto px-5 pb-20 md:flex md:flex-col md:items-center md:mx-auto'>
            <header className='mt-[3%] h-[45vh] md:flex md:justify-between md:w-[70%]'>
                <h1 className="text-[40px] md:text-[80px] w-[50%] md:w-[40%] pl-2 md:pl-0 md:order-2 md:mt-[12%]">
                    For <span className="text-red">Writers</span>
                </h1>
                <img 
                    className='relative top-[-70px] h-[311px] md:h-[406px] w-[415px] md:w-[542px] md:mt-[15%] animate-woman-writing md:order-1' 
                    src={WomanWritingSvg} 
                    alt="Illustration of a woman writing" 
                />
            </header>
            <main className="md:w-[75%] mt-[-15%] md:mt-[10%]">
                <p className="text-[30px] md:text-[35px] text-lightgray">
                    storyafrika provides a platform for African writers to share their stories, insights, and creativity with the world.
                </p>
                <p className="text-[30px] md:text-[35px] text-lightgray md:mt-7">
                    We invite writers to contribute their unique perspectives and narratives without any barriers or fees.
                </p>
            </main>
            <Link to="/about-us" smooth={true} duration={500}>
                <img
                    className="hidden md:block absolute bottom-[-2%] right-[12.5%] h-[22px] w-[82px] cursor-pointer"
                    src={Know_us}
                    alt="Know Us link"
                />
            </Link>
        </section>
    );
}
