"use client"

import { Moon, Sun, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/app/context/ThemeProvider"
import { cn } from "@/lib/utils"
type ThemeTogglePropsType = {
    className?: string;
}
export function ThemeToggle({
    className
}: ThemeTogglePropsType) {
    const { theme, setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className={cn('rounded-full border-none p-2 bg-transparent cursor-pointer duration-100', className)}>
                    {theme === "light" && <Sun />}
                    {theme === "dark" && <Moon />}
                    {theme === "system" && <Laptop />}
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem className={cn('cursor-pointer',
                    theme === 'light' && 'bg-zinc-100 dark:bg-zinc-800'
                )} onClick={() => setTheme("light")}>
                    <Sun className="h-4 w-4 mr-2" />
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem className={cn('cursor-pointer mt-1',
                    theme === 'dark' && 'bg-zinc-100 dark:bg-zinc-800')}
                    onClick={() => setTheme("dark")}>
                    <Moon className="h-4 w-4 mr-2" />
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem className={cn('cursor-pointer mt-1',
                    theme === 'system' && 'bg-zinc-100 dark:bg-zinc-800')}
                    onClick={() => setTheme("system")}>
                    <Laptop className="h-4 w-4 mr-2" />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}