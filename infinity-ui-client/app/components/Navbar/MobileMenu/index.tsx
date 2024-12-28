'use client';
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
                className="p-2 rounded-full"
            >
                {menuOpen ? <X /> : <Menu />}
            </button>

            {/* Menu Items */}
            <div
                className={`fixed z-[1000000] top-16 left-0 w-[95dvw] text-slate-900 dark:text-white bg-white/90 border border-slate-200 dark:border-slate-600 rounded-xl dark:bg-black/70 backdrop-blur-md ${menuOpen ? "translate-x-0" : "translate-x-[120%]"
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex flex-col items-center">
                    {links.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn("hover:text-slate-400 duration-100 py-4 w-full text-center outline-black dark:outline-slate-50 outline-offset-1",
                                index !== links.length - 1 && "border-b border-slate-200 dark:border-slate-600"
                            )}
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
