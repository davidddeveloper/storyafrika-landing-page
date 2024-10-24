import { Link } from "react-router-dom"
import Know_us  from "../assets/svgs/Know us_.svg"

export default function KnowUsLink ({color}) {
    const classes = `hidden md:block text-${color} hover:text-lightblue fixed bottom-10 right-[10%] h-[22px] z-40 w-[82px] cursor-pointer`
    return (
        <Link to="/about-us" smooth={true} duration={500} className={classes}> Know us?</Link>
    )
}