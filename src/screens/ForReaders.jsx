import WomanReadingSvg from '../assets/svgs/woman-reading.svg';

export default function ForReaders () {
    return (
        <section className='container mx-auto px-5 pb-20'>
            <header className='mt-20 h-[80vh]'>
                <h1 className="text-[50px] w-[50%]">For <span className="text-lightblue">Readers</span></h1>
                <div>
                    <img className='animate-woman-reading' src={WomanReadingSvg} alt="" />
                </div>
            </header>
            <main className="px-5">
                <p className="text-[30px] text-lightgray">storyafrika reflects the African writing industry with insightful, educational, and timely stories written by real African professionals. To the internet visitor, we pledge no paywall, no pop-up ads, and ≈42 new stories every day. Learn anything about Africa for free on storyafrika.</p>
            </main>
        </section>
    )
}