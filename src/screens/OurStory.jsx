import { useEffect } from "react"
import { useTheme } from "../theme"
import Tree from "../assets/svgs/tree.svg"
import down from "../assets/svgs/down1.svg"


export default function OurStory () {
    const {theme, setTheme} = useTheme()
    useEffect(() => {
        setTheme('bg-black text-white')
    })
    return (
        <section className="  mt-20 px-5 md:px-35 pb-20">
            <header className="w-full relative">
                <div className="container mx-auto">
                    <img className="block absolute top-0 right-0 h-[200px] object-cover" src={Tree} alt=""/>
                    <h2 className="text-[50px] md:text-[70px] w-[50%] md:w-[40%] mx-auto ">Africans have a <span className="text-lightblue">unique</span> story to tell</h2>
                    <img className="block absolute bottom-0 left-0 sm:left-30" src={Tree} alt=""/>
                </div>
            </header>
            <article className="relative">
                <p className="text-[30px] mt-[80px] text-extra-lightgray md:text[40px] md:w-[50%] md:mx-auto">
                Storyafrika is a platform showcasing the real-life experiences and stories of individual Africans, highlighting their upbringing, everyday successes, and much more.

                </p>
               <div className="flex justify-center items-center">
                 <img className="absolute hidden sm:block md:top-60" src={down} alt="down" />
               </div>
            </article>
            <article className="">
                <h2 className="mt-[80px] mb-[80px] text-[50px] text-white w-[50%]">How we began</h2>
                <p className="text-[30px] text-extra-lightgray">This is how Storyafrika began: A man named Balla shared with me how he grew up in Kabala, in an extended family with 17 siblings. He recounted the activities they engaged in, the games they played as children, and how his father managed to protect all his kids during the war.</p>
                <p className="text-[30px] text-extra-lightgray mt-[20px]">This fascinating story allowed me to vividly imagine his experiences, and I wanted others to hear it as well. Thus, the idea of creating a platform dedicated to sharing the stories and everyday experiences of people like Balla was born.</p>
            </article>
        </section>
    )
}