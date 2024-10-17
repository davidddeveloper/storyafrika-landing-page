import { useTheme } from "../theme"
import Tree from "../assets/svgs/tree.svg"
import Tree2  from "../assets/svgs/tree2.svg"
import Readers  from "../assets/svgs/readers.svg"
import Writers  from "../assets/svgs/writers.svg"
import Group  from "../assets/svgs/Group 5.svg"
import { Link } from "react-router-dom"
import Know_us  from "../assets/svgs/Know us_.svg"


export default function Home() {
  const { theme, setTheme } = useTheme('');

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
        <img
          className="absolute top-[35%] right-[30%] h-[200px] object-cover"
          src={Tree}
          alt="Tree SVG"
        />
        <img
          className="absolute top-[43%] left-[21%] h-[200px] object-cover"
          src={Tree}
          alt="Tree SVG"
        />
        <img
          className="absolute top-10 left-[22%] h-[200px] "
          src={Tree}
          alt="Tree SVG"
        />
        <img
          className="absolute top-[20%] left-[33%] h-[200px] object-cover opacity-70"
          src={Tree2}
          alt="Tree2 SVG"
        />
        <img
          className="absolute top-[20%] left-[49%] h-[200px] object-cover opacity-70"
          src={Tree2}
          alt="Tree2 SVG"
        />
        <Link to="/for-readers" smooth={true} duration={500}><img
          className="absolute top-[2%] right-[25%] h-[120px] cursor-pointer"
          src={Readers}
          alt="Readers SVG"
        />
        </Link>
        <Link to="/for-writers" smooth={true} duration={500}> <img
          className="absolute top-[55%] right-[48%] h-[120px] cursor-pointer"
          src={Writers}
          alt="Writers SVG"
        />
        </Link>
        <Link to="/about-us" smooth={true} duration={500}> <img
          className="absolute bottom-[25%] right-[5%] h-[22px] w-[82px] cursor-pointer"
          src={Know_us}
          alt="Writers SVG"
        />
        </Link>

        <div className="flex justify-center  h-full top-10">
          <img
            className="h-[600px]"
            src={Group}
            alt="Group SVG"
          />
        </div>
         <article className="">
                <p className="text-[30px] mt-[80px] text-lightgray md:text[40px] md:w-[50%] md:mx-auto">
                Storyafrika is a platform showcasing the real-life experiences and stories of individual Africans, highlighting their upbringing, everyday successes, and much more.

                </p>
        </article>
           
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative isolation-isolate w-full px-5 pb-5 md:before:hidden md:p-0 md:w-3/5 xl:w-2/4">
        <h2 className="text-brown text-xl -mt-8 md:-mt-0 md:text-[24px] lg:text-[32px]">
          Inspiring Journey
        </h2>
        <h3 className="text-[55px] sm:text-[65px] md:text-[45px] lg:text-[75px]">
          Success Stories & Experiences of Everyday Africans
        </h3>
        <button className="bg-lightblue px-[12px] py-2 rounded-full text-white text-lg mt-5 hover:bg-purple">
          <a href="https://stories.storyafrika.live">Start Reading</a>
        </button>
      </div>
    </section>
  );
}

