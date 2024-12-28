import { Github } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggler";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

type SourceType = 'home' | 'docs';

type NavbarPropsType = {
    source: SourceType;
};

const Navbar = ({ source }: NavbarPropsType) => {
    const mobileLinks = [
        { href: "/", label: "Home" },
        { href: "/docs", label: "Documentation" },
        { href: "/about", label: "About" },
        { href: '#', label: "Github" },
    ];

    const desktopLinks = [
        { href: "/", label: "Home" },
        { href: "/docs", label: "Documentation" },
        { href: "#", label: "About" },
    ]

    return (
        <div className={cn('w-[95%] px-4 md:w-3/4 mx-auto flex items-center justify-between p-2 md:p-5 rounded-full backdrop-blur-md bg-transparent border border-slate-300 dark:border-zinc-700 shadow-md dark:shadow-[#181A34]',
            source === 'docs' && 'w-full md:w-full rounded-none border-x-0'
        )}>
            {/* Logo */}
            <div>
                <Link href="/" className="text-2xl font-bold hover:bg-slate-300 dark:hover:bg-zinc-700 outline-black dark:outline-slate-50 outline-offset-1 duration-100">
                    <div className="w-10 h-10">
                        <Image src="/infinity.png" height="40" width="40" alt="Infinity UI" />
                    </div>
                </Link>
            </div>

            {/* Links for Desktop */}
            <div className="hidden md:flex gap-3">
                {desktopLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="px-3 py-2 rounded-xl hover:bg-slate-300 dark:hover:bg-zinc-700 outline-black dark:outline-slate-50 outline-offset-1 duration-100"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3 items-center">
                <button className="hidden md:block hover:bg-slate-300 dark:hover:bg-zinc-700 outline-black dark:outline-slate-50 outline-offset-1 duration-100 p-2 cursor-pointer rounded-full">
                    <Github />
                </button>
                <div>
                    <ThemeToggle className="hover:bg-slate-300 dark:hover:bg-zinc-700 outline-black dark:outline-slate-50 outline-offset-1" />
                </div>

                {/* Mobile Menu */}
                <MobileMenu links={mobileLinks} />
            </div>
        </div>
    );
};

export default Navbar;
