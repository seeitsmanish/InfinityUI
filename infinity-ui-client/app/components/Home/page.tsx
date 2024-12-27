import Image from "next/image"
import { Spotlight } from "../ui/Spotlight"
import { ArrowRight, Copy } from "lucide-react"
import CopyItem from "../shared/CopyItem"
import Navbar from "../Navbar"

type HomePropsType = {}

const Home = ({ }: HomePropsType) => {
    return (
        <div className="h-[100dvh] w-[100dvw]  bg-zinc-950 text-white overflow-hidden bg-grid-white/[0.2]">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="max-w-[1080px] mx-auto h-full flex flex-col">

                <div className="mt-5 md:mt-10">
                    <Navbar />
                </div>

                <div className="hidden md:block">
                    <Spotlight className="md:top-0 md:right-0" fill="#6872F6" />
                </div>
                <div className="flex flex-1 flex-col items-center justify-center gap-4 md:gap-5 px-4">

                    {/* Heading */}
                    <div>
                        <h3 className="text-lg sm:text-xl md:text-4xl text-gray-400 text-center">Welcome to</h3>
                        <h1 className="text-3xl sm:text-4xl md:text-9xl font-bold">
                            <span
                                className="bg-gradient-to-t from-blue-500 to-purple-500 text-transparent bg-clip-text"
                            >
                                INFINITY
                            </span>
                            <span> UI</span>
                        </h1>
                    </div>

                    {/* Description */}
                    <p className="flex flex-col text-base sm:text-sm md:text-2xl text-gray-400 font-bold text-center">
                        <span>Framework-agnostic components for building your
                            <span className="md:hidden">next beautiful interface</span>
                        </span>
                        <span className="hidden md:inline-block">next beautiful interface</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
                        {/* Explore Components */}
                        <button className="relative inline-flex h-12 w-full sm:w-auto overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                <div className="flex gap-2 items-center group w-[280px] justify-center">
                                    <span>Explore Components</span>
                                    <div className="group-hover:translate-x-2 duration-300">
                                        <ArrowRight size="18" />
                                    </div>
                                </div>
                            </span>
                        </button>

                        {/* Copy Button */}
                        <div className="inline-flex h-12 w-full sm:w-auto animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 sm:px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <div className="flex gap-2 items-center w-[280px]">
                                <span>$</span> <span>npm i @seeitsmanish/infinityui</span>
                                <CopyItem content="npm i @seeitsmanish/infinityui" copyIconClassName="cursor-pointer" duration={1000} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Home
