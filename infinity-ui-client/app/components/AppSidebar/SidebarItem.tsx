'use client';
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type LinkItem = {
    title: string;
    url: string;
    icon?: React.FC | string;
    target?: string;
}


type SidebarItemPropsType = {
    links?: LinkItem[];
    category?: string;
    onClick?: () => void;
}
export const SidebarItem = ({
    category,
    links,
    onClick,
}: SidebarItemPropsType) => {

    const pathname = usePathname()

    return (
        <div className="py-4 px-2">
            <p className="font-semibold px-3 py-2 ml-1">{category}</p>
            <div className="flex flex-col gap-[1px]">
                {
                    links?.map((item) => (
                        <Link
                            key={item.title}
                            className={cn('rounded-lg text-base text-slate-900 dark:text-slate-300 px-3 py-1 hover:bg-slate-300 dark:hover:bg-zinc-700 outline-black font-thin  dark:outline-slate-50 outline-offset-1 duration-100',
                                pathname === item.url && 'bg-slate-300 dark:bg-zinc-700'
                            )}
                            href={item.url}
                            target={item.target}
                            onClick={() => {
                                onClick?.()
                            }}
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

export default SidebarItem;