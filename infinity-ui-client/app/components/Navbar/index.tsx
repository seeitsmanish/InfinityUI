import { Github } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggler";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

type NavbarPropsType = {};

const Navbar = ({ }: NavbarPropsType) => {
    const mobileLinks = [
        { href: "/", label: "Home" },
        { href: "/docs", label: "Documentation" },
        { href: "/about", label: "About" },
        { href: '/github', label: "Github" },
    ];

    const desktopLinks = [
        { href: "/", label: "Home" },
        { href: "/docs", label: "Documentation" },
        { href: "/about", label: "About" },
    ]

    return (
        <div className="w-[95%] px-4 md:w-3/4 mx-auto flex items-center justify-between p-2 md:p-5 rounded-full backdrop-blur-md bg-transparent border border-white/10 shadow-md">
            {/* Logo */}
            <div>
                <Link href="/" className="text-2xl font-bold hover:text-slate-400 duration-100">
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
                        className="hover:text-slate-400 duration-100"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3 items-center">
                <div className="hidden md:block hover:bg-zinc-800 duration-100 p-2 cursor-pointer rounded-full">
                    <Github />
                </div>
                <div>
                    <ThemeToggle initial="dark" />
                </div>

                {/* Mobile Menu */}
                <MobileMenu links={mobileLinks} />
            </div>
        </div>
    );
};

export default Navbar;
