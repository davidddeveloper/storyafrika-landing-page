import { useEffect } from "react"
import { useTheme } from "../theme"
import { Link } from "react-router-dom"

export default function Navigation () {
    const {theme, setTheme} = useTheme()
    const root = document.getElementById('root')

    const handleChangeTheme = () => {
        setTheme('bg-black text-white')
    }
        const handleChangeTheme_white = () => {
        setTheme('bg-white text-black')
    }

    useEffect(() => {
        root.className = theme + ' transition-colors duration-500'
    }, [root, theme])

    return (
        <header className={"container mx-auto flex justify-between items-center pt-10 px-5 sm:px-2 md:px-0"}>
            <h1 className="text-[30px] logo" onClick={ handleChangeTheme_white}><Link to="/">storyafrika</Link></h1>
            <nav>
                <ul className="flex gap-4 items-center">
                    <li className="shrink-0 text-lg" onClick={ handleChangeTheme} ><Link to="/our-story">Our story</Link></li>
                    <li className="shrink-0"><a href="https://stories.storyafrika.live" className="text-lg">Sign in</a></li>
                    <li className="hidden sm:block"><button className="bg-black px-[12px] py-2 rounded-full text-white hover:bg-purple"><a href="https://stories.storyafrika.live">Share Experience</a></button></li>
                    <li className="hidden md:block"><button className="bg-lightblue px-[12px] py-2 rounded-full text-white hover:bg-purple"><a href="https://stories.storyafrika.live">Start Reading</a></button></li>
                </ul>
            </nav>
        </header>
    )
}