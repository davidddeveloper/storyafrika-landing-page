import { useEffect } from 'react';
import WomanWritingSvg from '../assets/svgs/woman-writing.svg';
import { useTheme } from '../theme';

export default function ForWriters () {
    const {theme, setTheme} = useTheme()
    useEffect(() => {
        setTheme('bg-black text-white')
    })
    return (
        <section className='container mx-auto px-5 pb-20'>
            <header className='mt-20 h-[80vh]'>
                <h1 className="text-[50px] w-[50%]">For <span className="text-red">Writers</span></h1>
                <div>
                    <img className='animate-woman-writing' src={WomanWritingSvg} alt="" />
                </div>
            </header>
            <main className="px-5">
                <p className="text-[30px] text-white">StoryAfrika elevates African writing far and wide across the interwebs. With saturated stories in our library, we've cultivated rare publishing and African expertise. African writers of all genres, so writers from all African industries are welcome here. To the contributing writer, we pledge quality story distribution, African editorial expertise, and community growth.</p>
            </main>
        </section>
    )
}