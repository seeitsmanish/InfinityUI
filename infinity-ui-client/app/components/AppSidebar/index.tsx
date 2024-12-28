

// Menu items for Get Started and Components groups.
// const getStartedItems = [
//     { title: "Introduction", url: "#", icon: Book },
//     { title: "Installation", url: "#", icon: '' },
// ];

import { Book } from "lucide-react";
import Link from "next/link";

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

type LinkItem = {
    title: string;
    url: string;
    icon?: React.FC | string;
}

type SidebarItemPropsType = {
    links?: LinkItem[];
    category?: string;
}
export const SidebarItem = ({
    category,
    links
}: SidebarItemPropsType) => {

    return (
        <div className="py-4 px-2">
            <p className="font-semibold px-3 py-2 ml-1">{category}</p>
            <div className="flex flex-col">
                {
                    links?.map((item) => (
                        <Link
                            className="rounded-lg px-3 py-1 hover:bg-slate-300 dark:hover:bg-zinc-700 outline-black font-thin  dark:outline-slate-50 outline-offset-1 duration-100"
                            href={item.url}
                        >
                            {item.icon && <item.icon />}
                            {item.title}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export const AppSidebar = () => {
    return (
        <div className="flex-1 w-[200px] dark:bg-zinc-950 bg-white text-base text-slate-900 dark:text-slate-300 border-r border-slate-200 dark:border-slate-600">
            {
                SidebarItems.map((item) => (
                    <SidebarItem {...item} />
                ))
            }
        </div>
    );
}


