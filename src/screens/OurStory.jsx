import { useEffect } from "react"
import { useTheme } from "../theme"
import Tree from "../assets/svgs/tree.svg"
import down from "../assets/svgs/down1.svg"
import { Link } from "react-scroll";
import DavidConteh from '../assets/svgs/davidconteh card.svg'

export default function OurStory () {
    const {theme, setTheme} = useTheme()
    useEffect(() => {
        setTheme('bg-black text-white')
    })
    return (
        <section className=" mt-20 px-5 md:px-35 pb-20">
            <header className="w-full relative">
                <div className="container mx-auto">
                    <img className="block absolute top-0 right-0 h-[200px] object-cover md:pr-[23%]" src={Tree} alt=""/>
                    <h2 className="text-[50px] md:text-[60px] w-[80%] md:w-[35%] md:mx-auto pl-7 md:pl-0 md:mt-40 ">Africans have a <span className="text-lightblue">unique</span> story to tell</h2>
                    <img className="block absolute bottom-3 md:top-[50%] md:pl-[25.5%] sm:left-0  sm:h-[120px]" src={Tree} alt=""/>
                </div>
            </header>
            <article className="">
                <p className="text-[30px] mt-[80px] text-extra-lightgray md:text[40px] md:w-[50%] md:mx-auto">
                Storyafrika is a platform showcasing the real-life experiences and stories of individual Africans, highlighting their upbringing, everyday successes, and much more.

                </p>
               <Link to="about" smooth={true} duration={500}> <img className=" hidden md:block mx-auto mt-20 h-200px w-200px" src={down} alt="down" /></Link> 
            </article>
            <article id ="about" className="md:w-[45%] md:mx-auto  md:top-20">
                <h2 className="block  mt-[80px] mb-[80px] text-[50px] text-white  md:top-60 w-[292px] h-[122px]">How we began</h2>
                <p className="text-[30px] text-extra-lightgray  px-auto ">This is how Storyafrika began: A man named Balla shared with me how he grew up in Kabala, in an extended family with 17 siblings. He recounted the activities they engaged in, the games they played as children, and how his father managed to protect all his kids during the war.</p>
                <p className="text-[30px] text-extra-lightgray mt-[20px]">This fascinating story allowed me to vividly imagine his experiences, and I wanted others to hear it as well. Thus, the idea of creating a platform dedicated to sharing the stories and everyday experiences of people like Balla was born.</p>
                 <img
                 className="block  md:mx-0 ml-0 mt-10 pl-0 sm:w-[336px] sm:h-[98px]"
                 src={DavidConteh}
                 alt=''
                 />
            </article>
 
            
        </section>
    )
}