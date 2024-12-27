'use client';

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

type ThemeType = 'dark' | 'light';

type ThemeTogglePropsType = {
    initial: ThemeType;
}
const ThemeToggle = ({ initial = 'dark' }: ThemeTogglePropsType) => {

    const [currentTheme, updateCurrentTheme] = useState<ThemeType>(initial);

    return (
        <button className='rounded-full border-none p-2 bg-transparent cursor-pointer hover:bg-zinc-800 duration-100'
            onClick={() => {
                updateCurrentTheme((prev) => {
                    return prev === 'dark' ? 'light' : 'dark';
                });
            }}
        >
            {
                currentTheme === 'dark' ? (
                    <Sun />
                ) : (
                    <Moon />
                )
            }
        </button>
    )
}

export default ThemeToggle;