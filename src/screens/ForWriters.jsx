import WomanWritingSvg from '../assets/svgs/woman-writing.svg';
import { Link } from "react-router-dom";
import { useEffect } from "react"
import { useTheme } from "../theme"
import KnowUsLink from '../components/KnowUsLink';

export default function ForWriters() {
      const {theme, setTheme} = useTheme()
    useEffect(() => {
        setTheme('bg-black text-white')
    })
    return (
        <section className='container mx-auto px-5 pb-20 md:flex md:flex-col md:items-center md:mx-auto'>
            <header className='relative container mx-auto mt-[90px] md:px-auto md:flex md:justify-center md:items-center'>
                <h1 className="text-[50px] md:self-start md:left-[25%] md:top-[-10px] top-[17%] md:text-[80px] w-[40%] md:w-[20%] pl-2 md:order-1">
                    For <span className="text-red">Writers</span>
                </h1>
                <img 
                    className=' animate-woman-writing md:order-2' 
                    src={WomanWritingSvg} 
                    alt="Illustration of a woman writing" 
                />
            </header>
            <main className="container mx-auto mt-[40px]">
                <p className="text-[30px] text-lightgray">
                    StoryAfrica elevates African writing far and wide across the interwebs. With saturated stories in our library, we've cultivated rare publishing and African expertise.
                </p>
                <p className="text-[30px] text-lightgray md:mt-7 md:w-[97%]">
                    African writers of all genres, writers from all African industries are welcome here. To the contributing writer, we pledge quality story distribution, African editorial expertise, and community growth.
                </p>
                 
                <KnowUsLink color='white'/>

            </main>

        </section>
    );
}
