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
            { title: "Introduction", url: "#", icon: '' },
            { title: "Installation", url: "#", icon: '' },
        ]
    },
    {
        category: 'Components',
        links: [
            { title: "Accordion", url: "#", icon: '' },
            { title: "Avatar", url: "#", icon: '' },
            { title: "Input Box", url: "#", icon: '' },
            { title: "Button", url: "#", icon: '' },
            { title: "Calendar", url: "#", icon: '' },
            { title: "Spinner", url: "#", icon: '' },
        ]
    }
]

const MobileItems: SidebarItemType[] = [
    {
        category: "",
        links: [
            { url: "/", title: "Home" },
            { url: "/docs", title: "Documentation" },
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
        <div className={cn('h-full dark:bg-zinc-950 bg-white text-base text-slate-900 dark:text-slate-300 border-r border-slate-200 dark:border-slate-600', className)}>
            {items.map((item) => (
                <SidebarItem key={item.category} onClick={onClick} {...item} />
            ))
            }
        </div>
    );
}


