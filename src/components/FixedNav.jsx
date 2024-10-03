export default function FixedNav () {
    return (
        <section className="p-5 bg-extra-lightgray fixed bottom-0 flex justify-between text-black text-lg w-full">
            <div>
                {/* about us */}
                <button>About Us</button>
            </div>
            <div>
                <button>For Writers</button>
            </div>
            <div>
                <button>For Readers</button>
            </div>
        </section>
    )
}