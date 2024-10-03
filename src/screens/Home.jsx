import { useTheme } from "../theme"

export default function Home () {
    const {theme, setTheme} = useTheme('')

    return (
        <section className={"hero container mx-auto flex items-center justify-between mt-24" + ' ' + theme}>
            <div className="relative isolation-isolate w-full px-5 pb-5 md:before:hidden md:p-0 md:w-3/5 xl:w-2/4">
                <h2 className="text-brown text-xl -mt-8 md:-mt-0 md:text-[24px] lg:text-[32px]">Inspiring Journey</h2>
                <h3 className="text-[55px] sm:text-[65px] md:text-[45px] lg:text-[75px]">Success Stories & Experiences of Everyday Africans</h3>
                <button className="bg-lightblue px-[12px] py-2 rounded-full text-white text-lg mt-5 hover:bg-purple"><a href="https://stories.storyafrika.live">Start Reading</a></button>
            </div>
        </section>
    )
}