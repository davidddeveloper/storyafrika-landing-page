import { Link } from "react-router-dom"
export default function FixedNav () {
    return (
        <section className="p-5 bg-extra-lightgray fixed bottom-0 flex justify-between text-black text-lg w-full">
            <div>
                {/* about us */}
                <button><Link to="/about-us">About Us</Link></button>
            </div>
            <div>
                <button> <Link to="/for-writers">For Writers</Link></button>
            </div>
            <div>
                <button> <Link to="/for-readers">For Readers</Link></button>
            </div>
        </section>
    )
}