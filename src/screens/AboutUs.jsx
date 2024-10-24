import DavidConteh from '../assets/images/davidconteh.png'
import LukmanAufbau from '../assets/images/lukmanaufbau.jpg'
import Insight from '../assets/svgs/insight.svg'
import Linkedin from '../assets/svgs/linkedin.svg'
import X from '../assets/svgs/x.svg'
import { useEffect } from "react"
import { useTheme } from "../theme"
export default function AboutUs () {
        const {theme, setTheme} = useTheme()
        useEffect(() => {
        setTheme('bg-white text-black')
    })
    
    return (
        <section className="px-5 pb-20 max-w-3xl mx-auto">
            <header className="mt-[60px] md:mt-[150px] md:w-[72%">
                <div className="container mx-auto">
                    <h2 className="md:relative md:text-[40px] md:w-[50%] text-[40px] w-[50%] font-bold">About Us</h2>
                </div>
                <img
                className='animate-pulse hidden md:block absolute top-[97px] md:left-[40%] md:h-[374px] md:w-[409.42px] md:object-cover'
                src={Insight}
                alt=''
                />
            </header>
            <article className="mt-[60px] ">
                <div className="container mx-auto md:flex md:items-center md:flex-col ">
                    <p className="mt-10 text-lightgray text-[20px] md:text-[20px]">storyafrika is built for Africans to read, write, learn, and publish. We are an open and international community of contributing writers publishing stories and expertise for saturated curious and insightful monthly readers.</p>
                    <p className="mt-10 text-lightgray text-[20px] md:text-[20px]">Founded in August 2024, storyafrika is run by COO Lukman Aufbau and CEO and founder David Conteh.</p>
                    <div className="my-20 gap-5 block md:flex justify-between items-center" >
                      
                        <div className="flex flex-row w-full h-[120px] md:w-auto">
                            <img className=" flex-shrink object-cover" src={DavidConteh} alt=""/>
                            <div className="ml-5 md:ml-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-[16px] text-lightgray">David Conteh</h3>
                                    <div className='flex'>
                                        <img className="h-[17px] w-[17px] mr-3" src={Linkedin} alt=""/>
                                        <img className="h-[17px] w-[17px] mr-3" src={X} alt=""/>
                                    </div>
                                </div>
                                <p className="mt-2 text-lightgray text-[12px]">Founder and CEO</p>
                                <p className="mt-2 text-[14px] text-lightgray">Grew up in Sierra Leone. Now a software developer, shaping the future online</p>
                            </div>
                        </div>
                        <div className="md:flex hidden md:flex-row h-[120px] flex-col w-full md:w-auto">
                            <img className="flex-shrink" src={LukmanAufbau} alt=""/>
                            <div className="ml-5 md:ml-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-[16px] text-lightgray">Lukman Aufbau</h3>
                                    <div className='flex'>
                                        <img className="h-[17px] w-[17px] mr-3" src={Linkedin}  alt=""/>
                                        <img className="h-[17px] w-[17px] mr-3" src={X}  alt=""/>
                                    </div>
                                </div>
                                <p className="mt-2 text-lightgray text-[12px]">COO</p>
                                <p className="mt-2 text-[14px] text-lightgray">Grew up in Nigeria. Professional writer. Author of My Life on a HackerNoon</p>
                            </div>
                        </div>
                          
                    </div>
                    <p className="mt-10 text-[20px] md:text-lightgray">StoryAfrika is a small team of creators, writers, and Authors people working to publish the best African stories and build the best African publishing software. </p>
                    <p className="mt-10 text-[20px] md:text-lightgray">I run the business with my partner Lukman Aufbau. Our entirely free library is Success Stories & Experiences of Everyday Africans, #shortstories, #writing, #storytelling, and everything else #African stories. Our flagship software is the content management system that powers storyafrika. It's built to connect everyday Africans through storytelling and writing. Read, write, learn, and publish — all for free — no paywalls, popups, or needless pixels — just quality African stories. </p>
                    <p className="mt-10 text-[20px] md:text-lightgray">In addition to running ads, StoryAfrika aims to monetize via business blogging and writing contests. In my spare time, I enjoy coding, reading, and being around positive ppl, like my partner Lukman Aufbau.</p>
                    <div className="mt-10 flex md:hidden w-full h-[120px] md:w-auto">
                        <img className="flex-shrink object-cover" src={LukmanAufbau} alt=""/>
                        <div className="ml-5 md:ml-10">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-[16px] text-lightgray">Lukman Aufbau</h3>
                                <div className='flex'>
                                    <img className="h-[17px] w-[17px] mr-3" src={Linkedin}  alt=""/>
                                    <img className="h-[17px] w-[17px] mr-3" src={X}  alt=""/>
                                </div>
                            </div>
                            <p className="mt-2 text-lightgray text-[12px]">COO</p>
                            <p className="mt-2 text-[14px] text-lightgray">Grew up in Nigeria. Professional writer. Author of My Life on a HackerNoon</p>
                        </div>
                    </div>
                    <section>
                        <h2 className=" mt-[80px] mb-[80px] ml-[20px] md:text-[60px] md:w-[80%] text-[40px] font-bold w-[50%]">Our Aim</h2>
                        <p className="mb-[30px]  text-[40px] font-bold text-lightgray  w-[90%] sm:w-[80%]">Our ultimate goal is to connect everyday Africans with one another through storytelling and writing. </p>
                        <p className="mb-[30px]  text-[40px] text-lightgray w-[90%] sm:w-[80%]">We aim to preserve the unique stories of Africa and its people forever.</p>

                    </section>


                </div>
         
            </article>
        </section>
    )
}