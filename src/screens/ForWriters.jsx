import WomanWritingSvg from '../assets/svgs/woman-writing.svg';
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
            <header className='mt-[3%] h-[45vh] md:px-auto'>
                <h1 className="absolute md:left-[25%] md:top-[-10px] top-[17%] text-[40px] md:text-[80px] w-[40%] md:w-[20%] pl-2 md:order-1 md:mt-[12%]">
                    For <span className="text-red">Writers</span>
                </h1>
                <img 
                    className='absolute  md:pr-10 md:top-[-50px] md:right-[15%] righgt-0 h-[311px] md:h-[406px] w-[92%] md:w-[900px] md:mt-[12%] animate-woman-writing md:order-2' 
                    src={WomanWritingSvg} 
                    alt="Illustration of a woman writing" 
                />
            </header>
            <main className="md:w-[70%] mt-[-20%] md:mt-[4%]">
                <p className="text-[30px] md:text-[35px] text-white">
                    StoryAfrica elevates African writing far and wide across the interwebs. With saturated stories in our library, we’ve cultivated rare publishing and African expertise.
                </p>
                <p className="text-[30px] md:text-[35px] text-white md:mt-7 md:w-[97%]">
                    African writers of all genres, writers from all African industries are welcome here. To the contributing writer, we pledge quality story distribution, African editorial expertise, and community growth.
                </p>
                 
                <Link to="/about-us" smooth={true} duration={500}>
                    <p  className="hidden md:block md:absolute bottom-[-2%] right-[12.5%] h-[22px] w-[82px] cursor-pointer text-white"> Know us ?
                   </p>
                </Link>

            </main>

        </section>
    );
}
