import { Github } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggler";
import Image from "next/image";

type NavbarPropsType = {

}
const Navbar = ({ }: NavbarPropsType) => {

    return (
        <div className="w-3/4 mx-auto flex items-center justify-between p-5 rounded-full backdrop-blur-md bg-transparent border border-white/10 shadow-md">
            <div>
                <Link href="/" className="text-2xl font-bold hover:text-slate-400 duration-100">
                    <div className="w-10 h-10">
                        <Image src='/infinity.png' height="40" width="40" alt="Infinity UI" />
                    </div>
                </Link>
            </div>
            <div className="flex gap-3">
                <Link href="/" className="hover:text-slate-400 duration-100">
                    Home
                </Link>
                <Link href="/docs" className="hover:text-slate-400 duration-100">
                    Documentation
                </Link>
                <Link href="/about" className="hover:text-slate-400 duration-100">
                    About
                </Link>
            </div>

            <div className="flex gap-3">
                <div className="hover:bg-zinc-800 duration-100 p-2 cursor-pointer rounded-full">
                    <Github />
                </div>

                <div>
                    <ThemeToggle initial="dark" />
                </div>
            </div>

        </div >
    );

}

export default Navbar;