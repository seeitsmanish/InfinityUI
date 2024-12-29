'use client';
import { cn } from "@/lib/utils";
import { useState } from "react";

export type TabItem = {
    index: number,
    title: string | React.ReactNode;
    content: string | React.ReactNode;
    className?: string;
}

type TabsPropsType = {
    tabs: TabItem[],
    onChange?: (index: number) => void,
}

const Tabs = ({ tabs = [], onChange }: TabsPropsType) => {

    const [activeTab, setActiveTab] = useState<TabItem | undefined>(() => {
        return tabs.length > 0 ? tabs[0] : undefined
    });

    if (!tabs.length) return null;

    return (
        <div className="mt-5">
            <div>
                {tabs.map((tab) => (
                    <button
                        key={tab.index}
                        className={cn('dark:text-slate-400 text-slate-600 font-medium py-1 px-4',
                            activeTab?.index === tab.index && 'border-b-2 border-black text-black dark:border-white dark:text-white'
                        )}
                        onClick={() => {
                            setActiveTab(tab);
                            onChange?.(tab.index)
                        }}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            <div className='mt-5 w-full min-h-[200px] max-h-[400px] overflow-auto flex justify-center items-center border border-slate-400 rounded-lg dark:border-slate-700'>
                <div className={`${activeTab?.className}`}>
                    {activeTab?.content}
                </div>
            </div>
        </div>
    )
}

export default Tabs;