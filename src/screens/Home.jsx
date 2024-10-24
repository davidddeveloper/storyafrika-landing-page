import { useTheme } from "../theme"
import Tree from "../assets/svgs/tree.svg"
import Tree2  from "../assets/svgs/tree2.svg"
import Readers  from "../assets/svgs/readers.svg"
import Writers  from "../assets/svgs/writers.svg"
import Group  from "../assets/svgs/Group 5.svg"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import KnowUsLink from "../components/KnowUsLink"


export default function Home() {
  const { theme, setTheme } = useTheme('');

  useEffect(() => {
    setTheme('bg-white text-black')
  }, )


  return (
    <section
      className={
        'hero container mx-auto md:relative sm:flex sm:items-center sm:justify-between mt-24 ' +
        ' ' +
        theme
      }
    >
      {/* Wrapper for Desktop View */}
      <div className="hidden md:block relative h-screen w-full">
        <Link to="/for-readers" smooth={true} duration={500}><img
          className="absolute top-0 right-[5%] z-40 h-[120px] cursor-pointer"
          src={Readers}
          alt="Readers SVG"
        />
        </Link>
        <Link to="/for-writers" smooth={true} duration={500}> <img
          className="absolute bottom-[15%] lg:bottom-[8%] z-40 right-[48%] h-[120px] cursor-pointer"
          src={Writers}
          alt="Writers SVG"
        />
        </Link>
        <KnowUsLink />

        <div className="flex justify-center h-full relative">
        <img
          className="absolute bottom-[20%] lg:bottom-[10%] -left-[15%] lg:-left-0 lg:left-0 h-[200px] object-cover"
          src={Tree}
          alt="Tree SVG"
        />
        <img
          className="absolute top-[3%] md:top-[5%] left-0 -ml-10 md:left-[8%] h-[200px] object-cover"
          src={Tree}
          alt="Tree SVG"
        />
        <img
          className="absolute bottom-[25%] right-10 h-[200px] "
          src={Tree}
          alt="Tree SVG"
        />
        <img
          className="absolute top-[25%] left-[14%] h-[200px] object-cover opacity-70"
          src={Tree2}
          alt="Tree2 SVG"
        />
        <img
          className="absolute top-[25%] right-[20%] h-[200px] object-cover opacity-70"
          src={Tree2}
          alt="Tree2 SVG"
        />
          <div className="relative">
            <img
              className="h-[500px] lg:h-[550px] z-30 opacity-45"
              src={Group}
              alt="Group SVG"
            />
            <h2 className="inset-0 sm:text-[55px] lg:text-[75px] w-[80%] mx-auto sm:top-[18%] lg:top-[15%] absolute text-white z-10" >Success Stories & Experiences of Everyday Africans</h2>

          </div>
        </div>
           
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative isolation-isolate w-full px-5 pb-[100px] md:before:hidden md:p-0 md:w-3/5 xl:w-2/4">
        <h2 className="text-brown text-xl -mt-8 md:-mt-0 md:text-[24px] lg:text-[32px]">
          Inspiring Journey
        </h2>
       { /* text-[55px] sm:text-[65px] md:text-[45px] lg:text-[75px] */}
        <h3 className=" text_h ">
          Success Stories & Experiences of Everyday Africans
        </h3>

        <button className="bg-lightblue px-[12px] py-2 rounded-full text-white text-lg mt-5 hover:bg-purple">
          <a href="https://stories.storyafrika.live">Start Reading</a>
        </button>
      </div>
    </section>
  );
}

