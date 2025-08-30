import Logo from "../common/Logo"
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="flex flex-col py-20 items-center justify-center">
            <Logo/>
            <h1 className="text-[64px]">Free <span className="font-bold text-transparent bg-clip-text text-gradient">Invoice</span> Generator</h1>
            <p className="mt-6 text-xl max-w-[640px] text-center">Show your worth. Create an invoice online customized for your brand or business using the Adobe Express invoice maker or start with a professionally designed template.</p>
            <div className="flex items-center justify-center mt-10 text-xl gap-4">
                <Link href="/create" className="bg-black dark:bg-white text-white dark:text-black px-5 py-3 rounded-3xl font-semibold">
                    Let's Start!
                </Link>
                <p className="underline">Fully free to use.</p>
            </div>
        </section>
    )
}

export default Hero
