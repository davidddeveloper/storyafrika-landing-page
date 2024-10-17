import DavidConteh from '../assets/svgs/davidconteh card.svg'
import LukmanAufbau from '../assets/svgs/lukmanaufbau card.svg'
import Insight from '../assets/svgs/insight.svg'
export default function AboutUs () {
    return (
        <section className="px-5 pb-20">
            <header className="mt-[60px] md:ml-[19%] md:mt-[150px]">
                <div className="container mx-auto">
                    <h2 className="md:relative md:text-[60px] md:w-[50%] text-[50px] w-[50%]">About Us</h2>
                </div>
                <img
                className='hidden md:block md:absolute md:top-[97px] md:left-[40%] md:h-[374px] md:w-[409.42px] md:object-cover'
                src={Insight}
                alt=''
                />
            </header>
            <article className="mt-[60px] ">
                <div className="container mx-auto md:flex md:items-center md:flex-col md:w-[72%] ">
                    <p className="mt-10 text-[30px] md:text-[38px] md:text-lightgray">storyafrika is built for Africans to read, write, learn, and publish. We are an open and international community of contributing writers publishing stories and expertise for saturated curious and insightful monthly readers.</p>
                    <p className="mt-10 text-[30px] md:text-[38px] md:text-lightgray">Founded in August 2024, storyafrika is run by COO Lukman Aufbau and CEO and founder David Conteh.</p>
                    <div className="mt-10  md:flex md:justify-between md:items-center w-[80%]" >
                      
                        <img
                        className=" sm:block  md:mx-0 ml-0 mt-10 pl-0 w-[336px] h-[117px]"
                        src={DavidConteh}
                        alt=''
                        /> 
                        <img
                        className="hidden md:block   md:mx-0 mt-10 w-[336px] h-[117px]"
                        src={LukmanAufbau}
                        alt=''
                        />

                    
                    </div>
                    <p className="mt-10 text-[30px] md:text-[38px] md:text-lightgray">StoryAfrika's a small team of creators, writers, and Authors people working to publish the best African stories and build the best African publishing software. </p>
                    <p className="mt-10 text-[30px] md:text-[38px] md:text-lightgray">I run the business with my partner Lukman Aufbau. Our entirely free library is Success Stories & Experiences of Everyday Africans, #shortstories, #writing, #storytelling, and everything else #African stories. Our flagship software is the content management system that powers storyafrika. It’s built to connect everyday Africans through storytelling and writing. read, write, learn, and publish — all for free — no paywalls, popups, or needless pixels — just quality African stories. </p>
                    <p className="mt-10 text-[30px] md:text-[38px] md:text-lightgray">In addition to running ads, StoryAfrika aims to monetize via business blogging and writing contests. In my spare time, I enjoy coding, reading, and being around positive ppl, like my partner Lukman Aufbau.</p>
                    <img
                        className="block md:hidden   md:mx-0 mt-10 w-[336px] h-[117px]"
                        src={LukmanAufbau}
                        alt=''
                    />
                    <h2 className="block md:hidden mt-[80px] mb-[80px] ml-[20px] md:text-[60px] md:w-[50%] text-[50px] w-[50%]">Our Aim</h2>
                    <p className="block md:hidden  mb-[30px]  text-[45px]  w-[366px]">Our ultimate goal is to connect everyday Africans with one another through storytelling and writing. </p>

                    <p className="block md:hidden  mb-[30px]  text-[40px]  w-[366px]">We aim to preserve the unique stories of Africa and its people forever.</p>

                </div>
         
            </article>
        </section>
    )
}