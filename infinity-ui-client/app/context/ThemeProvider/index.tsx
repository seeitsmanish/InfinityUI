'use client';
import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";


export type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
}

const ThemeContext = createContext<{
    theme: Theme;
    setTheme: (theme: Theme) => void;
}>({
    theme: 'system',
    setTheme: (theme: Theme) => null
})

const getThemeFromLocalStorage = () => {
    return window?.localStorage.getItem('systemTheme') as Theme || 'system';
}

export function ThemeProvider({
    children,
    defaultTheme = getThemeFromLocalStorage()
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    // on initial render check for user preference saved
    useLayoutEffect(() => {
        const root = window.document.documentElement;
        const savesThemePreference = localStorage.getItem('systemTheme');
        if (savesThemePreference) {
            setTheme(savesThemePreference as Theme);
            root.classList.add(savesThemePreference);
            return;
        }
    }, [])

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');

        // first check for if there is any saved preference already exisiting in localStorage           
        if (theme === 'system') {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ?
                'dark' :
                'light';
            root.classList.add(systemTheme);
            localStorage.setItem('systemTheme', theme);
            return;
        }
        localStorage.setItem('systemTheme', theme);
        root.classList.add(theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context;
}