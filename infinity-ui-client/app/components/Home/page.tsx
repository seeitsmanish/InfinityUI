import Image from "next/image"
import { Spotlight } from "../ui/Spotlight"
import { ArrowRight, Copy } from "lucide-react"
import CopyItem from "../shared/CopyItem"

type HomePropsType = {

}
const Home = ({ }: HomePropsType) => {

    return (
        <div className="h-[100dvh] w-[100dvw] bg-zinc-950 flex justify-center items-center text-white">
            <Spotlight className="md:top-0 md:right-0" fill="#6872F6" />

            <div className="text-center flex flex-col items-center justify-center gap-5 relative">

                {/* Heading */}
                <h3 className="text-xl md:text-4xl text-gray-400">Welcome to</h3>
                <h1 className="text-4xl md:text-9xl font-bold">
                    <span
                        className="bg-gradient-to-t from-blue-500 to-purple-500 text-transparent bg-clip-text"
                    >
                        INFINITY
                    </span>
                    <span> UI</span>
                </h1>

                {/* Description */}
                <p className="flex flex-col text-lg md:text-2xl text-gray-400 text-bold">
                    <span>Framework-agnostic components for building your</span>
                    <span>next beautiful interface</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-10">

                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            <div className="flex gap-2 items-center group">
                                <span>Explore Components</span>
                                <div className="group-hover:translate-x-2 duration-300">
                                    <ArrowRight size="18" />
                                </div>
                            </div>
                        </span>
                    </button>

                    <div className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <div className="flex gap-2 items-center">
                            <span>$</span> <span>npm install infinityui</span>
                            <CopyItem content="npm install infinityui" className="cursor-pointer" duration={1000} />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Home