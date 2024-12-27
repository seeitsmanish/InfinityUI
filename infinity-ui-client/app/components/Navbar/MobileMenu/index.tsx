'use client';
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type MobileMenuProps = {
    links: { href: string; label: string }[];
};

const MobileMenu = ({ links }: MobileMenuProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="md:hidden">
            {/* Hamburger Button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="hover:bg-zinc-800 p-2 rounded-full"
            >
                {menuOpen ? <X /> : <Menu />}
            </button>

            {/* Menu Items */}
            <div
                className={`fixed z-[1000000] top-16 left-0 w-[95dvw] bg-black/70 backdrop-blur-md ${menuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex flex-col gap-3 items-center py-4">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-slate-400 duration-100 py-2"
                            onClick={() => setMenuOpen(false)} // Close menu on link click
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
