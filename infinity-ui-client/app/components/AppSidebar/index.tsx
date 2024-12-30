import { cn } from "@/lib/utils";
import SidebarItem, { LinkItem } from "./SidebarItem";

type SidebarItemType = {
    category: string,
    links: LinkItem[];
}

const SidebarItems: SidebarItemType[] = [
    {
        category: 'Getting Started',
        links: [
            { title: "Introduction", url: "/docs", icon: '' },
            { title: "Installation", url: "/docs/installation", icon: '' },
        ]
    },
    {
        category: 'Components',
        links: [
            { title: "Accordion", url: "/docs/components/accordion", icon: '' },
            { title: "Avatar", url: "/docs/components/avatar", icon: '' },
            { title: "Input Box", url: "/docs/components/input", icon: '' },
            { title: "Button", url: "/docs/components/button", icon: '' },
            { title: "Calendar", url: "/docs/components/calendar", icon: '' },
            { title: "Spinner", url: "/docs/components/spinner", icon: '' },
        ]
    }
]

const MobileItems: SidebarItemType[] = [
    {
        category: "",
        links: [
            { url: "/", title: "Home" },
            { url: "/about", title: "About" },
            { url: 'https://github.com/seeitsmanish/InfinityUI', title: "Github", target: "_blank" },
        ]
    }
]

type AppSideBarPropsType = {
    className?: string;
    isMobile?: boolean;
    onClick?: () => void;
}
export const AppSidebar = (
    { className, isMobile, onClick }: AppSideBarPropsType
) => {

    let items = [...SidebarItems];
    if (isMobile) {
        items = [...MobileItems, ...items]
    }

    return (
        <div className={cn('h-full md:w-1/6 dark:bg-zinc-950 bg-white text-base text-slate-900 dark:text-slate-300 border-r border-slate-200 dark:border-slate-600', className)}>
            {items.map((item) => (
                <SidebarItem key={item.category} onClick={onClick} {...item} />
            ))
            }
        </div>
    );
}


